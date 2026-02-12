const fs = require('fs');
const path = require('path');

// Function to recursively find all page.tsx files
function findPageFiles(dir, pages = []) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules, .next, out directories
      if (!['node_modules', '.next', 'out', '.git'].includes(file)) {
        findPageFiles(filePath, pages);
      }
    } else if (file === 'page.tsx' || file === 'page.jsx') {
      pages.push(filePath);
    }
  }
  
  return pages;
}

// Convert file path to route
function filePathToRoute(filePath) {
  // Remove src/app/ prefix
  let route = filePath.replace(/\\/g, '/').replace(/^.*\/src\/app\//, '');
  
  // Handle route groups (directories in parentheses)
  route = route.replace(/\([^)]+\)\//g, '');
  
  // Remove page.tsx
  route = route.replace(/\/page\.(tsx|jsx)$/, '');
  
  // Handle root page
  if (route === '') {
    return '/';
  }
  
  // Add leading slash
  return '/' + route;
}

// Generate page name from route
function generatePageName(route) {
  if (route === '/') return 'Home Page';
  
  // Remove leading slash and split by slashes
  const parts = route.substring(1).split('/');
  
  // Handle service routes specially
  if (parts[0] === 'services' && parts.length > 1) {
    const service = parts[1];
    const serviceName = service
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return serviceName + ' Service';
  }
  
  // Capitalize each word
  return parts
    .map(part => {
      // Handle special cases
      const specialCases = {
        'smm': 'Social Media Marketing',
        'crm': 'CRM Solutions',
        'seo': 'SEO Services',
        'ppc': 'PPC Advertising',
        'erp': 'ERP Solutions',
        'lms': 'LMS Platform',
        'faq': 'FAQ',
        'blog': 'Blog'
      };
      
      if (specialCases[part]) {
        return specialCases[part];
      }
      
      return part
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    })
    .join(' ');
}

// Generate SEO metadata for a page
function generateMetadata(route, pageName) {
  const baseUrl = 'https://attechglobal.com';
  const baseTitle = 'AT Tech Global';
  
  // Default metadata
  let metadata = {
    title: `${pageName} | ${baseTitle}`,
    meta_title: `${pageName} | Digital Marketing Agency`,
    meta_description: `Professional ${pageName.toLowerCase()} services from AT Tech Global. Expert solutions for your business growth.`,
    keywords: `${pageName.toLowerCase()}, digital marketing, at tech global`,
    og_title: `${pageName} | ${baseTitle}`,
    og_description: `Discover our professional ${pageName.toLowerCase()} services designed to help your business succeed.`,
    og_image: '/assets/img/hero-bg.jpg',
    canonical_url: `${baseUrl}${route}`,
    robots_index: 1,
    robots_follow: 1
  };
  
  // Customize for specific pages
  if (route === '/') {
    metadata.title = 'AT Tech Global - Digital Marketing & Web Solutions';
    metadata.meta_title = 'AT Tech Global | Digital Marketing Agency in Gurugram';
    metadata.meta_description = 'Leading digital marketing agency in Gurugram offering SEO, web development, social media marketing, and content marketing services to help businesses grow online.';
    metadata.keywords = 'digital marketing, seo, web development, gurugram, social media marketing';
  } else if (route.includes('/services/')) {
    const service = route.split('/services/')[1];
    metadata.meta_description = `Expert ${pageName.toLowerCase()} services to boost your business growth. Professional solutions tailored for your success.`;
    metadata.keywords = `${service} services, ${pageName.toLowerCase()}, digital marketing`;
  } else if (route === '/about') {
    metadata.meta_description = 'Learn about AT Tech Global\'s mission to help businesses succeed online through innovative digital marketing strategies.';
    metadata.keywords = 'about us, digital marketing agency, gurugram';
  } else if (route === '/contact') {
    metadata.meta_description = 'Ready to grow your business? Contact AT Tech Global today for a free consultation. We\'re here to help you succeed.';
    metadata.keywords = 'contact us, digital marketing consultation, gurugram';
  }
  
  return metadata;
}

// Main function
function discoverPages() {
  const appDir = path.join(__dirname, '..', 'src', 'app');
  const pageFiles = findPageFiles(appDir);
  
  console.log(`Found ${pageFiles.length} page files:\n`);
  
  const pages = [];
  
  for (const filePath of pageFiles) {
    const route = filePathToRoute(filePath);
    const pageName = generatePageName(route);
    const metadata = generateMetadata(route, pageName);
    
    pages.push({
      route,
      page_name: pageName,
      ...metadata
    });
    
    console.log(`Route: ${route}`);
    console.log(`Page: ${pageName}`);
    console.log(`File: ${filePath.replace(path.join(__dirname, '..'), '')}`);
    console.log('---');
  }
  
  // Save to JSON file
  const outputPath = path.join(__dirname, 'discovered-pages.json');
  fs.writeFileSync(outputPath, JSON.stringify(pages, null, 2));
  console.log(`\nDiscovered ${pages.length} pages. Saved to ${outputPath}`);
  
  return pages;
}

// Run the discovery
discoverPages();
