# Media Management

<cite>
**Referenced Files in This Document**
- [IMAGE_MANAGEMENT_SETUP.md](file://IMAGE_MANAGEMENT_SETUP.md)
- [database.ts](file://src/lib/database.ts)
- [image-tracker.ts](file://src/lib/image-tracker.ts)
- [init-database.js](file://scripts/init-database.js)
- [route.ts](file://src/app/api/images/route.ts)
- [route.ts](file://src/app/api/images/[id]/replace/route.ts)
- [route.ts](file://src/app/api/images/scan/route.ts)
- [ImageEditModal.tsx](file://src/app/Components/Admin/ImageEditModal.tsx)
- [ImageDetailModal.tsx](file://src/app/Components/Admin/ImageDetailModal.tsx)
- [package-lock.json](file://package-lock.json)
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
This document describes the media management system with a focus on image handling and gallery administration. It covers the upload workflow, optimization processes, storage management, the gallery interface, bulk operations, usage tracking, modal-based editing, metadata management, and batch processing. It also documents the integration between media components and the image tracking system, including usage analytics, performance metrics, and storage optimization strategies.

## Project Structure
The media management system is built with a Next.js application, a SQLite backend, and a set of API endpoints. The frontend provides modal-based editing and gallery views, while the backend handles uploads, metadata updates, scanning, and usage tracking.

```mermaid
graph TB
subgraph "Frontend"
IMG_EDIT["ImageEditModal.tsx"]
IMG_DETAIL["ImageDetailModal.tsx"]
ADMIN_UI["Admin Gallery UI"]
end
subgraph "API Layer"
API_IMAGES["/api/images/*"]
API_SCAN["/api/images/scan"]
end
subgraph "Backend"
DB_LIB["database.ts"]
IMG_TRACK["image-tracker.ts"]
end
subgraph "Storage"
FS_PUBLIC["public/uploads/"]
DB_SQLITE["SQLite: images.db"]
end
IMG_EDIT --> API_IMAGES
IMG_DETAIL --> API_IMAGES
ADMIN_UI --> API_IMAGES
API_IMAGES --> DB_LIB
API_IMAGES --> FS_PUBLIC
API_SCAN --> DB_LIB
API_SCAN --> FS_PUBLIC
IMG_TRACK --> API_IMAGES
DB_LIB --> DB_SQLITE
```

**Diagram sources**
- [ImageEditModal.tsx](file://src/app/Components/Admin/ImageEditModal.tsx#L1-L300)
- [ImageDetailModal.tsx](file://src/app/Components/Admin/ImageDetailModal.tsx#L1-L270)
- [route.ts](file://src/app/api/images/route.ts#L113-L159)
- [route.ts](file://src/app/api/images/[id]/replace/route.ts#L38-L124)
- [route.ts](file://src/app/api/images/scan/route.ts#L39-L71)
- [database.ts](file://src/lib/database.ts#L1-L255)
- [image-tracker.ts](file://src/lib/image-tracker.ts#L1-L95)

**Section sources**
- [IMAGE_MANAGEMENT_SETUP.md](file://IMAGE_MANAGEMENT_SETUP.md#L1-L190)
- [database.ts](file://src/lib/database.ts#L1-L255)
- [image-tracker.ts](file://src/lib/image-tracker.ts#L1-L95)
- [init-database.js](file://scripts/init-database.js#L1-L120)

## Core Components
- Database abstraction and schema: Defines the images and image_usage tables, provides helpers for queries, and ensures the database is initialized.
- Image tracker: Tracks usage of images across pages and records usage events.
- API endpoints: Handle upload, replacement, scanning, listing, retrieval, updates, deletion, and usage queries.
- Frontend modals: Provide editing and detail views for images, including SEO scoring and quick actions.
- Initialization script: Creates the SQLite database and tables.

Key responsibilities:
- Upload and replace images with dimension extraction and metadata persistence.
- Scan existing images from the filesystem and populate the database.
- Track where images are used across pages.
- Expose a gallery interface with search, filter, and sorting.
- Provide bulk operations via batch processing features.

**Section sources**
- [database.ts](file://src/lib/database.ts#L18-L81)
- [image-tracker.ts](file://src/lib/image-tracker.ts#L11-L43)
- [route.ts](file://src/app/api/images/route.ts#L113-L159)
- [route.ts](file://src/app/api/images/[id]/replace/route.ts#L38-L124)
- [route.ts](file://src/app/api/images/scan/route.ts#L39-L71)
- [ImageEditModal.tsx](file://src/app/Components/Admin/ImageEditModal.tsx#L31-L79)
- [ImageDetailModal.tsx](file://src/app/Components/Admin/ImageDetailModal.tsx#L41-L63)
- [init-database.js](file://scripts/init-database.js#L94-L117)

## Architecture Overview
The system follows a layered architecture:
- Presentation: Modal components for editing and viewing image details.
- API: Route handlers for CRUD and batch operations.
- Domain: Image tracker and database utilities.
- Persistence: SQLite database and filesystem storage.

```mermaid
sequenceDiagram
participant Admin as "Admin UI"
participant Edit as "ImageEditModal.tsx"
participant API as "/api/images/ : id"
participant DB as "database.ts"
participant FS as "public/uploads"
Admin->>Edit : Open edit modal
Edit->>API : PUT /api/images/ : id (metadata)
API->>DB : Update image metadata
DB-->>API : OK
API-->>Edit : Updated image
Edit-->>Admin : Close modal and refresh gallery
```

**Diagram sources**
- [ImageEditModal.tsx](file://src/app/Components/Admin/ImageEditModal.tsx#L54-L79)
- [route.ts](file://src/app/api/images/[id]/route.ts#L1-L200)
- [database.ts](file://src/lib/database.ts#L214-L254)

## Detailed Component Analysis

### Database Abstraction and Schema
The database module defines typed interfaces for images and usage, initializes the SQLite connection, creates tables, and exposes helpers for running queries. The schema supports:
- Images table: filename, original_name, title, alt_text, caption, description, file_path, file_size, width, height, format, tags, upload_date, last_modified, seo_score, usage_count.
- Image usage table: page_path, page_title, usage_context, created_at, with foreign key to images.

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
IMAGES ||--o{ IMAGE_USAGE : "referenced by"
```

**Diagram sources**
- [database.ts](file://src/lib/database.ts#L105-L181)

**Section sources**
- [database.ts](file://src/lib/database.ts#L18-L81)
- [database.ts](file://src/lib/database.ts#L105-L181)
- [database.ts](file://src/lib/database.ts#L214-L254)

### Image Tracker and Usage Analytics
The image tracker integrates with the frontend to automatically discover images on a page and record usage against the backend. It:
- Scans DOM for images with the same origin.
- Resolves the image path and posts usage records to the backend.
- Provides a React hook and a component wrapper for automatic tracking.

```mermaid
sequenceDiagram
participant Page as "Page with images"
participant Hook as "useImageTracking"
participant Tracker as "ImageTracker"
participant API as "/api/images/ : id/usage"
participant DB as "database.ts"
Page->>Hook : useEffect()
Hook->>Tracker : scanPageForImages()
Tracker->>API : POST usage record
API->>DB : Insert image_usage
DB-->>API : OK
API-->>Tracker : Success
```

**Diagram sources**
- [image-tracker.ts](file://src/lib/image-tracker.ts#L46-L80)
- [image-tracker.ts](file://src/lib/image-tracker.ts#L11-L43)
- [database.ts](file://src/lib/database.ts#L128-L139)

**Section sources**
- [image-tracker.ts](file://src/lib/image-tracker.ts#L11-L43)
- [image-tracker.ts](file://src/lib/image-tracker.ts#L46-L80)
- [database.ts](file://src/lib/database.ts#L128-L139)

### Image Upload Workflow
The upload endpoint handles multipart file uploads, validates type and size, writes the file to the filesystem, extracts dimensions for non-SVG images, calculates an SEO score, and persists metadata to the database.

```mermaid
sequenceDiagram
participant Client as "Client"
participant API as "/api/images (POST)"
participant Sharp as "sharp"
participant FS as "public/uploads"
participant DB as "database.ts"
Client->>API : Upload file
API->>API : Validate type and size
API->>FS : Write file buffer
API->>Sharp : Extract metadata (non-SVG)
Sharp-->>API : width, height
API->>DB : INSERT images (filename, original_name, file_path, file_size, width, height, format, tags, seo_score)
DB-->>API : OK
API-->>Client : Created image
```

**Diagram sources**
- [route.ts](file://src/app/api/images/route.ts#L113-L159)
- [database.ts](file://src/lib/database.ts#L147-L152)

**Section sources**
- [route.ts](file://src/app/api/images/route.ts#L113-L159)
- [package-lock.json](file://package-lock.json#L6415-L6451)

### Image Replacement Workflow
The replace endpoint replaces an existing image file while preserving metadata. It validates the new file, deletes the old file, generates a new filename, writes the new file, extracts dimensions, and updates the database.

```mermaid
sequenceDiagram
participant Client as "Client"
participant API as "/api/images/ : id/replace (POST)"
participant FS as "public/uploads"
participant DB as "database.ts"
Client->>API : Upload replacement file
API->>API : Validate type and size
API->>FS : Delete old file
API->>FS : Write new file
API->>DB : UPDATE images (filename, original_name, file_path, file_size, width, height, format)
DB-->>API : OK
API-->>Client : Updated image
```

**Diagram sources**
- [route.ts](file://src/app/api/images/[id]/replace/route.ts#L38-L124)
- [database.ts](file://src/lib/database.ts#L94-L100)

**Section sources**
- [route.ts](file://src/app/api/images/[id]/replace/route.ts#L38-L124)
- [database.ts](file://src/lib/database.ts#L94-L100)

### Image Scanning Workflow
The scan endpoint recursively scans the public assets directory for supported image formats, checks for duplicates, extracts dimensions for non-SVG images, and inserts records into the database.

```mermaid
flowchart TD
Start(["Start Scan"]) --> Walk["Walk directory tree"]
Walk --> IsDir{"Is Directory?"}
IsDir --> |Yes| Recurse["Recurse into subdirectory"]
IsDir --> |No| ExtCheck{"Supported Extension?"}
ExtCheck --> |No| Walk
ExtCheck --> |Yes| Exists{"Already in DB?"}
Exists --> |Yes| Walk
Exists --> |No| Stat["Get file stats"]
Stat --> Dim{"SVG?"}
Dim --> |Yes| Insert["Insert with width=0,height=0"]
Dim --> |No| Sharp["Extract metadata via sharp"]
Sharp --> Insert
Insert --> Walk
Walk --> End(["End"])
```

**Diagram sources**
- [route.ts](file://src/app/api/images/scan/route.ts#L39-L71)
- [package-lock.json](file://package-lock.json#L6415-L6451)

**Section sources**
- [route.ts](file://src/app/api/images/scan/route.ts#L39-L71)

### Modal-Based Editing System
The editing modal allows administrators to:
- View image preview and basic info.
- Edit title, alt_text, caption, description, and tags.
- See live SEO score calculation.
- Generate alt text suggestions.
- Save changes and refresh the gallery.

```mermaid
classDiagram
class ImageEditModal {
+props : image, onClose, onUpdate
-formData : title, alt_text, caption, description, tags
-saving : boolean
-seoScore : number
+handleSubmit()
+handleChange()
+generateAltText()
+formatFileSize(bytes)
}
class Image {
+id
+filename
+original_name
+title
+alt_text
+caption
+description
+file_path
+file_size
+width
+height
+format
+tags
+upload_date
+last_modified
+seo_score
+usage_count
}
ImageEditModal --> Image : "edits"
```

**Diagram sources**
- [ImageEditModal.tsx](file://src/app/Components/Admin/ImageEditModal.tsx#L31-L300)

**Section sources**
- [ImageEditModal.tsx](file://src/app/Components/Admin/ImageEditModal.tsx#L31-L300)

### Image Detail Modal and Usage Tracking
The detail modal displays:
- Image preview and quick actions (edit, copy URL, delete).
- Basic info (size, dimensions, format, dates).
- SEO info (score and metadata).
- Usage information (pages where the image appears).

```mermaid
sequenceDiagram
participant Admin as "Admin"
participant Detail as "ImageDetailModal.tsx"
participant API as "/api/images/ : id/usage"
participant DB as "database.ts"
Admin->>Detail : Open detail modal
Detail->>API : GET usage
API->>DB : SELECT usage by image_id
DB-->>API : Rows
API-->>Detail : Usage list
Detail-->>Admin : Render usage info
```

**Diagram sources**
- [ImageDetailModal.tsx](file://src/app/Components/Admin/ImageDetailModal.tsx#L41-L63)
- [database.ts](file://src/lib/database.ts#L128-L139)

**Section sources**
- [ImageDetailModal.tsx](file://src/app/Components/Admin/ImageDetailModal.tsx#L41-L63)
- [database.ts](file://src/lib/database.ts#L128-L139)

### Database Initialization
The initialization script ensures the data directory exists, connects to SQLite, creates tables, and closes the connection. It also prints helpful messages for setup.

**Section sources**
- [init-database.js](file://scripts/init-database.js#L1-L120)

## Dependency Analysis
External dependencies relevant to image handling:
- sharp: Used for extracting image metadata (dimensions) during upload and replacement.
- sqlite3: Used for database operations.
- multer: Used for handling multipart form data in uploads.

```mermaid
graph LR
SHARP["sharp"] --> UPLOAD["Upload Endpoint"]
SHARP --> REPLACE["Replace Endpoint"]
SQLITE3["sqlite3"] --> DB_LIB["database.ts"]
DB_LIB --> API_IMAGES["/api/images/*"]
DB_LIB --> API_SCAN["/api/images/scan"]
MULTER["multer"] --> API_IMAGES
```

**Diagram sources**
- [route.ts](file://src/app/api/images/route.ts#L124-L136)
- [route.ts](file://src/app/api/images/[id]/replace/route.ts#L82-L91)
- [database.ts](file://src/lib/database.ts#L1-L255)
- [package-lock.json](file://package-lock.json#L6415-L6451)

**Section sources**
- [package-lock.json](file://package-lock.json#L6415-L6451)
- [database.ts](file://src/lib/database.ts#L1-L255)

## Performance Considerations
- Image metadata extraction: Using sharp to read dimensions adds overhead; cache or reuse metadata when possible.
- File I/O: Writing buffers to disk and deleting old files should be performed asynchronously to avoid blocking.
- Database operations: Batch inserts during scanning can be optimized by grouping statements and using transactions.
- Storage: Store images in a dedicated uploads directory and keep original assets separate to simplify cleanup and backups.
- CDN and optimization: Consider integrating a CDN and automated compression for production deployments.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common issues and remedies:
- Database not found: Ensure the initialization script has been run and the data directory is writable.
- Upload failures: Verify file type and size limits; confirm the uploads directory exists and is writable.
- Images not loading: Check file paths and permissions; ensure the public directory is served correctly.
- SEO scores not updating: Refresh the page after editing metadata; confirm the edit modal saves changes.

Permissions checklist:
- data/ directory must be writable for SQLite.
- public/uploads/ directory must be writable for uploads.

**Section sources**
- [IMAGE_MANAGEMENT_SETUP.md](file://IMAGE_MANAGEMENT_SETUP.md#L153-L167)
- [init-database.js](file://scripts/init-database.js#L9-L12)

## Conclusion
The media management system provides a comprehensive solution for image handling, including upload, replacement, scanning, metadata editing, usage tracking, and analytics. The modular design separates concerns across frontend modals, API endpoints, and database utilities, enabling maintainability and scalability. Integrating optimization and CDN strategies will further enhance performance and user experience.