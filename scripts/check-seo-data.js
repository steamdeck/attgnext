const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'images.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  
  console.log('Connected to database');
  
  // Check if page_metadata table exists
  db.get("SELECT name FROM sqlite_master WHERE type='table' AND name='page_metadata'", (err, row) => {
    if (err) {
      console.error('Error checking table:', err);
      db.close();
      return;
    }
    
    if (!row) {
      console.log('page_metadata table does not exist');
      db.close();
      return;
    }
    
    console.log('page_metadata table exists');
    
    // Count records
    db.get('SELECT COUNT(*) as count FROM page_metadata', (err, row) => {
      if (err) {
        console.error('Error counting records:', err);
        db.close();
        return;
      }
      
      console.log(`Found ${row.count} page metadata records`);
      
      if (row.count > 0) {
        // Show sample records
        db.all('SELECT id, route, page_name FROM page_metadata LIMIT 5', (err, rows) => {
          if (err) {
            console.error('Error fetching records:', err);
          } else {
            console.log('Sample records:');
            rows.forEach(row => {
              console.log(`  ID: ${row.id}, Route: ${row.route}, Page: ${row.page_name}`);
            });
          }
          db.close();
        });
      } else {
        db.close();
      }
    });
  });
});
