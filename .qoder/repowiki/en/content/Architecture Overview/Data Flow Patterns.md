# Data Flow Patterns

<cite>
**Referenced Files in This Document**
- [RootLayout](file://src/app/layout.tsx)
- [Middleware](file://middleware.ts)
- [Next Config](file://next.config.mjs)
- [Database Library](file://src/lib/database.ts)
- [Auth Library](file://src/lib/auth.ts)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts)
- [Page Editor](file://src/lib/page-editor.ts)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts)
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts)
- [Admin Layout](file://src/app/admin/layout.tsx)
- [SQLite DB File](file://data/images.db)
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
10. [Appendices](#appendices)

## Introduction
This document describes the data flow architecture for attechglobal.com, focusing on how client requests traverse the Next.js App Router, middleware, API routes, database operations, and component rendering. It documents two primary data flow patterns:
- Public content retrieval: client requests → App Router → API routes → database → component hydration
- Admin content management: client requests → admin layout → admin pages → page editors → file-based content updates → optional database synchronization

It also explains integration points for file-based content management, SQLite-backed metadata storage, real-time-like updates via client hooks, and SEO metadata generation. Validation, error handling, and caching strategies are covered, along with image processing and blog content management flows.

## Project Structure
The site is a Next.js application configured for static export in certain environments. Key areas:
- App Router pages under src/app
- Admin area under src/app/admin
- Libraries under src/lib for database, auth, SEO, and page editing
- Client hooks under src/hooks for metadata operations
- Middleware for admin route gating
- Next.js configuration for static export and image optimization
- SQLite database file under data/images.db

```mermaid
graph TB
subgraph "Client"
Browser["Browser"]
end
subgraph "Next.js App"
Router["App Router"]
MW["Middleware"]
Admin["Admin Layout"]
Pages["Public Pages<br/>SEO Hooks"]
end
subgraph "Libraries"
DB["Database Library"]
Auth["Auth Library"]
SEO["File SEO Utils"]
PE["Enhanced Page Editor"]
end
subgraph "Data"
SQLite["SQLite DB<br/>images.db"]
end
Browser --> Router
Router --> MW
MW --> Admin
Router --> Pages
Pages --> |fetch| API["API Routes"]
API --> DB
DB --> SQLite
Pages --> |usePageMetadata| API
Admin --> PE
PE --> |update files| FS["File System"]
SEO --> |generate metadata| Pages
```

**Diagram sources**
- [RootLayout](file://src/app/layout.tsx#L14-L46)
- [Middleware](file://middleware.ts#L4-L14)
- [Admin Layout](file://src/app/admin/layout.tsx#L6-L22)
- [Database Library](file://src/lib/database.ts#L84-L254)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L26-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [SQLite DB File](file://data/images.db)

**Section sources**
- [RootLayout](file://src/app/layout.tsx#L14-L46)
- [Middleware](file://middleware.ts#L4-L14)
- [Admin Layout](file://src/app/admin/layout.tsx#L6-L22)
- [Next Config](file://next.config.mjs#L1-L129)
- [Database Library](file://src/lib/database.ts#L84-L254)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L26-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)

## Core Components
- App Router and Root Layout: Provide global styles, fonts, and client wrapper for hydration.
- Middleware: Currently a pass-through for admin routes; designed for future server-side enforcement.
- Database Library: Initializes SQLite, defines tables, and exposes CRUD helpers.
- Auth Library: Provides admin authentication and token utilities.
- Page Editors: Parse and update page components in the file system for content management.
- File SEO Utils: Map routes to files, parse and update metadata in component files, and convert to Next.js metadata format.
- Client Hooks: Fetch, paginate, and mutate page metadata via API routes.
- Next Config: Controls static export mode, image optimization, and domain allowlists.

**Section sources**
- [RootLayout](file://src/app/layout.tsx#L14-L46)
- [Middleware](file://middleware.ts#L4-L14)
- [Database Library](file://src/lib/database.ts#L84-L254)
- [Auth Library](file://src/lib/auth.ts#L62-L84)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L26-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [Next Config](file://next.config.mjs#L1-L129)

## Architecture Overview
The system supports dual data flows:
- Public content retrieval: client requests are served statically or via API routes depending on deployment mode. Metadata is fetched via client hooks to API endpoints backed by SQLite.
- Admin content management: admin pages render within an admin layout, leverage page editors to modify component files, and optionally synchronize with database-backed metadata.

```mermaid
sequenceDiagram
participant U as "User"
participant R as "App Router"
participant M as "Middleware"
participant H as "usePageMetadata Hook"
participant API as "API Route"
participant D as "Database Library"
participant DB as "SQLite"
U->>R : "Navigate to page"
R->>M : "Apply middleware"
M-->>R : "Continue"
R->>H : "usePageMetadata(route)"
H->>API : "GET /api/seo/metadata/ : route"
API->>D : "getQuery(...)"
D->>DB : "SELECT ..."
DB-->>D : "Row"
D-->>API : "Result"
API-->>H : "JSON {success, data}"
H-->>R : "Render with metadata"
```

**Diagram sources**
- [RootLayout](file://src/app/layout.tsx#L14-L46)
- [Middleware](file://middleware.ts#L4-L14)
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [Database Library](file://src/lib/database.ts#L229-L240)

## Detailed Component Analysis

### Public Content Retrieval Flow
- Request enters App Router and renders the requested page.
- The page uses the usePageMetadata hook to fetch metadata for the current route.
- The hook calls the API route to retrieve metadata from the database.
- The database library executes a SELECT query against SQLite and returns the result.
- The page renders with enriched metadata for SEO and social previews.

```mermaid
sequenceDiagram
participant C as "Client Component"
participant H as "usePageMetadata Hook"
participant A as "API Route"
participant L as "Database Library"
participant S as "SQLite"
C->>H : "usePageMetadata(currentRoute)"
H->>A : "fetch(GET /api/seo/metadata/ : route)"
A->>L : "getQuery(SELECT ... WHERE route=?)"
L->>S : "Execute SQL"
S-->>L : "Row"
L-->>A : "Result"
A-->>H : "JSON {success, data}"
H-->>C : "Set state and re-render"
```

**Diagram sources**
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [Database Library](file://src/lib/database.ts#L229-L240)

**Section sources**
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [Database Library](file://src/lib/database.ts#L229-L240)

### Admin Content Management Flow
- Admin layout wraps admin pages and provides navigation.
- Page editors parse component files to discover editable regions and update them.
- Updates are written back to the file system; optional database synchronization can occur via API routes.

```mermaid
sequenceDiagram
participant Admin as "Admin UI"
participant Layout as "Admin Layout"
participant PE as "Enhanced Page Editor"
participant FS as "File System"
Admin->>Layout : "Render admin pages"
Layout->>PE : "getAvailablePages()"
PE->>FS : "Read component files"
FS-->>PE : "Components"
Admin->>PE : "updatePageComponent(filePath, id, old, new)"
PE->>FS : "Write updated content"
FS-->>PE : "Success/Failure"
PE-->>Admin : "Result"
```

**Diagram sources**
- [Admin Layout](file://src/app/admin/layout.tsx#L6-L22)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L50-L76)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L239-L272)

**Section sources**
- [Admin Layout](file://src/app/admin/layout.tsx#L6-L22)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L50-L76)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L239-L272)

### SEO Metadata Generation and Updates
- File SEO Utils maps routes to component files, parses metadata, and updates component files with new metadata.
- It converts database-backed metadata into Next.js metadata format for rendering.

```mermaid
flowchart TD
Start(["Start"]) --> Map["Map route to component file"]
Map --> Parse["Parse existing metadata from file"]
Parse --> Build["Convert to Next.js metadata format"]
Build --> Update["Update component file with new metadata"]
Update --> Done(["Done"])
```

**Diagram sources**
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L120-L178)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L183-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)

**Section sources**
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L120-L178)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L183-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)

### Authentication and Authorization
- Admin authentication uses JWT tokens. Credentials are validated and a token is issued for subsequent admin requests.
- The auth library provides hashing, verification, token generation, and verification.

```mermaid
flowchart TD
Enter(["Enter credentials"]) --> Validate["Validate credentials"]
Validate --> |Valid| Issue["Issue JWT token"]
Validate --> |Invalid| Deny["Deny access"]
Issue --> Store["Store token (client)"]
Store --> Access["Access admin routes"]
```

**Diagram sources**
- [Auth Library](file://src/lib/auth.ts#L62-L79)
- [Auth Library](file://src/lib/auth.ts#L34-L59)

**Section sources**
- [Auth Library](file://src/lib/auth.ts#L62-L79)
- [Auth Library](file://src/lib/auth.ts#L34-L59)

### Database Schema and Operations
- The database initializes images, image_usage, blogs, and page_metadata tables.
- Helpers encapsulate run, get, and all queries for consistent operation.

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
IMAGES ||--o{ IMAGE_USAGE : "references"
```

**Diagram sources**
- [Database Library](file://src/lib/database.ts#L106-L181)

**Section sources**
- [Database Library](file://src/lib/database.ts#L106-L181)
- [Database Library](file://src/lib/database.ts#L215-L254)

### Image Processing and Optimization
- Next.js image optimization is configured for static export with unoptimized images and allowlisted domains.
- Image formats include WebP and AVIF; device sizes and image sizes are tuned for performance.

```mermaid
flowchart TD
Req(["Image request"]) --> Check["Check domain allowlist"]
Check --> |Allowed| Optimize["Optimize & resize"]
Check --> |Blocked| Proxy["Serve via proxy or CDN"]
Optimize --> Deliver["Deliver optimized image"]
Proxy --> Deliver
```

**Diagram sources**
- [Next Config](file://next.config.mjs#L10-L112)

**Section sources**
- [Next Config](file://next.config.mjs#L10-L112)

### Blog Content Management
- Blogs are stored in the blogs table with fields for title, content, slug, category, author, dates, and status.
- Page editors and SEO utilities support content discovery and metadata updates for blog pages.

```mermaid
sequenceDiagram
participant Admin as "Admin"
participant PE as "Enhanced Page Editor"
participant FS as "File System"
participant SEO as "File SEO Utils"
participant DB as "Database Library"
Admin->>PE : "Edit blog content"
PE->>FS : "Write updated component"
Admin->>SEO : "Update blog metadata"
SEO->>DB : "Persist metadata"
DB-->>Admin : "Success"
```

**Diagram sources**
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L239-L272)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L183-L284)
- [Database Library](file://src/lib/database.ts#L215-L254)

**Section sources**
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L239-L272)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L183-L284)
- [Database Library](file://src/lib/database.ts#L215-L254)

## Dependency Analysis
- Client hooks depend on API routes for metadata operations.
- API routes depend on the database library for persistence.
- Page editors depend on the file system for content updates.
- SEO utilities depend on file parsing and database persistence.
- Middleware depends on admin routes and can gate access.

```mermaid
graph LR
Hook["usePageMetadata Hook"] --> API["API Routes"]
API --> Lib["Database Library"]
Lib --> DB["SQLite"]
AdminUI["Admin UI"] --> PE["Enhanced Page Editor"]
PE --> FS["File System"]
SEO["File SEO Utils"] --> Lib
SEO --> FS
MW["Middleware"] --> Admin["Admin Layout"]
```

**Diagram sources**
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [Database Library](file://src/lib/database.ts#L215-L254)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L26-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)
- [Middleware](file://middleware.ts#L4-L14)
- [Admin Layout](file://src/app/admin/layout.tsx#L6-L22)

**Section sources**
- [Use Page Metadata Hook](file://src/hooks/usePageMetadata.ts#L18-L52)
- [Database Library](file://src/lib/database.ts#L215-L254)
- [Enhanced Page Editor](file://src/lib/enhanced-page-editor.ts#L26-L284)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L47-L115)
- [Middleware](file://middleware.ts#L4-L14)
- [Admin Layout](file://src/app/admin/layout.tsx#L6-L22)

## Performance Considerations
- Static export mode reduces server load but limits server-side features; API routes are still supported for dynamic needs.
- Image optimization is configured for performance with allowlisted domains and multiple formats.
- Database operations use prepared statements and helper functions to minimize overhead.
- Client-side caching via React state avoids redundant network calls during a session.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common issues and resolutions:
- Database initialization errors: ensure the data directory exists and the images.db file is writable.
- Middleware not enforcing: confirm the matcher targets admin routes and that server-side processing is available.
- API route failures: verify database connectivity and query parameters.
- SEO metadata not updating: check file permissions and regex patterns used for metadata replacement.
- Image optimization blocked: verify domains are included in the allowlist and images are served via HTTPS.

**Section sources**
- [Database Library](file://src/lib/database.ts#L84-L96)
- [Middleware](file://middleware.ts#L10-L14)
- [File SEO Utils](file://src/lib/fileSeoUtils.ts#L183-L284)
- [Next Config](file://next.config.mjs#L10-L112)

## Conclusion
The attechglobal.com data architecture combines static export readiness with server-side capabilities for admin and API-driven features. Two complementary data flows serve public content and enable admin content management. Robust libraries for database operations, authentication, SEO metadata, and page editing provide a cohesive foundation for content delivery and maintenance.

[No sources needed since this section summarizes without analyzing specific files]

## Appendices
- Deployment modes: static export vs. serverless API routes are controlled by environment variables in Next config.
- Environment variables: JWT secret and export flags influence runtime behavior.

**Section sources**
- [Next Config](file://next.config.mjs#L1-L129)
- [Auth Library](file://src/lib/auth.ts#L11-L11)