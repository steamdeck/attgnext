# Admin Dashboard Setup

Your Next.js application now includes a complete admin dashboard with authentication and management features.

## 🚀 **What's Included**

### **Authentication System**
- Secure login with JWT tokens
- Protected admin routes
- Session management with localStorage
- Middleware protection

### **Admin Dashboard Features**
- **Dashboard Overview**: Statistics and recent activities
- **User Management**: View and manage users
- **Service Management**: Manage your service offerings
- **Settings**: Configure site settings, social media, SEO, and security

## 🔐 **Default Admin Credentials**

```
Email: admin@attechglobal.com
Password: admin123
```

**⚠️ Important**: Change these credentials in production!

## 📁 **File Structure**

```
src/
├── app/
│   ├── admin/
│   │   ├── layout.tsx          # Admin layout with authentication
│   │   ├── login/
│   │   │   └── page.tsx        # Admin login page
│   │   ├── dashboard/
│   │   │   └── page.tsx        # Main dashboard
│   │   ├── users/
│   │   │   └── page.tsx        # User management
│   │   ├── services/
│   │   │   └── page.tsx        # Service management
│   │   └── settings/
│   │       └── page.tsx        # Site settings
│   └── Components/
│       └── Admin/
│           ├── AdminHeader.tsx  # Dashboard header
│           └── AdminSidebar.tsx # Navigation sidebar
├── lib/
│   └── auth.ts                 # Authentication utilities
└── middleware.ts               # Route protection
```

## 🛠 **How to Access**

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Navigate to admin login**:
   ```
   http://localhost:3002/admin/login
   ```

3. **Login with default credentials**:
   - Email: `admin@attechglobal.com`
   - Password: `admin123`

4. **Access the dashboard**:
   ```
   http://localhost:3002/admin/dashboard
   ```

## 🔧 **Features Overview**

### **Dashboard**
- **Statistics Cards**: Total users, services, projects, blog posts
- **Recent Activities**: Latest user actions and updates
- **Quick Actions**: Fast access to common tasks

### **User Management**
- View all users in a table format
- Search and filter functionality
- User status management (active/inactive)
- Edit and delete user actions

### **Service Management**
- Grid view of all services
- Category filtering
- Service status management
- Pricing and description management

### **Settings**
- **General**: Site name, description, contact info
- **Social Media**: Links to social platforms
- **SEO**: Meta titles, descriptions, keywords
- **Security**: Password change functionality

## 🔒 **Security Features**

### **Authentication**
- JWT token-based authentication
- Token expiration (24 hours)
- Secure password hashing with bcrypt
- Protected routes with middleware

### **Route Protection**
- All admin routes are protected
- Automatic redirect to login if not authenticated
- Client-side and server-side validation

### **Session Management**
- Tokens stored in localStorage
- Automatic logout on token expiration
- Secure token verification

## 🎨 **UI/UX Features**

### **Responsive Design**
- Mobile-friendly interface
- Responsive grid layouts
- Touch-friendly navigation

### **Modern UI**
- Clean, professional design
- Consistent color scheme
- Intuitive navigation
- Loading states and animations

### **User Experience**
- Search and filter functionality
- Quick action buttons
- Status indicators
- Form validation

## 🚀 **Production Deployment**

### **Environment Variables**
Set these in your production environment:

```bash
# JWT Secret (use a strong, random string)
JWT_SECRET=your-super-secret-jwt-key

# Base URL for your production site
NEXT_PUBLIC_BASE_URL=https://yourdomain.com
```

### **Security Recommendations**
1. **Change default credentials** immediately
2. **Use strong JWT secret** (32+ characters)
3. **Enable HTTPS** in production
4. **Implement rate limiting** for login attempts
5. **Add two-factor authentication** for enhanced security

### **Database Integration**
To connect with a real database:

1. **Update `src/lib/auth.ts`**:
   ```typescript
   // Replace hardcoded credentials with database queries
   export async function authenticateAdmin(credentials: LoginCredentials) {
     // Query your database here
     const user = await db.adminUsers.findUnique({
       where: { email: credentials.email }
     })
     
     if (user && verifyPassword(credentials.password, user.passwordHash)) {
       // Generate token and return user
     }
   }
   ```

2. **Add database models** for users, services, etc.

## 🔄 **Customization**

### **Adding New Admin Pages**
1. Create new page in `src/app/admin/`
2. Add navigation item in `AdminSidebar.tsx`
3. Implement your page functionality

### **Modifying Authentication**
- Update `src/lib/auth.ts` for different auth methods
- Modify `middleware.ts` for different protection rules
- Customize token expiration and validation

### **Styling Changes**
- Modify Tailwind classes in components
- Update color scheme in `AdminHeader.tsx` and `AdminSidebar.tsx`
- Add custom CSS for specific components

## 📊 **Analytics Integration**

To add analytics to your admin dashboard:

1. **Install analytics package**:
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to dashboard components**:
   ```typescript
   import { Analytics } from '@vercel/analytics/react'
   
   // Add <Analytics /> to your layout
   ```

## 🐛 **Troubleshooting**

### **Common Issues**

1. **"Cannot find module" errors**:
   - Check import paths in components
   - Ensure all files are in correct directories

2. **Authentication not working**:
   - Verify JWT secret is set
   - Check localStorage for tokens
   - Clear browser cache and try again

3. **Middleware errors**:
   - Ensure `middleware.ts` is in project root
   - Check Next.js version compatibility

### **Development Tips**
- Use browser dev tools to inspect localStorage
- Check network tab for API calls
- Use React DevTools for component debugging

## 🎯 **Next Steps**

1. **Customize the dashboard** for your specific needs
2. **Add real data integration** with your backend
3. **Implement additional features** like:
   - Content management system
   - Analytics dashboard
   - Email notifications
   - File upload functionality
   - Advanced user roles and permissions

Your admin dashboard is now ready to use! 🎉
