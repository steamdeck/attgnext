# Dynamic Sitemap Setup

This project now includes a dynamic sitemap that automatically discovers all pages and can be extended for dynamic content.

## What's Included

### 1. Dynamic Sitemap (`src/app/sitemap.ts`)
- Automatically discovers all static pages from your file system
- Supports route groups (directories with parentheses)
- Includes proper SEO metadata (priority, change frequency, last modified)
- Extensible for dynamic content

### 2. Utility Functions (`src/lib/sitemap-utils.ts`)
- Helper functions for dynamic content discovery
- Configurable route metadata
- Easy to extend for new content types

### 3. Robots.txt (`src/app/robots.ts`)
- Automatically generated robots.txt
- References the sitemap
- Configurable disallow rules

## How It Works

The sitemap automatically scans your `src/app` directory and finds all `page.tsx` files, converting them to URLs. It handles:

- **Route Groups**: Directories like `(home1)` and `(innerpage)` are properly handled
- **Nested Routes**: All subdirectories are scanned recursively
- **Dynamic Content**: Ready for blog posts, projects, and other dynamic content

## Current Pages Discovered

Based on your current structure, the sitemap includes:

### Main Pages
- `/` (Home - Priority: 1.0)
- `/about` (Priority: 0.8)
- `/contact` (Priority: 0.8)
- `/pricing` (Priority: 0.8)
- `/faq` (Priority: 0.5)

### Service Pages
- `/service` (Priority: 0.8)
- `/service/seo`
- `/service/smm`
- `/service/ppc`
- `/service/email-marketing`
- `/service/whatsapp-marketing`
- `/service/web-development`
- `/service/crm`
- `/service/erp`
- `/service/mobile-application`
- `/service/ecommerce`
- `/service/lms`
- `/service/digital-marketing`
- `/service/service-details`

### Blog Pages
- `/blog` (Priority: 0.7)
- `/blog/blog-details`
- `/blog-sidebar`

### Project Pages
- `/project` (Priority: 0.7)
- `/project/project-details`

### Team Pages
- `/team` (Priority: 0.8)
- `/team/team-details`

### Alternative Home Pages
- `/home2`
- `/home3`
- `/headers-showcase`

## Adding Dynamic Content

To add dynamic content (like blog posts or projects), update the functions in `src/lib/sitemap-utils.ts`:

### For Blog Posts
```typescript
export async function getBlogPosts(): Promise<string[]> {
  // Example: Read from a content directory
  const blogDir = join(process.cwd(), 'content/blog')
  const files = readdirSync(blogDir)
  return files.map(file => file.replace('.md', ''))
  
  // Or fetch from an API
  // const response = await fetch('https://your-api.com/blog-posts')
  // const posts = await response.json()
  // return posts.map(post => post.slug)
}
```

### For Dynamic Projects
```typescript
export async function getProjectRoutes(): Promise<string[]> {
  // Similar implementation for projects
  return []
}
```

## Configuration

### Environment Variables
Set your domain in your environment variables:
```bash
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### Customizing Route Metadata
Edit the `getRouteMetadata` function in `src/lib/sitemap-utils.ts` to adjust priorities and change frequencies for different route patterns.

## Testing

1. Start your development server: `npm run dev`
2. Visit `http://localhost:3000/sitemap.xml` to see your sitemap
3. Visit `http://localhost:3000/robots.txt` to see your robots.txt

## SEO Benefits

- **Automatic Discovery**: New pages are automatically included
- **Proper Priorities**: Important pages get higher priority scores
- **Change Frequencies**: Tells search engines how often to crawl
- **Last Modified Dates**: Helps with caching and indexing
- **XML Format**: Standard sitemap format for search engines

## Future Enhancements

The system is designed to be easily extensible:

1. **CMS Integration**: Connect to your CMS to fetch dynamic content
2. **Database Integration**: Pull content from your database
3. **File-based Content**: Read from markdown files or other content files
4. **API Integration**: Fetch content from external APIs

## Adding New Pages

Simply create a new `page.tsx` file in any directory under `src/app`, and it will automatically be included in the sitemap on the next build or when the sitemap is regenerated.

The sitemap is generated dynamically, so it will always be up-to-date with your current page structure!
