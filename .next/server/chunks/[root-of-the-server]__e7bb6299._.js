module.exports = {

"[project]/.next-internal/server/app/api/seo/json-metadata/[route]/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/lib/jsonDatabase.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "createMetadata": (()=>createMetadata),
    "deleteMetadata": (()=>deleteMetadata),
    "getAllMetadata": (()=>getAllMetadata),
    "getMetadata": (()=>getMetadata),
    "seedDefaultMetadata": (()=>seedDefaultMetadata),
    "updateMetadata": (()=>updateMetadata)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const METADATA_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'data', 'metadata');
// Helper to get file path for a route
function getMetadataFilePath(route) {
    if (route === '/') {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(METADATA_DIR, 'home.json');
    }
    const parts = route.split('/').filter(Boolean);
    if (parts.length === 1) {
        return __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(METADATA_DIR, `${parts[0]}.json`);
    }
    const fileName = parts.join('_') + '.json';
    const nestedPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(METADATA_DIR, ...parts.slice(0, -1), `${parts[parts.length - 1]}.json`);
    return nestedPath;
}
// Helper to ensure directory exists
async function ensureDir() {
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].mkdir(METADATA_DIR, {
            recursive: true
        });
    } catch (error) {
    // Directory might exist
    }
}
// Helper to read a single metadata file
async function readMetadataFile(route) {
    try {
        await ensureDir();
        const filePath = getMetadataFilePath(route);
        const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        return null;
    }
}
// Helper to write a single metadata file
async function writeMetadataFile(metadata) {
    await ensureDir();
    const filePath = getMetadataFilePath(metadata.route);
    await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(filePath, JSON.stringify(metadata, null, 2), 'utf8');
}
async function getMetadata(route) {
    return readMetadataFile(route);
}
async function getAllMetadata(page = 1, limit = 50, search = '') {
    await ensureDir();
    try {
        const files = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readdir(METADATA_DIR);
        const allMetadata = [];
        for (const file of files){
            if (file.endsWith('.json')) {
                const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(METADATA_DIR, file);
                const content = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(filePath, 'utf8');
                allMetadata.push(JSON.parse(content));
            }
        }
        // Sort by route
        allMetadata.sort((a, b)=>a.route.localeCompare(b.route));
        // Apply search filter
        let filtered = allMetadata;
        if (search) {
            const term = search.toLowerCase();
            filtered = filtered.filter((m)=>m.route.toLowerCase().includes(term) || m.page_name.toLowerCase().includes(term) || m.title.toLowerCase().includes(term) || m.meta_title.toLowerCase().includes(term));
        }
        const totalCount = filtered.length;
        const totalPages = Math.ceil(totalCount / limit);
        const offset = (page - 1) * limit;
        const data = filtered.slice(offset, offset + limit);
        return {
            data,
            pagination: {
                currentPage: page,
                totalPages,
                totalCount,
                hasNext: page < totalPages,
                hasPrev: page > 1
            }
        };
    } catch (error) {
        console.error('Error reading metadata files:', error);
        return {
            data: [],
            pagination: {
                currentPage: page,
                totalPages: 0,
                totalCount: 0,
                hasNext: false,
                hasPrev: false
            }
        };
    }
}
async function createMetadata(data) {
    // Check if route already exists
    const existing = await readMetadataFile(data.route);
    if (existing) {
        throw new Error('Route already exists');
    }
    const now = new Date().toISOString();
    const newRecord = {
        ...data,
        id: Math.floor(Math.random() * 10000),
        created_at: now,
        updated_at: now
    };
    await writeMetadataFile(newRecord);
    return newRecord;
}
async function updateMetadata(route, updates) {
    const existing = await readMetadataFile(route);
    if (!existing) {
        return null;
    }
    const now = new Date().toISOString();
    const updated = {
        ...existing,
        ...updates,
        route: existing.route,
        updated_at: now
    };
    await writeMetadataFile(updated);
    return updated;
}
async function deleteMetadata(route) {
    try {
        await ensureDir();
        const filePath = getMetadataFilePath(route);
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].unlink(filePath);
        return true;
    } catch (error) {
        return false;
    }
}
async function seedDefaultMetadata() {
    const defaultMetadata = [
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
    ];
    const now = new Date().toISOString();
    for (const item of defaultMetadata){
        const metadata = {
            ...item,
            id: Math.floor(Math.random() * 10000),
            created_at: now,
            updated_at: now
        };
        await writeMetadataFile(metadata);
    }
    console.log('Seeded default metadata files');
}
}}),
"[project]/src/app/api/seo/json-metadata/[route]/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET),
    "dynamic": (()=>dynamic)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonDatabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/jsonDatabase.ts [app-route] (ecmascript)");
;
;
const dynamic = 'force-dynamic';
async function GET(request, { params }) {
    try {
        const { route } = await params;
        const decodedRoute = decodeURIComponent(route);
        const metadata = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$jsonDatabase$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getMetadata"])(decodedRoute);
        if (!metadata) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: `Metadata not found for route: ${decodedRoute}`
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: metadata
        });
    } catch (error) {
        console.error('Error reading metadata from JSON file:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: 'Failed to fetch metadata'
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__e7bb6299._.js.map