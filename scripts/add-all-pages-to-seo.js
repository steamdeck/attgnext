const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbPath = path.join(__dirname, '..', 'data', 'images.db');

// Read discovered pages
const discoveredPages = JSON.parse(fs.readFileSync(path.join(__dirname, 'discovered-pages.json'), 'utf8'));

// Filter out admin pages and keep only main content pages
const contentPages = discoveredPages.filter(page => 
  !page.route.startsWith('/admin') && 
  !page.route.includes('/service-details') &&
  !page.route.includes('/blog-details') &&
  !page.route.includes('/team-details')
);

console.log(`Adding ${contentPages.length} content pages to SEO dashboard...\n`);

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  
  console.log('Connected to database\n');
  
  let processed = 0;
  let inserted = 0;
  let skipped = 0;
  
  contentPages.forEach(page => {
    const query = `
      INSERT OR IGNORE INTO page_metadata (
        route, page_name, title, meta_title, meta_description, keywords,
        og_title, og_description, og_image, canonical_url,
        robots_index, robots_follow
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const params = [
      page.route,
      page.page_name,
      page.title || '',
      page.meta_title || '',
      page.meta_description || '',
      page.keywords || '',
      page.og_title || '',
      page.og_description || '',
      page.og_image || '',
      page.canonical_url || '',
      page.robots_index !== undefined ? page.robots_index : 1,
      page.robots_follow !== undefined ? page.robots_follow : 1
    ];
    
    db.run(query, params, function(err) {
      if (err) {
        console.error(`Error inserting ${page.route}:`, err);
      } else {
        if (this.changes > 0) {
          console.log(`✓ Added: ${page.page_name} (${page.route})`);
          inserted++;
        } else {
          console.log(`- Skipped (exists): ${page.page_name} (${page.route})`);
          skipped++;
        }
      }
      
      processed++;
      
      // Close database when all pages are processed
      if (processed === contentPages.length) {
        db.get('SELECT COUNT(*) as count FROM page_metadata', (err, row) => {
          console.log(`\n=== SUMMARY ===`);
          console.log(`Total pages in database: ${row.count}`);
          console.log(`Newly added: ${inserted}`);
          console.log(`Already existed: ${skipped}`);
          console.log(`================`);
          db.close();
        });
      }
    });
  });
});
