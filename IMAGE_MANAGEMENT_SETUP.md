# Image Management Dashboard Setup

This document provides instructions for setting up and using the Image Management Dashboard for the AT Tech Global NextJS project.

## Features

- **Centralized Image Management**: Manage all website images from a single dashboard
- **SEO Optimization**: Track and improve image SEO scores with metadata management
- **Image Upload & Replace**: Upload new images or replace existing ones
- **Page Mapping**: Track which images are used on which pages
- **Bulk Operations**: Edit multiple images simultaneously
- **Search & Filter**: Find images quickly with advanced search capabilities
- **Analytics**: View comprehensive SEO analysis and recommendations

## Setup Instructions

### 1. Install Dependencies

The required dependencies should already be installed, but if you need to install them manually:

```bash
npm install sqlite3 @types/sqlite3 sharp multer @types/multer
```

### 2. Initialize Database

Run the database initialization script:

```bash
node scripts/init-database.js
```

This will create the SQLite database and necessary tables for image management.

### 3. Start Development Server

```bash
npm run dev
```

### 4. Access the Dashboard

1. Navigate to `http://localhost:3000/admin/login`
2. Login with:
   - **Username**: `admin`
   - **Password**: `admin123`
3. Click on "Image Management" in the sidebar

## Usage Guide

### Initial Setup

1. **Scan Existing Images**: Click "Scan Existing Images" to automatically detect and add all images from your `public/assets/img` directory to the database.

2. **Upload New Images**: Use the "Upload Images" button to add new images with drag-and-drop functionality.

### Managing Images

#### Viewing Images
- Browse all images in a grid layout
- Use search to find specific images by name, title, alt text, or tags
- Sort by various criteria (upload date, file size, SEO score, etc.)
- View detailed information by clicking on any image

#### Editing Image Metadata
- Click on an image to view details
- Click "Edit Image" to modify:
  - **Title**: SEO-friendly title for the image
  - **Alt Text**: Accessibility description (critical for SEO)
  - **Caption**: Optional caption text
  - **Description**: Detailed image description
  - **Tags**: Comma-separated tags for categorization

#### SEO Optimization
- Switch to the "SEO Analysis" tab to view:
  - Overall SEO score distribution
  - Images with missing metadata
  - Performance recommendations
  - Images needing attention

#### Image Operations
- **Replace Image**: Upload a new file to replace an existing image while keeping metadata
- **Delete Image**: Remove images from the database and file system
- **Copy URL**: Copy image URLs for use in content

### SEO Best Practices

1. **Alt Text**: Always provide descriptive alt text for accessibility and SEO
2. **Titles**: Use descriptive, keyword-rich titles
3. **File Names**: Use descriptive filenames (handled automatically)
4. **File Size**: Keep images under 2MB for optimal performance
5. **Resolution**: Use appropriate resolutions for your use case

### Page Mapping

The system automatically tracks which images are used on which pages. This helps you:
- Identify unused images
- Update images across multiple pages
- Maintain consistency in image usage

## API Endpoints

The system provides several API endpoints for programmatic access:

- `GET /api/images` - List all images with pagination and filtering
- `POST /api/images` - Upload new image
- `GET /api/images/[id]` - Get specific image details
- `PUT /api/images/[id]` - Update image metadata
- `DELETE /api/images/[id]` - Delete image
- `POST /api/images/[id]/replace` - Replace image file
- `GET /api/images/[id]/usage` - Get image usage information
- `POST /api/images/scan` - Scan existing images
- `GET /api/seo/analysis` - Get SEO analysis

## Database Schema

The system uses SQLite with two main tables:

### Images Table
- `id`: Primary key
- `filename`: Generated unique filename
- `original_name`: Original uploaded filename
- `title`: SEO title
- `alt_text`: Alt text for accessibility
- `caption`: Image caption
- `description`: Detailed description
- `file_path`: Path to image file
- `file_size`: File size in bytes
- `width`, `height`: Image dimensions
- `format`: Image format (MIME type)
- `tags`: Comma-separated tags
- `upload_date`: When image was uploaded
- `last_modified`: When metadata was last updated
- `seo_score`: Calculated SEO score (0-100)
- `usage_count`: Number of times image is used

### Image Usage Table
- `id`: Primary key
- `image_id`: Foreign key to images table
- `page_path`: Path of page using the image
- `page_title`: Title of the page
- `usage_context`: Context of image usage
- `created_at`: When usage was recorded

## Security

- Authentication required for all operations
- File type validation for uploads
- File size limits (10MB per image)
- SQL injection protection
- XSS protection

## Troubleshooting

### Common Issues

1. **Database not found**: Run the initialization script
2. **Upload fails**: Check file size and type restrictions
3. **Images not loading**: Verify file paths and permissions
4. **SEO scores not updating**: Refresh the page after editing metadata

### File Permissions

Ensure the following directories are writable:
- `data/` (for SQLite database)
- `public/uploads/` (for uploaded images)

## Future Enhancements

Planned features for future versions:
- AI-powered alt text generation
- Cloud storage integration (AWS S3, etc.)
- Advanced analytics and reporting
- Bulk SEO optimization tools
- Image compression and optimization
- CDN integration
- Team collaboration features

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review the API documentation
3. Check browser console for errors
4. Verify database and file permissions

---

**Note**: This system is designed for development and small to medium websites. For production use with high traffic, consider implementing additional optimizations and using a more robust database system.
