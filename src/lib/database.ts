import { Database } from 'sqlite3'
import { promisify } from 'util'
import path from 'path'
import fs from 'fs'

// Database file path
const DB_PATH = path.join(process.cwd(), 'data', 'images.db')

// Ensure data directory exists
const dataDir = path.join(process.cwd(), 'data')
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true })
}

// Database instance
let db: Database | null = null

export interface ImageRecord {
  id: number
  filename: string
  original_name: string
  title: string
  alt_text: string
  caption: string
  description: string
  file_path: string
  file_size: number
  width: number
  height: number
  format: string
  tags: string
  upload_date: string
  last_modified: string
  seo_score: number
  usage_count: number
}

export interface ImageUsageRecord {
  id: number
  image_id: number
  page_path: string
  page_title: string
  usage_context: string
  created_at: string
}

// Initialize database
export function initDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    db = new Database(DB_PATH, (err) => {
      if (err) {
        console.error('Error opening database:', err)
        reject(err)
        return
      }
      
      console.log('Connected to SQLite database')
      createTables().then(resolve).catch(reject)
    })
  })
}

// Create tables
async function createTables(): Promise<void> {
  if (!db) throw new Error('Database not initialized')

  const run = promisify(db.run.bind(db))

  // Images table
  await run(`
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
  `)

  // Image usage table
  await run(`
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

  console.log('Database tables created successfully')
}

// Get database instance
export function getDatabase(): Database {
  if (!db) {
    throw new Error('Database not initialized. Call initDatabase() first.')
  }
  return db
}

// Close database connection
export function closeDatabase(): Promise<void> {
  return new Promise((resolve, reject) => {
    if (!db) {
      resolve()
      return
    }
    
    db.close((err) => {
      if (err) {
        reject(err)
        return
      }
      console.log('Database connection closed')
      db = null
      resolve()
    })
  })
}

// Helper function to run queries
export function runQuery(sql: string, params: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    const database = getDatabase()
    database.run(sql, params, function(err) {
      if (err) {
        reject(err)
        return
      }
      resolve({ id: this.lastID, changes: this.changes })
    })
  })
}

// Helper function to get single record
export function getQuery(sql: string, params: any[] = []): Promise<any> {
  return new Promise((resolve, reject) => {
    const database = getDatabase()
    database.get(sql, params, (err, row) => {
      if (err) {
        reject(err)
        return
      }
      resolve(row)
    })
  })
}

// Helper function to get multiple records
export function allQuery(sql: string, params: any[] = []): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const database = getDatabase()
    database.all(sql, params, (err, rows) => {
      if (err) {
        reject(err)
        return
      }
      resolve(rows)
    })
  })
}
