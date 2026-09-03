#!/bin/bash
# Bash script to build Next.js app for cPanel deployment
# This creates a static export in the 'out' folder

echo "========================================="
echo "Building Next.js app for cPanel"
echo "========================================="
echo ""

# Set environment variable for cPanel export
export CPANEL_EXPORT=true

# Clean previous builds
if [ -d "out" ]; then
    echo "Cleaning previous build..."
    rm -rf out
fi

if [ -d ".next" ]; then
    echo "Cleaning .next directory..."
    rm -rf .next
fi

# Temporarily rename API directory to exclude it from static export
API_PATH="src/app/api"
API_BACKUP_PATH="src/app/_api_backup"

if [ -d "$API_PATH" ]; then
    echo "Temporarily excluding API routes from build..."
    if [ -d "$API_BACKUP_PATH" ]; then
        rm -rf "$API_BACKUP_PATH"
    fi
    mv "$API_PATH" "$API_BACKUP_PATH"
    API_EXISTS=true
else
    API_EXISTS=false
fi

# Build the application
echo "Building static export..."
if npm run build; then
    # Restore API directory on success
    if [ "$API_EXISTS" = true ]; then
        echo "Restoring API routes..."
        if [ -d "$API_PATH" ]; then
            rm -rf "$API_PATH"
        fi
        mv "$API_BACKUP_PATH" "$API_PATH"
    fi
else
    # Restore API directory on error
    if [ "$API_EXISTS" = true ]; then
        echo "Restoring API routes after error..."
        if [ -d "$API_PATH" ]; then
            rm -rf "$API_PATH"
        fi
        if [ -d "$API_BACKUP_PATH" ]; then
            mv "$API_BACKUP_PATH" "$API_PATH"
        fi
    fi
    exit 1
fi

# Check if build was successful
if [ -d "out" ]; then
    echo ""
    echo "========================================="
    echo "Build completed successfully!"
    echo "========================================="
    echo ""
    echo "Build location: ./out/"
    echo ""
    echo "Next steps:"
    echo "1. Zip the 'out' folder contents"
    echo "2. Upload to cPanel File Manager"
    echo "3. Extract in your public_html or domain folder"
    echo ""
    
    # Get folder size (works on Linux/Mac)
    if command -v du &> /dev/null; then
        SIZE=$(du -sh out | cut -f1)
        echo "Build size: $SIZE"
    fi
else
    echo ""
    echo "========================================="
    echo "Build failed! Check the error messages above."
    echo "========================================="
    exit 1
fi

# Clear environment variable
unset CPANEL_EXPORT

