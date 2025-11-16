# PowerShell script to build Next.js app for cPanel deployment
# This creates a static export in the 'out' folder

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "Building Next.js app for cPanel" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Set environment variable for cPanel export
$env:CPANEL_EXPORT = "true"

# Clean previous builds
if (Test-Path "out") {
    Write-Host "Cleaning previous build..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "out" -ErrorAction SilentlyContinue
}

if (Test-Path ".next") {
    Write-Host "Cleaning .next directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force ".next" -ErrorAction SilentlyContinue
}

# Temporarily rename API directory to exclude it from static export
$apiPath = "src\app\api"
$apiBackupPath = "src\app\_api_backup"
$apiExists = Test-Path $apiPath

if ($apiExists) {
    Write-Host "Temporarily excluding API routes from build..." -ForegroundColor Yellow
    if (Test-Path $apiBackupPath) {
        Remove-Item -Recurse -Force $apiBackupPath -ErrorAction SilentlyContinue
    }
    Move-Item -Path $apiPath -Destination $apiBackupPath -Force
}

try {
    # Build the application
    Write-Host "Building static export..." -ForegroundColor Green
    npm run build
    
    # Restore API directory
    if ($apiExists) {
        Write-Host "Restoring API routes..." -ForegroundColor Yellow
        if (Test-Path $apiPath) {
            Remove-Item -Recurse -Force $apiPath -ErrorAction SilentlyContinue
        }
        Move-Item -Path $apiBackupPath -Destination $apiPath -Force
    }
} catch {
    # Restore API directory on error
    if ($apiExists) {
        Write-Host "Restoring API routes after error..." -ForegroundColor Red
        if (Test-Path $apiPath) {
            Remove-Item -Recurse -Force $apiPath -ErrorAction SilentlyContinue
        }
        if (Test-Path $apiBackupPath) {
            Move-Item -Path $apiBackupPath -Destination $apiPath -Force
        }
    }
    throw
}

# Check if build was successful
if (Test-Path "out") {
    Write-Host ""
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host "Build completed successfully!" -ForegroundColor Green
    Write-Host "=========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Build location: ./out/" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Yellow
    Write-Host "1. Zip the 'out' folder contents" -ForegroundColor White
    Write-Host "2. Upload to cPanel File Manager" -ForegroundColor White
    Write-Host "3. Extract in your public_html or domain folder" -ForegroundColor White
    Write-Host ""
    
    # Get folder size
    $folderSize = (Get-ChildItem -Path "out" -Recurse -File | Measure-Object -Property Length -Sum).Sum / 1MB
    Write-Host "Build size: $([math]::Round($folderSize, 2)) MB" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "=========================================" -ForegroundColor Red
    Write-Host "Build failed! Check the error messages above." -ForegroundColor Red
    Write-Host "=========================================" -ForegroundColor Red
    exit 1
}

# Clear environment variable
Remove-Item Env:CPANEL_EXPORT

