/**
 * Metadata Generator Script
 * Scans all pages in src/app and generates JSON metadata files in data/metadata
 */

const fs = require('fs');
const path = require('path');

// Configuration
const APP_DIR = path.join(process.cwd(), 'src', 'app');
const METADATA_DIR = path.join(process.cwd(), 'data', 'metadata');
const BASE_URL = 'https://attechglobal.com';

// Ensure metadata directory exists
if (!fs.existsSync(METADATA_DIR)) {
  fs.mkdirSync(METADATA_DIR, { recursive: true });
}

// Default metadata template
const createDefaultMetadata = (route, pageName) => ({
  id: Date.now(),
  route: route,
  page_name: pageName,
  title: `${pageName} | AT Tech Global`,
  meta_title: `${pageName} | AT Tech Global`,
  meta_description: `Explore ${pageName} at AT Tech Global - Your trusted digital marketing agency in Gurugram.`,
  keywords: 'digital marketing, SEO, web development, gurugram',
  og_title: `${pageName} | AT Tech Global`,
  og_description: `Discover ${pageName} at AT Tech Global`,
  og_image: '/assets/img/hero-bg.jpg',
  canonical_url: `${BASE_URL}${route}`,
  robots_index: true,
  robots_follow: true,
  twitter_title: `${pageName} | AT Tech Global`,
  twitter_description: `Explore ${pageName} at AT Tech Global`,
  twitter_image: '/assets/img/hero-bg.jpg',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
});

// Extract metadata from page.tsx files
const extractMetadataFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Check for exported metadata object
    const metadataMatch = content.match(/export\s+(?:const|let|var)\s+metadata\s*[:=]\s*({[\s\S]*?});?\s*(?:export|const|function|interface|$)/);
    
    if (metadataMatch) {
      // Extract title and description from metadata
      const titleMatch = content.match(/title\s*:\s*["']([^"']+)["']/);
      const descriptionMatch = content.match(/description\s*:\s*["']([^"']+)["']/);
      const keywordsMatch = content.match(/keywords\s*:\s*(?:\[[^\]]*\]|["']([^"']+)["'])/);
      
      return {
        title: titleMatch ? titleMatch[1] : null,
        description: descriptionMatch ? descriptionMatch[1] : null,
        keywords: keywordsMatch ? keywordsMatch[1] || extractKeywords(keywordsMatch[0]) : null
      };
    }
    
    // Check for SEOHead component usage
    const seoHeadMatch = content.match(/SEOHead[\s\S]*?route\s*=\s*["']([^"']+)["']/);
    const defaultTitleMatch = content.match(/defaultTitle\s*=\s*["']([^"']+)["']/);
    const defaultDescMatch = content.match(/defaultDescription\s*=\s*["']([^"']+)["']/);
    const defaultKeywordsMatch = content.match(/defaultKeywords\s*=\s*["']([^"']+)["']/);
    
    if (seoHeadMatch) {
      return {
        route: seoHeadMatch[1],
        title: defaultTitleMatch ? defaultTitleMatch[1] : null,
        description: defaultDescMatch ? defaultDescMatch[1] : null,
        keywords: defaultKeywordsMatch ? defaultKeywordsMatch[1] : null
      };
    }
    
    return null;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return null;
  }
};

// Extract keywords from array syntax
const extractKeywords = (keywordString) => {
  const matches = keywordString.match(/["']([^"']+)["']/g);
  return matches ? matches.map(k => k.replace(/["']/g, '')).join(', ') : '';
};

// Get page name from route
const getPageName = (route) => {
  if (route === '/') return 'Home Page';
  const parts = route.split('/').filter(Boolean);
  if (parts.length === 0) return 'Home Page';
  
  const lastPart = parts[parts.length - 1];
  return lastPart
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ') + ' Page';
};

// Get route from directory path
const getRouteFromPath = (relativePath) => {
  // Handle route groups like (home1), (innerpage)
  const cleanPath = relativePath
    .replace(/\([^)]+\)/g, '')
    .replace(/\/+/g, '/')
    .replace(/\/$/, '');
  
  return cleanPath || '/';
};

// Scan directory for pages
const scanDirectory = (dir, relativePath = '') => {
  const results = [];
  
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name);
      const itemRelativePath = path.join(relativePath, item.name);
      
      if (item.isDirectory()) {
        // Skip certain directories
        if (['Components', 'api', 'admin', 'assets'].includes(item.name)) {
          continue;
        }
        
        // Check if directory has a page.tsx or page.jsx
        const pageFile = ['page.tsx', 'page.jsx', 'page.js'].find(f => 
          fs.existsSync(path.join(fullPath, f))
        );
        
        if (pageFile) {
          const route = getRouteFromPath(itemRelativePath);
          const pageFilePath = path.join(fullPath, pageFile);
          const extractedData = extractMetadataFromFile(pageFilePath);
          
          results.push({
            route,
            filePath: pageFilePath,
            pageName: getPageName(route),
            ...extractedData
          });
        }
        
        // Recursively scan subdirectories
        results.push(...scanDirectory(fullPath, itemRelativePath));
      }
    }
    
    // Check for root page.tsx in current directory
    const rootPage = ['page.tsx', 'page.jsx', 'page.js'].find(f => 
      fs.existsSync(path.join(dir, f))
    );
    
    if (rootPage && relativePath && !results.find(r => r.route === getRouteFromPath(relativePath))) {
      const route = getRouteFromPath(relativePath);
      const pageFilePath = path.join(dir, rootPage);
      const extractedData = extractMetadataFromFile(pageFilePath);
      
      results.push({
        route,
        filePath: pageFilePath,
        pageName: getPageName(route),
        ...extractedData
      });
    }
  } catch (error) {
    console.error(`Error scanning ${dir}:`, error.message);
  }
  
  return results;
};

// Generate metadata file for a page
const generateMetadataFile = (pageInfo, existingMetadata = null) => {
  const { route, pageName, title, description, keywords } = pageInfo;
  
  // Use extracted values or defaults
  const pageTitle = title || pageName;
  const pageDescription = description || `Explore ${pageName} at AT Tech Global - Your trusted digital marketing agency in Gurugram.`;
  const pageKeywords = keywords || 'digital marketing, SEO, web development, gurugram';
  
  const metadata = {
    id: existingMetadata?.id || Date.now(),
    route: route,
    page_name: pageName,
    title: pageTitle,
    meta_title: existingMetadata?.meta_title || pageTitle,
    meta_description: existingMetadata?.meta_description || pageDescription,
    keywords: existingMetadata?.keywords || pageKeywords,
    og_title: existingMetadata?.og_title || pageTitle,
    og_description: existingMetadata?.og_description || pageDescription,
    og_image: existingMetadata?.og_image || '/assets/img/hero-bg.jpg',
    canonical_url: existingMetadata?.canonical_url || `${BASE_URL}${route}`,
    robots_index: existingMetadata?.robots_index ?? true,
    robots_follow: existingMetadata?.robots_follow ?? true,
    twitter_title: existingMetadata?.twitter_title || pageTitle,
    twitter_description: existingMetadata?.twitter_description || pageDescription,
    twitter_image: existingMetadata?.twitter_image || '/assets/img/hero-bg.jpg',
    created_at: existingMetadata?.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  return metadata;
};

// Get filename for route
const getFilename = (route) => {
  if (route === '/') return 'home.json';
  // Replace slashes with dashes to keep it flat
  return route.replace(/^\//, '').replace(/\//g, '-') + '.json';
};

// Ensure directory exists for file
const ensureDirectoryExists = (filePath) => {
  const dirname = path.dirname(filePath);
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
};

// Main function
const main = () => {
  console.log('🔍 Scanning pages in src/app...\n');
  
  // Scan for all pages
  const pages = scanDirectory(APP_DIR);
  
  // Add root page if not found
  const rootPagePath = path.join(APP_DIR, 'page.tsx');
  if (fs.existsSync(rootPagePath) && !pages.find(p => p.route === '/')) {
    const extractedData = extractMetadataFromFile(rootPagePath);
    pages.push({
      route: '/',
      filePath: rootPagePath,
      pageName: 'Home Page',
      ...extractedData
    });
  }
  
  // Remove duplicates
  const uniquePages = pages.filter((page, index, self) => 
    index === self.findIndex(p => p.route === page.route)
  );
  
  console.log(`Found ${uniquePages.length} pages:\n`);
  
  // Generate metadata files
  let created = 0;
  let updated = 0;
  let skipped = 0;
  
  uniquePages.forEach(page => {
    const filename = getFilename(page.route);
    const filePath = path.join(METADATA_DIR, filename);
    
    let existingMetadata = null;
    if (fs.existsSync(filePath)) {
      try {
        existingMetadata = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      } catch (e) {
        console.log(`  ⚠️  Corrupted file: ${filename}`);
      }
    }
    
    const metadata = generateMetadataFile(page, existingMetadata);
    
    ensureDirectoryExists(filePath);
    fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2));
    
    if (existingMetadata) {
      console.log(`  📝 Updated: ${filename} (${page.route})`);
      updated++;
    } else {
      console.log(`  ✨ Created: ${filename} (${page.route})`);
      created++;
    }
  });
  
  console.log(`\n✅ Done! Created: ${created}, Updated: ${updated}`);
  console.log(`📁 Metadata files saved to: ${METADATA_DIR}`);
};

main();
