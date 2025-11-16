# cPanel Deployment Guide

This guide explains how to deploy your Next.js static export to cPanel file manager.

## 📦 Building for cPanel

### Option 1: Using PowerShell Script (Windows)
```powershell
.\build-cpanel.ps1
```

### Option 2: Using Bash Script (Linux/Mac)
```bash
chmod +x build-cpanel.sh
./build-cpanel.sh
```

### Option 3: Using npm script
```bash
npm run build:cpanel
```

**Note:** The scripts automatically:
- Clean previous builds
- Temporarily exclude API routes (which require server-side support)
- Build static export
- Restore API routes
- Create optimized static files in the `out/` folder

## 📁 Build Output

After building, you'll find all static files in the `out/` folder:
```
out/
├── index.html
├── about/
│   └── index.html
├── service/
│   ├── index.html
│   └── [service pages]/
├── _next/
│   ├── static/
│   └── chunks/
└── assets/
    └── img/
```

## 🚀 Deployment Steps

### Step 1: Prepare the Build
1. Run the build script to create the static export:
   ```powershell
   .\build-cpanel.ps1
   ```

2. Verify the `out/` folder exists and contains all files

### Step 2: Create a Zip File
1. Navigate to the `out` folder
2. Select all files and folders inside `out/`
3. Create a zip file (e.g., `website.zip`)
   - **Important:** Zip the contents of `out/`, not the `out` folder itself

### Step 3: Upload to cPanel
1. Log in to your cPanel account
2. Navigate to **File Manager**
3. Go to your domain's root directory:
   - `public_html/` (main domain)
   - `public_html/yourdomain.com/` (addon domain)
   - `public_html/subdomain/` (subdomain)

### Step 4: Upload and Extract
1. Click **Upload** in File Manager
2. Upload your `website.zip` file
3. Wait for upload to complete
4. Select the zip file and click **Extract**
5. Extract to the current directory (or your domain folder)

### Step 5: Verify Deployment
1. Visit your domain in a browser
2. Check that all pages load correctly
3. Verify images and assets are loading
4. Test navigation between pages

## ⚠️ Important Notes

### API Routes Not Included
- **Admin features will NOT work** on the static export
- API routes require server-side support (Node.js)
- Admin pages will load but won't function without the backend
- This is expected for static hosting

### Public Pages Only
The static export includes:
- ✅ All public pages (home, about, services, blog, etc.)
- ✅ All static assets (images, CSS, JavaScript)
- ✅ SEO files (robots.txt, sitemap.xml)
- ❌ Admin dashboard (requires API routes)
- ❌ Admin API endpoints (requires server)

### Image Optimization
- Images are set to `unoptimized: true` for static export
- Original images from `public/assets/img/` are included
- All images are copied to the build output

### Trailing Slashes
- Static export uses trailing slashes (`/about/` instead of `/about`)
- This is required for proper static hosting
- Links automatically include trailing slashes

## 🔧 Troubleshooting

### Build Fails
- **Error:** "Cannot find module" or "API route error"
  - **Solution:** The build script should handle this automatically by excluding API routes
  - If errors persist, check that the script is running correctly

### Pages Not Loading
- **Issue:** 404 errors on pages
- **Solution:** 
  - Verify files were extracted correctly
  - Check that `.htaccess` rules are working (if needed)
  - Ensure trailing slashes in URLs

### Images Not Showing
- **Issue:** Images don't load
- **Solution:**
  - Check that `public/assets/img/` folder is included in build
  - Verify image paths in the HTML
  - Check browser console for 404 errors

### CSS/JavaScript Not Loading
- **Issue:** Styling or scripts not working
- **Solution:**
  - Verify `_next/static/` folder is uploaded
  - Check file permissions (should be 644 for files, 755 for folders)
  - Clear browser cache

## 📋 Checklist

Before deploying:
- [ ] Build completed successfully
- [ ] `out/` folder exists and contains files
- [ ] All pages are included in the build
- [ ] Images are present in the build
- [ ] Zip file created correctly

After deploying:
- [ ] Website loads in browser
- [ ] All pages are accessible
- [ ] Images display correctly
- [ ] Navigation works
- [ ] CSS/styles are applied
- [ ] JavaScript functions work
- [ ] Mobile responsive design works

## 🔄 Updating the Site

To update your site:
1. Make changes to your code
2. Run the build script again: `.\build-cpanel.ps1`
3. Create a new zip file from `out/` folder
4. Upload and extract to cPanel (overwrite existing files)

## 📞 Support

If you encounter issues:
1. Check the build logs for errors
2. Verify all files were uploaded correctly
3. Check cPanel error logs
4. Verify file permissions
5. Test in different browsers

## 🎯 Next Steps

After successful deployment:
1. Set up custom domain (if needed)
2. Configure SSL certificate
3. Set up redirects (if needed)
4. Test all pages and functionality
5. Monitor site performance

---

**Note:** This static export is for public-facing pages only. Admin features require a Node.js server and cannot be deployed as static files.

