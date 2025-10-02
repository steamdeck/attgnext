import fs from 'fs';
import path from 'path';

export interface PageComponent {
  name: string;
  path: string;
  type: 'text' | 'image' | 'link' | 'video';
  content: string;
  attributes?: Record<string, string>;
  position: {
    line: number;
    column: number;
  };
}

export interface EditablePage {
  route: string;
  name: string;
  components: PageComponent[];
  filePath: string;
}

export class PageEditor {
  private pagesDirectory: string;
  
  constructor() {
    // Only set the directory if we're in a runtime environment
    if (typeof window === 'undefined') {
      this.pagesDirectory = path.join(process.cwd(), 'src/app');
    } else {
      this.pagesDirectory = '';
    }
  }
  
  // Define all available pages with their routes and display names
  private pageConfigs = [
    { route: '/', name: 'Home Page', filePath: 'src/app/page.tsx' },
    { route: '/home2', name: 'Home Page 2', filePath: 'src/app/home2/page.tsx' },
    { route: '/home3', name: 'Home Page 3', filePath: 'src/app/home3/page.tsx' },
    { route: '/about', name: 'About Page', filePath: 'src/app/(innerpage)/about/page.tsx' },
    { route: '/service', name: 'Services Page', filePath: 'src/app/(innerpage)/service/page.tsx' },
    { route: '/project', name: 'Projects Page', filePath: 'src/app/(innerpage)/project/page.tsx' },
    { route: '/blog', name: 'Blog Page', filePath: 'src/app/(innerpage)/blog/page.tsx' },
    { route: '/contact', name: 'Contact Page', filePath: 'src/app/(innerpage)/contact/page.tsx' },
    { route: '/pricing', name: 'Pricing Page', filePath: 'src/app/(innerpage)/pricing/page.tsx' },
    { route: '/team', name: 'Team Page', filePath: 'src/app/(innerpage)/team/page.tsx' },
    { route: '/faq', name: 'FAQ Page', filePath: 'src/app/(innerpage)/faq/page.tsx' },
  ];

  // Get all available pages
  async getAvailablePages(): Promise<EditablePage[]> {
    // Return empty array if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return [];
    }
    
    const pages: EditablePage[] = [];
    
    for (const config of this.pageConfigs) {
      try {
        const filePath = path.join(process.cwd(), config.filePath);
        if (fs.existsSync(filePath)) {
          const components = await this.parsePageComponents(filePath);
          pages.push({
            route: config.route,
            name: config.name,
            components,
            filePath: config.filePath
          });
        }
      } catch (error) {
        console.error(`Error reading page ${config.name}:`, error);
      }
    }
    
    return pages;
  }

  // Parse a page file to extract editable components
  private async parsePageComponents(filePath: string): Promise<PageComponent[]> {
    // Return empty array if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return [];
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const components: PageComponent[] = [];
    
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Extract text content from JSX
      const textMatches = line.match(/>([^<>]+)</g);
      if (textMatches) {
        textMatches.forEach(match => {
          const textContent = match.slice(1, -1).trim();
          if (textContent && textContent.length > 3 && !textContent.match(/^[{}()[\]]+$/)) {
            components.push({
              name: `Text - Line ${i + 1}`,
              path: `${filePath}:${i + 1}`,
              type: 'text',
              content: textContent,
              position: { line: i + 1, column: line.indexOf(match) }
            });
          }
        });
      }
      
      // Extract image sources
      const imageMatches = line.match(/src=["']([^"']+)["']/g);
      if (imageMatches) {
        imageMatches.forEach(match => {
          const src = match.match(/src=["']([^"']+)["']/)?.[1];
          if (src) {
            components.push({
              name: `Image - Line ${i + 1}`,
              path: `${filePath}:${i + 1}`,
              type: 'image',
              content: src,
              position: { line: i + 1, column: line.indexOf(match) }
            });
          }
        });
      }
      
      // Extract links
      const linkMatches = line.match(/href=["']([^"']+)["']/g);
      if (linkMatches) {
        linkMatches.forEach(match => {
          const href = match.match(/href=["']([^"']+)["']/)?.[1];
          if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
            components.push({
              name: `Link - Line ${i + 1}`,
              path: `${filePath}:${i + 1}`,
              type: 'link',
              content: href,
              position: { line: i + 1, column: line.indexOf(match) }
            });
          }
        });
      }
    }
    
    return components;
  }

  // Update a specific component in a page
  async updatePageComponent(filePath: string, oldContent: string, newContent: string): Promise<boolean> {
    // Return false if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return false;
    }
    
    try {
      const fullPath = path.join(process.cwd(), filePath);
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Simple replacement - in a real app, you'd want more sophisticated parsing
      content = content.replace(oldContent, newContent);
      
      fs.writeFileSync(fullPath, content, 'utf-8');
      return true;
    } catch (error) {
      console.error('Error updating page component:', error);
      return false;
    }
  }

  // Get component content for editing
  async getComponentContent(filePath: string, line: number, column: number): Promise<string | null> {
    // Return null if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return null;
    }
    
    try {
      const fullPath = path.join(process.cwd(), filePath);
      const content = fs.readFileSync(fullPath, 'utf-8');
      const lines = content.split('\n');
      
      if (line > 0 && line <= lines.length) {
        return lines[line - 1];
      }
      
      return null;
    } catch (error) {
      console.error('Error getting component content:', error);
      return null;
    }
  }
}

export const pageEditor = new PageEditor();
