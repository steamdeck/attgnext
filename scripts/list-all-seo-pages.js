const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'images.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  
  console.log('Connected to database\n');
  
  db.all('SELECT id, route, page_name FROM page_metadata ORDER BY route', (err, rows) => {
    if (err) {
      console.error('Error fetching records:', err);
      db.close();
      return;
    }
    
    console.log('All SEO Pages:');
    console.log('==============');
    rows.forEach((row, index) => {
      console.log(`${index + 1}. ${row.page_name}`);
      console.log(`   Route: ${row.route}`);
      console.log(`   ID: ${row.id}\n`);
    });
    
    console.log(`Total: ${rows.length} pages`);
    db.close();
  });
});
