const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'images.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  
  console.log('Connected to database\n');
  
  // Check the service page specifically
  db.get(`
    SELECT id, route, page_name, title, meta_title, updated_at 
    FROM page_metadata 
    WHERE route = '/service'
  `, (err, row) => {
    if (err) {
      console.error('Error querying database:', err);
      db.close();
      return;
    }
    
    if (row) {
      console.log('Service Page Data:');
      console.log('==================');
      console.log(`ID: ${row.id}`);
      console.log(`Route: ${row.route}`);
      console.log(`Page Name: ${row.page_name}`);
      console.log(`Title: "${row.title}"`);
      console.log(`Meta Title: ${row.meta_title}`);
      console.log(`Last Updated: ${row.updated_at}`);
      console.log('\nRaw data:');
      console.log(JSON.stringify(row, null, 2));
    } else {
      console.log('No service page found with route /service');
    }
    
    db.close();
  });
});
