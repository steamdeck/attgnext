# Core Features

<cite>
**Referenced Files in This Document**
- [README.md](file://README.md)
- [package.json](file://package.json)
- [src/lib/database.ts](file://src/lib/database.ts)
- [src/lib/enhanced-page-editor.ts](file://src/lib/enhanced-page-editor.ts)
- [src/lib/auth.ts](file://src/lib/auth.ts)
- [src/lib/image-tracker.ts](file://src/lib/image-tracker.ts)
- [src/lib/fileSeoUtils.ts](file://src/lib/fileSeoUtils.ts)
- [src/app/api/blogs/route.ts](file://src/app/api/blogs/route.ts)
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts)
- [src/app/api/pages/route.ts](file://src/app/api/pages/route.ts)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)

## Introduction
This document explains the core features of attechglobal.com, focusing on the responsive marketing website built with Next.js App Router, the admin dashboard with real-time content editing, the comprehensive blog management system, the optimized image gallery, and the SEO management tools. It documents the component-based architecture, the enhanced page editor for non-technical users, and the SQLite-based content storage system. Both conceptual overviews for stakeholders and technical implementation details for developers are included, with practical examples and diagrams illustrating feature relationships and user workflows.

## Project Structure
The project follows a Next.js App Router structure with:
- Application routes under src/app organized by feature and page groups
- Shared UI components under src/app/Components organized by domain (e.g., Header, Footer, Services)
- API routes under src/app/api for backend operations (blogs, images, pages)
- Libraries under src/lib encapsulating database, authentication, SEO, and utilities
- Static assets under public and src/app/assets

Key highlights:
- Next.js 15 with TypeScript
- SQLite via sqlite3 for content persistence
- Sharp for image metadata extraction
- Bootstrap and React Bootstrap for UI primitives
- Multer for multipart form handling

```mermaid
graph TB
subgraph "Next.js App Router"
Pages["Pages<br/>src/app/*"]
Components["Components<br/>src/app/Components/*"]
API["API Routes<br/>src/app/api/*"]
end
subgraph "Libraries"
DB["Database<br/>src/lib/database.ts"]
Auth["Auth<br/>src/lib/auth.ts"]
Editor["Enhanced Page Editor<br/>src/lib/enhanced-page-editor.ts"]
SEO["SEO Utils<br/>src/lib/fileSeoUtils.ts"]
ImgTracker["Image Tracker<br/>src/lib/image-tracker.ts"]
end
subgraph "Storage"
SQLite["SQLite DB<br/>data/images.db"]
FS["Public Assets<br/>public/uploads"]
end
Pages --> Components
API --> DB
API --> Auth
API --> ImgTracker
Components --> SEO
Editor --> Pages
DB --> SQLite
API --> FS
```

**Diagram sources**
- [src/app/api/blogs/route.ts](file://src/app/api/blogs/route.ts#L1-L107)
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts#L1-L182)
- [src/app/api/pages/route.ts](file://src/app/api/pages/route.ts#L1-L110)
- [src/lib/database.ts](file://src/lib/database.ts#L1-L255)
- [src/lib/enhanced-page-editor.ts](file://src/lib/enhanced-page-editor.ts#L1-L287)
- [src/lib/fileSeoUtils.ts](file://src/lib/fileSeoUtils.ts#L1-L315)
- [src/lib/image-tracker.ts](file://src/lib/image-tracker.ts#L1-L95)

**Section sources**
- [README.md](file://README.md#L1-L37)
- [package.json](file://package.json#L1-L41)

## Core Components
- SQLite-backed content store: Stores images, blogs, and page metadata with helper functions for initialization, migrations, and queries.
- Enhanced Page Editor: Scans page files to extract editable components and supports non-technical updates via the admin UI.
- Admin Authentication: JWT-based login for admin users with role checks.
- Image Gallery: Uploads, metadata extraction, and usage tracking with SEO scoring.
- Blog Management: CRUD APIs for posts with pagination and filtering.
- SEO Management: Utilities to parse and update Next.js metadata blocks in component files and maintain canonical URLs and social previews.

**Section sources**
- [src/lib/database.ts](file://src/lib/database.ts#L1-L255)
- [src/lib/enhanced-page-editor.ts](file://src/lib/enhanced-page-editor.ts#L1-L287)
- [src/lib/auth.ts](file://src/lib/auth.ts#L1-L85)
- [src/lib/image-tracker.ts](file://src/lib/image-tracker.ts#L1-L95)
- [src/lib/fileSeoUtils.ts](file://src/lib/fileSeoUtils.ts#L1-L315)
- [src/app/api/blogs/route.ts](file://src/app/api/blogs/route.ts#L1-L107)
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts#L1-L182)
- [src/app/api/pages/route.ts](file://src/app/api/pages/route.ts#L1-L110)

## Architecture Overview
The system integrates a frontend built with Next.js App Router and a small set of server-side API routes. Data is persisted in a local SQLite database, while media assets are stored in the public directory. Admin workflows rely on JWT tokens and the enhanced page editor to enable non-technical content updates.

```mermaid
sequenceDiagram
participant User as "Admin User"
participant UI as "Admin Dashboard"
participant API as "API Routes"
participant DB as "SQLite DB"
participant FS as "Public Uploads"
User->>UI : Log in with credentials
UI->>API : POST /api/auth/login
API->>API : Validate credentials
API-->>UI : {token}
UI->>API : GET /api/images?page=1&limit=20
API->>DB : Query images with pagination
DB-->>API : {images, pagination}
API-->>UI : {images, pagination}
User->>UI : Upload image (multipart/form-data)
UI->>API : POST /api/images
API->>FS : Save file
API->>DB : Insert image record
DB-->>API : {id}
API-->>UI : {message, image}
```

**Diagram sources**
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts#L1-L182)
- [src/lib/database.ts](file://src/lib/database.ts#L1-L255)
- [src/lib/auth.ts](file://src/lib/auth.ts#L1-L85)

## Detailed Component Analysis

### SQLite Content Storage System
The storage layer defines three primary tables:
- images: stores file metadata, dimensions, SEO score, and usage counters
- image_usage: tracks where images are used across pages
- blogs: stores blog posts with slugs, categories, authors, and statuses
- page_metadata: stores Next.js metadata per route for SEO

Key capabilities:
- Initialization and table creation on first use
- CRUD helpers for run, get, and all queries
- Safe promise-based wrappers around sqlite3

```mermaid
erDiagram
IMAGES {
int id PK
varchar filename
varchar original_name
varchar title
text alt_text
text caption
text description
varchar file_path
int file_size
int width
int height
varchar format
text tags
datetime upload_date
datetime last_modified
int seo_score
int usage_count
}
IMAGE_USAGE {
int id PK
int image_id FK
varchar page_path
varchar page_title
text usage_context
datetime created_at
}
BLOGS {
int id PK
varchar title
text content
text excerpt
varchar image
varchar slug UK
varchar category
varchar author
datetime published_date
datetime created_at
datetime updated_at
varchar status
}
PAGE_METADATA {
int id PK
varchar route UK
varchar page_name
varchar title
varchar meta_title
text meta_description
text keywords
varchar og_title
text og_description
varchar og_image
varchar canonical_url
boolean robots_index
boolean robots_follow
varchar twitter_title
text twitter_description
varchar twitter_image
datetime created_at
datetime updated_at
}
IMAGES ||--o{ IMAGE_USAGE : "referenced by"
```

**Diagram sources**
- [src/lib/database.ts](file://src/lib/database.ts#L18-L81)

**Section sources**
- [src/lib/database.ts](file://src/lib/database.ts#L1-L255)

### Enhanced Page Editor (Non-Technical Content Editing)
The enhanced page editor scans page files to identify editable components (text, images, links, titles) and supports targeted updates. It maintains a registry of editable pages and parses JSX-like content to extract components with positions and contexts.

```mermaid
flowchart TD
Start(["Admin selects a page"]) --> LoadConfig["Load page configs"]
LoadConfig --> ReadFile["Read page file content"]
ReadFile --> ParseText["Parse text components"]
ReadFile --> ParseImage["Parse image sources"]
ReadFile --> ParseLink["Parse links"]
ReadFile --> ParseTitle["Parse titles/subtitles"]
ParseText --> BuildList["Build component list"]
ParseImage --> BuildList
ParseLink --> BuildList
ParseTitle --> BuildList
BuildList --> SelectComp["Admin selects component to edit"]
SelectComp --> UpdateFile["Write updated content to file"]
UpdateFile --> Done(["Component updated"])
```

**Diagram sources**
- [src/lib/enhanced-page-editor.ts](file://src/lib/enhanced-page-editor.ts#L1-L287)

**Section sources**
- [src/lib/enhanced-page-editor.ts](file://src/lib/enhanced-page-editor.ts#L1-L287)

### Admin Authentication and Authorization
Authentication uses JWT with bcrypt for password hashing. The system supports role-based access (super_admin/admin) and exposes a login endpoint.

```mermaid
sequenceDiagram
participant Admin as "Admin User"
participant AuthAPI as "POST /api/auth/login"
participant JWT as "JWT Token"
participant Route as "Protected Route"
Admin->>AuthAPI : {email, password}
AuthAPI->>AuthAPI : Verify credentials
AuthAPI->>JWT : Sign token {id, email, role}
JWT-->>AuthAPI : token
AuthAPI-->>Admin : {token}
Admin->>Route : Request with Authorization : Bearer token
Route->>JWT : Verify token
JWT-->>Route : Decoded user
Route-->>Admin : Protected resource
```

**Diagram sources**
- [src/lib/auth.ts](file://src/lib/auth.ts#L1-L85)
- [src/app/api/pages/route.ts](file://src/app/api/pages/route.ts#L80-L109)

**Section sources**
- [src/lib/auth.ts](file://src/lib/auth.ts#L1-L85)

### Image Gallery and Optimization
The image gallery supports:
- Upload via multipart/form-data with type and size validation
- Metadata extraction using Sharp for non-SVG images
- SEO scoring based on provided fields
- Pagination and filtering
- Usage tracking across pages

```mermaid
sequenceDiagram
participant Admin as "Admin"
participant ImagesAPI as "POST /api/images"
participant FS as "public/uploads"
participant DB as "SQLite DB"
Admin->>ImagesAPI : FormData(file, title, alt_text, tags)
ImagesAPI->>ImagesAPI : Validate type & size
ImagesAPI->>FS : Write file
ImagesAPI->>ImagesAPI : Extract metadata (Sharp)
ImagesAPI->>DB : Insert image record
DB-->>ImagesAPI : {id}
ImagesAPI-->>Admin : {message, image}
```

**Diagram sources**
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts#L77-L182)
- [src/lib/database.ts](file://src/lib/database.ts#L100-L184)

**Section sources**
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts#L1-L182)
- [src/lib/image-tracker.ts](file://src/lib/image-tracker.ts#L1-L95)

### Blog Management System
The blog API provides:
- Listing with pagination and category filtering
- Creation with validation and conflict detection
- Status management (default published)

```mermaid
sequenceDiagram
participant Admin as "Admin"
participant BlogsAPI as "GET/POST /api/blogs"
participant DB as "SQLite DB"
Admin->>BlogsAPI : GET ?limit&offset&category
BlogsAPI->>DB : SELECT blogs with filters
DB-->>BlogsAPI : {blogs, pagination}
BlogsAPI-->>Admin : {blogs, pagination}
Admin->>BlogsAPI : POST {title, slug, content,...}
BlogsAPI->>DB : INSERT blog
DB-->>BlogsAPI : {id}
BlogsAPI-->>Admin : {success, id}
```

**Diagram sources**
- [src/app/api/blogs/route.ts](file://src/app/api/blogs/route.ts#L14-L107)
- [src/lib/database.ts](file://src/lib/database.ts#L141-L157)

**Section sources**
- [src/app/api/blogs/route.ts](file://src/app/api/blogs/route.ts#L1-L107)

### SEO Management Tools
SEO utilities:
- Map routes to component files and vice versa
- Parse and update Next.js metadata blocks (title, description, keywords, openGraph, twitter, robots)
- Generate Next.js metadata objects for rendering

```mermaid
flowchart TD
Start(["Admin edits SEO"]) --> MapRoute["Map route to component file"]
MapRoute --> ParseMeta["Parse existing metadata"]
ParseMeta --> UpdateMeta["Update metadata fields"]
UpdateMeta --> WriteBack["Write updated metadata to file"]
WriteBack --> Done(["SEO updated"])
```

**Diagram sources**
- [src/lib/fileSeoUtils.ts](file://src/lib/fileSeoUtils.ts#L1-L315)

**Section sources**
- [src/lib/fileSeoUtils.ts](file://src/lib/fileSeoUtils.ts#L1-L315)

## Dependency Analysis
External dependencies relevant to core features:
- sqlite3: SQLite driver for Node.js
- sharp: Image metadata extraction
- multer: Multipart form handling for uploads
- bcryptjs, jsonwebtoken: Authentication
- bootstrap, react-bootstrap: UI components

```mermaid
graph LR
Next["Next.js App Router"] --> API["API Routes"]
API --> DB["sqlite3"]
API --> Sharp["sharp"]
API --> Multer["multer"]
API --> JWT["jsonwebtoken"]
API --> BCrypt["bcryptjs"]
UI["React UI"] --> Bootstrap["bootstrap"]
UI --> RBS["react-bootstrap"]
```

**Diagram sources**
- [package.json](file://package.json#L12-L30)

**Section sources**
- [package.json](file://package.json#L1-L41)

## Performance Considerations
- Image processing: Offload heavy transformations to Sharp; consider CDN caching for uploaded assets.
- Database queries: Use indexed columns (e.g., slug) and limit/sort parameters to reduce overhead.
- Pagination: Always apply limit/offset for lists (blogs, images).
- Static generation: Prefer static generation for content-heavy pages; use ISR/SSG where feasible.
- Asset optimization: Serve modern formats (AVIF/WebP) and lazy-load images.

## Troubleshooting Guide
Common issues and resolutions:
- Database not initialized: Ensure initDatabase is called before queries; check data directory permissions.
- Upload errors: Validate file types and sizes; confirm public/uploads exists and is writable.
- JWT verification failures: Confirm secret matches environment; check token expiration.
- Page editor not detecting components: Verify page file paths and JSX patterns; ensure server-side execution for file reads.

**Section sources**
- [src/lib/database.ts](file://src/lib/database.ts#L84-L97)
- [src/app/api/images/route.ts](file://src/app/api/images/route.ts#L94-L103)
- [src/lib/auth.ts](file://src/lib/auth.ts#L48-L59)
- [src/lib/enhanced-page-editor.ts](file://src/lib/enhanced-page-editor.ts#L50-L76)

## Conclusion
The attechglobal.com platform combines a Next.js frontend with a compact but capable backend powered by SQLite. The enhanced page editor enables non-technical users to manage content, while the admin dashboard streamlines blog and image workflows. SEO utilities integrate tightly with Next.js metadata, and the image gallery provides optimization and usage tracking. Together, these features deliver a flexible, maintainable, and SEO-friendly marketing website.