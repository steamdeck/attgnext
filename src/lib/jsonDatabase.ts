import fs from 'fs/promises'
import path from 'path'

export interface PageMetadataRecord {
  id: number
  route: string
  page_name: string
  title: string
  meta_title: string
  meta_description: string
  keywords: string
  og_title: string
  og_description: string
  og_image: string
  canonical_url: string
  robots_index: boolean
  robots_follow: boolean
  twitter_title: string
  twitter_description: string
  twitter_image: string
  created_at: string
  updated_at: string
}

const METADATA_DIR = path.join(process.cwd(), 'data', 'metadata')

// Helper to get file path for a route
function getMetadataFilePath(route: string): string {
  if (route === '/') {
    return path.join(METADATA_DIR, 'home.json')
  }
  
  const parts = route.split('/').filter(Boolean)
  if (parts.length === 1) {
    return path.join(METADATA_DIR, `${parts[0]}.json`)
  }
  
  const fileName = parts.join('_') + '.json'
  const nestedPath = path.join(METADATA_DIR, ...parts.slice(0, -1), `${parts[parts.length - 1]}.json`)
  return nestedPath
}

// Helper to ensure directory exists
async function ensureDir() {
  try {
    await fs.mkdir(METADATA_DIR, { recursive: true })
  } catch (error) {
    // Directory might exist
  }
}

// Helper to read a single metadata file
async function readMetadataFile(route: string): Promise<PageMetadataRecord | null> {
  try {
    await ensureDir()
    const filePath = getMetadataFilePath(route)
    const content = await fs.readFile(filePath, 'utf8')
    return JSON.parse(content)
  } catch (error) {
    return null
  }
}

// Helper to write a single metadata file
async function writeMetadataFile(metadata: PageMetadataRecord): Promise<void> {
  await ensureDir()
  const filePath = getMetadataFilePath(metadata.route)
  await fs.writeFile(filePath, JSON.stringify(metadata, null, 2), 'utf8')
}

export async function getMetadata(route: string): Promise<PageMetadataRecord | null> {
  return readMetadataFile(route)
}

export async function getAllMetadata(
  page: number = 1,
  limit: number = 50,
  search: string = ''
): Promise<{ data: PageMetadataRecord[]; pagination: any }> {
  await ensureDir()
  
  try {
    const files = await fs.readdir(METADATA_DIR)
    const allMetadata: PageMetadataRecord[] = []

    for (const file of files) {
      if (file.endsWith('.json')) {
        const filePath = path.join(METADATA_DIR, file)
        const content = await fs.readFile(filePath, 'utf8')
        allMetadata.push(JSON.parse(content))
      }
    }

    // Sort by route
    allMetadata.sort((a, b) => a.route.localeCompare(b.route))

    // Apply search filter
    let filtered = allMetadata
    if (search) {
      const term = search.toLowerCase()
      filtered = filtered.filter(
        m =>
          m.route.toLowerCase().includes(term) ||
          m.page_name.toLowerCase().includes(term) ||
          m.title.toLowerCase().includes(term) ||
          m.meta_title.toLowerCase().includes(term)
      )
    }

    const totalCount = filtered.length
    const totalPages = Math.ceil(totalCount / limit)
    const offset = (page - 1) * limit
    const data = filtered.slice(offset, offset + limit)

    return {
      data,
      pagination: {
        currentPage: page,
        totalPages,
        totalCount,
        hasNext: page < totalPages,
        hasPrev: page > 1
      }
    }
  } catch (error) {
    console.error('Error reading metadata files:', error)
    return {
      data: [],
      pagination: { currentPage: page, totalPages: 0, totalCount: 0, hasNext: false, hasPrev: false }
    }
  }
}

export async function createMetadata(
  data: Omit<PageMetadataRecord, 'id' | 'created_at' | 'updated_at'>
): Promise<PageMetadataRecord> {
  // Check if route already exists
  const existing = await readMetadataFile(data.route)
  if (existing) {
    throw new Error('Route already exists')
  }

  const now = new Date().toISOString()
  const newRecord: PageMetadataRecord = {
    ...data,
    id: Math.floor(Math.random() * 10000),
    created_at: now,
    updated_at: now
  }

  await writeMetadataFile(newRecord)
  return newRecord
}

export async function updateMetadata(
  route: string,
  updates: Partial<PageMetadataRecord>
): Promise<PageMetadataRecord | null> {
  const existing = await readMetadataFile(route)
  if (!existing) {
    return null
  }

  const now = new Date().toISOString()
  const updated: PageMetadataRecord = {
    ...existing,
    ...updates,
    route: existing.route, // Prevent route changes
    updated_at: now
  }

  await writeMetadataFile(updated)
  return updated
}

export async function deleteMetadata(route: string): Promise<boolean> {
  try {
    await ensureDir()
    const filePath = getMetadataFilePath(route)
    await fs.unlink(filePath)
    return true
  } catch (error) {
    return false
  }
}

export async function seedDefaultMetadata() {
  const defaultMetadata: Array<Omit<PageMetadataRecord, 'id' | 'created_at' | 'updated_at'>> = [
    {
      route: '/',
      page_name: 'Home Page',
      title: 'AT Tech Global - Digital Marketing Agency in Gurugram',
      meta_title: 'AT Tech Global | Digital Marketing & Web Development',
      meta_description: 'Leading digital marketing agency offering SEO, web development, and online marketing solutions in Gurugram, India.',
      keywords: 'digital marketing, SEO, web development, gurugram',
      og_title: 'AT Tech Global - Digital Marketing Agency',
      og_description: 'Transform your business with our digital marketing solutions',
      og_image: '/assets/img/hero-bg.jpg',
      canonical_url: 'https://attechglobal.com/',
      robots_index: true,
      robots_follow: true,
      twitter_title: 'AT Tech Global',
      twitter_description: 'Digital Marketing Solutions',
      twitter_image: '/assets/img/hero-bg.jpg'
    },
    {
      route: '/about',
      page_name: 'About Page',
      title: 'About AT Tech Global | Your Partner in Digital Excellence',
      meta_title: 'About AT Tech Global - Digital Marketing Experts',
      meta_description: 'Learn about AT Tech Global mission to help businesses succeed online through innovative digital marketing strategies.',
      keywords: 'about us, digital marketing agency, gurugram',
      og_title: 'About AT Tech Global',
      og_description: 'Discover our story and expertise',
      og_image: '/assets/img/hero-bg.jpg',
      canonical_url: 'https://attechglobal.com/about',
      robots_index: true,
      robots_follow: true,
      twitter_title: 'About AT Tech Global',
      twitter_description: 'Digital Marketing Experts',
      twitter_image: '/assets/img/hero-bg.jpg'
    },
    {
      route: '/contact',
      page_name: 'Contact Page',
      title: 'Contact AT Tech Global | Get in Touch',
      meta_title: 'Contact Us | AT Tech Global',
      meta_description: 'Ready to grow your business? Contact AT Tech Global today for a free consultation.',
      keywords: 'contact us, digital marketing consultation, gurugram',
      og_title: 'Contact AT Tech Global',
      og_description: 'Reach out to us for your digital marketing needs',
      og_image: '/assets/img/hero-bg.jpg',
      canonical_url: 'https://attechglobal.com/contact',
      robots_index: true,
      robots_follow: true,
      twitter_title: 'Contact AT Tech Global',
      twitter_description: 'Get in touch with us',
      twitter_image: '/assets/img/hero-bg.jpg'
    },
    {
      route: '/services',
      page_name: 'Services Page',
      title: 'Our Services | Digital Marketing Solutions by AT Tech Global',
      meta_title: 'Services | Digital Marketing Agency',
      meta_description: 'Explore our comprehensive digital marketing services including SEO, web development, social media marketing.',
      keywords: 'digital marketing services, SEO, web development',
      og_title: 'Our Services',
      og_description: 'Comprehensive digital marketing solutions',
      og_image: '/assets/img/hero-bg.jpg',
      canonical_url: 'https://attechglobal.com/services',
      robots_index: true,
      robots_follow: true,
      twitter_title: 'Our Services',
      twitter_description: 'Digital Marketing Solutions',
      twitter_image: '/assets/img/hero-bg.jpg'
    },
    {
      route: '/blog',
      page_name: 'Blog Page',
      title: 'Blog | Digital Marketing Insights by AT Tech Global',
      meta_title: 'Blog | Digital Marketing Tips & Insights',
      meta_description: 'Read latest articles on digital marketing, SEO, web development, and online business strategies.',
      keywords: 'digital marketing blog, SEO tips, marketing strategies',
      og_title: 'Blog | Digital Marketing Insights',
      og_description: 'Stay updated with latest digital marketing trends',
      og_image: '/assets/img/hero-bg.jpg',
      canonical_url: 'https://attechglobal.com/blog',
      robots_index: true,
      robots_follow: true,
      twitter_title: 'Blog',
      twitter_description: 'Digital Marketing Insights',
      twitter_image: '/assets/img/hero-bg.jpg'
    }
  ]

  const now = new Date().toISOString()
  for (const item of defaultMetadata) {
    const metadata: PageMetadataRecord = {
      ...item,
      id: Math.floor(Math.random() * 10000),
      created_at: now,
      updated_at: now
    }
    await writeMetadataFile(metadata)
  }

  console.log('Seeded default metadata files')
}
