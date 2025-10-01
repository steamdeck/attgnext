# Enhanced Page Editor

A comprehensive admin panel for editing website content without touching code.

## Features

### 🎯 Core Functionality
- **Visual Page Selection**: Choose from all available pages in your website
- **Component Browsing**: Browse and filter editable content sections
- **Real-time Editing**: Edit text, images, links, and other content directly
- **Live Preview**: See image previews and content context
- **Search & Filter**: Find specific content by type or keywords

### 🔧 Supported Content Types
- **Text Content**: Paragraphs, descriptions, and general text
- **Titles**: Main headings (H1 elements)
- **Subtitles**: Section headings (H2, H3 elements)
- **Images**: Image sources with live preview
- **Links**: Navigation and external links
- **Descriptions**: Longer content blocks

### 🛡️ Safety Features
- **Automatic Backups**: Creates backups before making changes
- **Context Information**: Shows surrounding code for better understanding
- **Validation**: Prevents invalid content from being saved
- **Error Handling**: Graceful error handling with user feedback

## How to Use

### 1. Access the Editor
Navigate to `/admin/page-editor` in your admin panel or use the "Page Editor" option in the sidebar.

### 2. Select a Page
- Choose from available pages (Home, About, Services, etc.)
- Each page shows the number of editable sections

### 3. Browse Components
- Use the search bar to find specific content
- Filter by content type (Text, Images, Links, etc.)
- Click on any component to edit it

### 4. Edit Content
- Modify text, image URLs, or link addresses
- See live previews for images
- Review context information for better understanding

### 5. Save Changes
- Review your changes
- Click "Save Changes" to apply
- The system creates automatic backups

## File Structure

```
src/
├── lib/
│   ├── page-editor.ts              # Basic page editor functionality
│   ├── enhanced-page-editor.ts     # Advanced parsing and editing
│   └── backup-system.ts            # Backup and restore functionality
├── app/
│   ├── api/pages/
│   │   └── route.ts                # API endpoints for page operations
│   ├── admin/
│   │   ├── page-editor/
│   │   │   └── page.tsx            # Main page editor interface
│   │   └── page-editor-demo/
│   │       └── page.tsx            # Demo and instructions page
│   └── Components/Admin/
│       ├── PageEditor.tsx          # Basic editor component
│       ├── EnhancedPageEditor.tsx  # Advanced editor with more features
│       └── PageEditorQuickStart.tsx # Quick start widget for dashboard
```

## API Endpoints

### GET /api/pages
Returns all available pages with their editable components.

### POST /api/pages
Updates a specific component in a page.
```json
{
  "filePath": "src/app/(home1)/page.tsx",
  "componentId": "text-25-0-45",
  "oldContent": "Original text",
  "newContent": "Updated text"
}
```

## Configuration

The page editor automatically detects pages from the following structure:
- Home pages: `(home1)`, `home2`, `home3`
- Inner pages: `about`, `service`, `project`, `blog`, `contact`, `pricing`, `team`, `faq`

To add more pages, update the `pageConfigs` array in `enhanced-page-editor.ts`.

## Best Practices

### Content Guidelines
- Keep titles concise and descriptive
- Use clear, engaging descriptions
- Ensure image URLs are accessible
- Test links before saving
- Maintain consistent tone across pages

### Technical Tips
- Use the search feature to find specific content
- Filter by type to focus on specific elements
- Check the context information for better understanding
- Use the preview feature to see changes
- Always review changes before saving

## Troubleshooting

### Common Issues
1. **Content not updating**: Check if the file path is correct and the file exists
2. **Images not showing**: Verify the image URL is accessible
3. **Search not working**: Ensure the search term matches content in the components

### Error Messages
- "Failed to update page": Check file permissions and paths
- "Component not found": The component may have been moved or deleted
- "Invalid content": The content doesn't match the expected format

## Development

### Adding New Content Types
1. Update the parsing logic in `enhanced-page-editor.ts`
2. Add the new type to the filter options in `EnhancedPageEditor.tsx`
3. Update the UI components to handle the new type

### Extending Functionality
The page editor is designed to be extensible. You can:
- Add new parsing patterns for different JSX structures
- Implement additional content types
- Add more advanced editing features
- Integrate with external APIs for content management

## Security Notes

- The editor only allows editing of content, not structural changes
- File operations are restricted to the configured pages directory
- Automatic backups prevent data loss
- All changes are logged and can be reverted

## Support

For issues or questions about the page editor:
1. Check the demo page at `/admin/page-editor-demo`
2. Review the console for error messages
3. Verify file permissions and paths
4. Check the backup system for previous versions
