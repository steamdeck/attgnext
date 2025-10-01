const { Database } = require('sqlite3')
const path = require('path')
const fs = require('fs')

// Database file path
const DB_PATH = path.join(process.cwd(), 'data', 'images.db')

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Initialize database
function initDatabase() {
  return new Promise((resolve, reject) => {
    const db = new Database(DB_PATH, (err) => {
      if (err) {
        console.error('Error opening database:', err)
        reject(err)
        return
      }
      
      console.log('Connected to SQLite database')
      createTables(db).then(() => {
        db.close((err) => {
          if (err) {
            reject(err)
            return
          }
          console.log('Database connection closed')
          resolve()
        })
      }).catch(reject)
    })
  })
}

// Create tables
function createTables(db) {
  return new Promise((resolve, reject) => {
    const run = (sql, params = []) => {
      return new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
          if (err) {
            reject(err)
            return
          }
          resolve({ id: this.lastID, changes: this.changes })
        })
      })
    }

    Promise.all([
      run(`
        CREATE TABLE IF NOT EXISTS images (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          filename VARCHAR(255) NOT NULL,
          original_name VARCHAR(255),
          title VARCHAR(255),
          alt_text TEXT,
          caption TEXT,
          description TEXT,
          file_path VARCHAR(500) NOT NULL,
          file_size INTEGER,
          width INTEGER,
          height INTEGER,
          format VARCHAR(10),
          tags TEXT,
          upload_date DATETIME DEFAULT CURRENT_TIMESTAMP,
          last_modified DATETIME DEFAULT CURRENT_TIMESTAMP,
          seo_score INTEGER DEFAULT 0,
          usage_count INTEGER DEFAULT 0
        )
      `),
      run(`
        CREATE TABLE IF NOT EXISTS image_usage (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          image_id INTEGER,
          page_path VARCHAR(500),
          page_title VARCHAR(255),
          usage_context TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
          FOREIGN KEY (image_id) REFERENCES images(id)
        )
      `)
    ]).then(() => {
      console.log('Database tables created successfully')
      resolve()
    }).catch(reject)
  })
}

async function initializeDatabase() {
  try {
    console.log('Initializing image management database...')
    await initDatabase()
    console.log('✅ Database initialized successfully!')
    console.log('')
    console.log('You can now:')
    console.log('1. Start your Next.js development server: npm run dev')
    console.log('2. Navigate to /admin/login')
    console.log('3. Login with username: admin, password: admin123')
    console.log('4. Go to Image Management to start managing your images')
    console.log('')
    console.log('Features available:')
    console.log('- Upload new images')
    console.log('- Scan existing images from public/assets/img')
    console.log('- Edit image metadata (title, alt text, caption, etc.)')
    console.log('- SEO analysis and optimization')
    console.log('- Track image usage across pages')
    console.log('- Replace image files while keeping metadata')
  } catch (error) {
    console.error('❌ Error initializing database:', error)
    process.exit(1)
  }
}

initializeDatabase()
