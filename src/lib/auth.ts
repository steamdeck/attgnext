import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Admin credentials (in production, store these in environment variables)
const ADMIN_CREDENTIALS = {
  email: 'admin@digitom.com',
  password: 'admin123', // In production, use a strong password
  role: 'super_admin'
}

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production'

export interface AdminUser {
  id: string
  email: string
  role: string
}

export interface LoginCredentials {
  email: string
  password: string
}

// Hash password (for initial setup)
export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 10)
}

// Verify password
export function verifyPassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash)
}

// Generate JWT token
export function generateToken(user: AdminUser): string {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email, 
      role: user.role 
    },
    JWT_SECRET,
    { expiresIn: '24h' }
  )
}

// Verify JWT token
export function verifyToken(token: string): AdminUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any
    return {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role
    }
  } catch (error) {
    return null
  }
}

// Authenticate admin user
export function authenticateAdmin(credentials: LoginCredentials): { user: AdminUser; token: string } | null {
  const { email, password } = credentials
  
  // Check credentials
  if (email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password) {
    const user: AdminUser = {
      id: '1',
      email: ADMIN_CREDENTIALS.email,
      role: ADMIN_CREDENTIALS.role
    }
    
    const token = generateToken(user)
    
    return { user, token }
  }
  
  return null
}

// Check if user is admin
export function isAdmin(user: AdminUser | null): boolean {
  return user?.role === 'super_admin' || user?.role === 'admin'
}
