import fs from 'fs';
import path from 'path';

export interface EnhancedPageComponent {
  id: string;
  name: string;
  path: string;
  type: 'text' | 'image' | 'link' | 'video' | 'title' | 'subtitle' | 'description';
  content: string;
  attributes?: Record<string, string>;
  position: {
    line: number;
    column: number;
  };
  context: string; // Surrounding context for better identification
}

export interface EditablePage {
  route: string;
  name: string;
  components: EnhancedPageComponent[];
  filePath: string;
  preview?: string;
}

export class EnhancedPageEditor {
  private pagesDirectory: string;
  
  constructor() {
    // Only set the directory if we're in a runtime environment
    if (typeof window === 'undefined') {
      this.pagesDirectory = path.join(process.cwd(), 'src/app');
    } else {
      this.pagesDirectory = '';
    }
  }
  
  private pageConfigs = [
    { route: '/', name: 'Home Page 1', filePath: 'src/app/(home1)/page.tsx' },
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

  private async parsePageComponents(filePath: string): Promise<EnhancedPageComponent[]> {
    // Return empty array if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return [];
    }
    
    const content = fs.readFileSync(filePath, 'utf-8');
    const components: EnhancedPageComponent[] = [];
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNumber = i + 1;
      
      // Enhanced text parsing - look for specific JSX patterns
      this.parseTextComponents(line, lineNumber, components);
      this.parseImageComponents(line, lineNumber, components);
      this.parseLinkComponents(line, lineNumber, components);
      this.parseTitleComponents(line, lineNumber, components);
    }
    
    return components;
  }

  private parseTextComponents(line: string, lineNumber: number, components: EnhancedPageComponent[]) {
    // Look for text content in various JSX patterns
    const textPatterns = [
      />([^<>]+)</g, // Basic text content
      /className="[^"]*">([^<]+)</g, // Text with classes
      /placeholder="([^"]+)"/g, // Placeholder text
      /aria-label="([^"]+)"/g, // Aria labels
    ];

    textPatterns.forEach((pattern, patternIndex) => {
      const matches = line.matchAll(pattern);
      for (const match of matches) {
        const textContent = match[1]?.trim();
        if (textContent && textContent.length > 2 && !this.isIgnoredText(textContent)) {
          const context = this.getLineContext(line, lineNumber);
          components.push({
            id: `text-${lineNumber}-${patternIndex}-${match.index}`,
            name: `Text Content - Line ${lineNumber}`,
            path: `${lineNumber}`,
            type: this.determineTextType(textContent),
            content: textContent,
            position: { line: lineNumber, column: match.index || 0 },
            context
          });
        }
      }
    });
  }

  private parseImageComponents(line: string, lineNumber: number, components: EnhancedPageComponent[]) {
    const imagePatterns = [
      /src=["']([^"']+)["']/g,
      /backgroundImage:\s*["']url\(["']([^"']+)["']\)/g,
    ];

    imagePatterns.forEach((pattern, patternIndex) => {
      const matches = line.matchAll(pattern);
      for (const match of matches) {
        const src = match[1];
        if (src && !src.startsWith('data:') && !src.startsWith('blob:')) {
          const context = this.getLineContext(line, lineNumber);
          components.push({
            id: `image-${lineNumber}-${patternIndex}-${match.index}`,
            name: `Image - Line ${lineNumber}`,
            path: `${lineNumber}`,
            type: 'image',
            content: src,
            position: { line: lineNumber, column: match.index || 0 },
            context
          });
        }
      }
    });
  }

  private parseLinkComponents(line: string, lineNumber: number, components: EnhancedPageComponent[]) {
    const linkPattern = /href=["']([^"']+)["']/g;
    const matches = line.matchAll(linkPattern);
    
    for (const match of matches) {
      const href = match[1];
      if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
        const context = this.getLineContext(line, lineNumber);
        components.push({
          id: `link-${lineNumber}-${match.index}`,
          name: `Link - Line ${lineNumber}`,
          path: `${lineNumber}`,
          type: 'link',
          content: href,
          position: { line: lineNumber, column: match.index || 0 },
          context
        });
      }
    }
  }

  private parseTitleComponents(line: string, lineNumber: number, components: EnhancedPageComponent[]) {
    // Look for heading elements and title-like content
    const titlePatterns = [
      /<h1[^>]*>([^<]+)</g,
      /<h2[^>]*>([^<]+)</g,
      /<h3[^>]*>([^<]+)</g,
      /className="[^"]*title[^"]*"[^>]*>([^<]+)</g,
    ];

    titlePatterns.forEach((pattern, patternIndex) => {
      const matches = line.matchAll(pattern);
      for (const match of matches) {
        const titleContent = match[1]?.trim();
        if (titleContent && titleContent.length > 2) {
          const context = this.getLineContext(line, lineNumber);
          components.push({
            id: `title-${lineNumber}-${patternIndex}-${match.index}`,
            name: `Title - Line ${lineNumber}`,
            path: `${lineNumber}`,
            type: this.determineTitleType(pattern),
            content: titleContent,
            position: { line: lineNumber, column: match.index || 0 },
            context
          });
        }
      }
    });
  }

  private determineTextType(text: string): 'text' | 'title' | 'subtitle' | 'description' {
    if (text.length > 100) return 'description';
    if (text.length < 20 && (text.includes('About') || text.includes('Services') || text.includes('Contact'))) {
      return 'subtitle';
    }
    return 'text';
  }

  private determineTitleType(pattern: RegExp): 'title' | 'subtitle' {
    return pattern.source.includes('h1') ? 'title' : 'subtitle';
  }

  private isIgnoredText(text: string): boolean {
    const ignoredPatterns = [
      /^[{}()[\]]+$/,
      /^\s*$/,
      /^[\d\s%$]+$/,
      /^(div|span|p|h[1-6]|button|a|img)$/i,
    ];
    
    return ignoredPatterns.some(pattern => pattern.test(text));
  }

  private getLineContext(line: string, lineNumber: number): string {
    // Extract meaningful context from the line
    const cleanLine = line.trim();
    if (cleanLine.length > 100) {
      return cleanLine.substring(0, 100) + '...';
    }
    return cleanLine;
  }

  async updatePageComponent(filePath: string, componentId: string, oldContent: string, newContent: string): Promise<boolean> {
    // Return false if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return false;
    }
    
    try {
      const fullPath = path.join(process.cwd(), filePath);
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // More sophisticated replacement that considers context
      const lines = content.split('\n');
      const component = await this.findComponentById(filePath, componentId);
      
      if (component) {
        const lineIndex = component.position.line - 1;
        if (lineIndex >= 0 && lineIndex < lines.length) {
          const originalLine = lines[lineIndex];
          const updatedLine = originalLine.replace(oldContent, newContent);
          lines[lineIndex] = updatedLine;
          content = lines.join('\n');
        }
      } else {
        // Fallback to simple replacement
        content = content.replace(oldContent, newContent);
      }
      
      fs.writeFileSync(fullPath, content, 'utf-8');
      return true;
    } catch (error) {
      console.error('Error updating page component:', error);
      return false;
    }
  }

  private async findComponentById(filePath: string, componentId: string): Promise<EnhancedPageComponent | null> {
    const components = await this.parsePageComponents(filePath);
    return components.find(comp => comp.id === componentId) || null;
  }

  async getPagePreview(route: string): Promise<string> {
    // This would typically render the page and return HTML
    // For now, we'll return a placeholder
    return `<div>Preview for ${route}</div>`;
  }
}

export const enhancedPageEditor = new EnhancedPageEditor();
