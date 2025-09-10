module.exports = {

"[project]/.next-internal/server/app/sitemap.xml/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

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
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/lib/sitemap-utils.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Utility functions for sitemap generation
__turbopack_context__.s({
    "getBlogPosts": (()=>getBlogPosts),
    "getLastModified": (()=>getLastModified),
    "getProjectRoutes": (()=>getProjectRoutes),
    "getRouteMetadata": (()=>getRouteMetadata),
    "getTeamMemberRoutes": (()=>getTeamMemberRoutes)
});
async function getBlogPosts() {
    // If you have a blog with dynamic posts, implement this function
    // For example, if you fetch from an API or read from a directory:
    // Example 1: If you have blog posts in a directory
    // const blogDir = join(process.cwd(), 'content/blog')
    // const files = readdirSync(blogDir)
    // return files.map(file => file.replace('.md', ''))
    // Example 2: If you fetch from an API
    // const response = await fetch('https://your-api.com/blog-posts')
    // const posts = await response.json()
    // return posts.map(post => post.slug)
    // For now, return empty array - you can implement this later
    return [];
}
async function getProjectRoutes() {
    // If you have dynamic project pages, implement this function
    // Similar to getBlogPosts but for projects
    return [];
}
async function getTeamMemberRoutes() {
    // If you have dynamic team member pages, implement this function
    return [];
}
function getRouteMetadata(route) {
    let priority = 0.5;
    let changeFrequency = 'weekly';
    if (route === '/') {
        priority = 1.0;
        changeFrequency = 'daily';
    } else if (route.startsWith('/service')) {
        priority = 0.8;
        changeFrequency = 'weekly';
    } else if (route.startsWith('/blog')) {
        priority = 0.7;
        changeFrequency = 'weekly';
    } else if (route.startsWith('/project')) {
        priority = 0.7;
        changeFrequency = 'monthly';
    } else if ([
        '/about',
        '/contact',
        '/pricing',
        '/team'
    ].includes(route)) {
        priority = 0.8;
        changeFrequency = 'monthly';
    } else if (route.includes('details')) {
        priority = 0.6;
        changeFrequency = 'monthly';
    }
    return {
        priority,
        changeFrequency
    };
}
function getLastModified(route) {
    // You can implement more sophisticated logic here
    // For example, reading file modification dates or fetching from a database
    // For now, return current date
    // In a real implementation, you might:
    // 1. Read the actual file modification date
    // 2. Get the last updated date from your CMS
    // 3. Use a database timestamp
    return new Date();
}
}}),
"[project]/src/app/sitemap.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>sitemap)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sitemap$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sitemap-utils.ts [app-rsc] (ecmascript)");
;
;
;
// Function to recursively get all page files
function getAllPages(dir, basePath = '') {
    const pages = [];
    try {
        const items = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readdirSync"])(dir);
        for (const item of items){
            const fullPath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(dir, item);
            const stat = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["statSync"])(fullPath);
            if (stat.isDirectory()) {
                // Skip certain directories
                if ([
                    'node_modules',
                    '.next',
                    'Components',
                    'assets',
                    'favicon.ico'
                ].includes(item)) {
                    continue;
                }
                // Handle route groups (directories with parentheses)
                if (item.startsWith('(') && item.endsWith(')')) {
                    // For route groups, don't add them to the path
                    pages.push(...getAllPages(fullPath, basePath));
                } else {
                    // Regular directory
                    const newBasePath = basePath ? `${basePath}/${item}` : item;
                    pages.push(...getAllPages(fullPath, newBasePath));
                }
            } else if (item === 'page.tsx' || item === 'page.ts') {
                // Found a page file
                if (basePath) {
                    pages.push(`/${basePath}`);
                } else {
                    // Root page
                    pages.push('/');
                }
            }
        }
    } catch (error) {
        console.error(`Error reading directory ${dir}:`, error);
    }
    return pages;
}
// Function to get dynamic routes (for blogs, projects, etc.)
async function getDynamicRoutes() {
    const dynamicRoutes = [];
    try {
        // Get blog posts
        const blogPosts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sitemap$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBlogPosts"])();
        blogPosts.forEach((post)=>dynamicRoutes.push(`/blog/${post}`));
        // Get project routes
        const projectRoutes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sitemap$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjectRoutes"])();
        projectRoutes.forEach((project)=>dynamicRoutes.push(`/project/${project}`));
        // Get team member routes
        const teamRoutes = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sitemap$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTeamMemberRoutes"])();
        teamRoutes.forEach((member)=>dynamicRoutes.push(`/team/${member}`));
    } catch (error) {
        console.error('Error fetching dynamic routes:', error);
    }
    return dynamicRoutes;
}
async function sitemap() {
    // Get the base URL dynamically based on environment
    let baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (!baseUrl) {
        if ("TURBOPACK compile-time truthy", 1) {
            // In development, try to detect the actual port
            const port = process.env.PORT || process.env.NEXT_PORT || 3000;
            baseUrl = `http://localhost:${port}`;
        } else {
            // In production, use your actual domain
            baseUrl = 'https://yourdomain.com';
        }
    }
    // Get all static pages
    const appDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'src/app');
    const staticPages = getAllPages(appDir);
    // Get dynamic routes
    const dynamicRoutes = await getDynamicRoutes();
    // Combine all routes
    const allRoutes = [
        ...staticPages,
        ...dynamicRoutes
    ];
    // Generate sitemap entries
    const sitemapEntries = allRoutes.map((route)=>{
        const { priority, changeFrequency } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sitemap$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMetadata"])(route);
        return {
            url: `${baseUrl}${route}`,
            lastModified: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sitemap$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLastModified"])(route),
            changeFrequency,
            priority
        };
    });
    return sitemapEntries;
}
}}),
"[project]/src/app/sitemap--route-entry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/sitemap.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js [app-rsc] (ecmascript)");
;
;
;
const sitemapModule = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$sitemap$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
};
const handler = sitemapModule.default;
const generateSitemaps = sitemapModule.generateSitemaps;
const contentType = "application/xml";
const cacheControl = "public, max-age=0, must-revalidate";
const fileType = "sitemap";
if (typeof handler !== 'function') {
    throw new Error('Default export is missing in "./sitemap.ts"');
}
async function GET(_, ctx) {
    const { __metadata_id__: id, ...params } = await ctx.params || {};
    const hasXmlExtension = id ? id.endsWith('.xml') : false;
    if (id && !hasXmlExtension) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"]('Not Found', {
            status: 404
        });
    }
    if (("TURBOPACK compile-time value", "development") !== 'production' && sitemapModule.generateSitemaps) {
        const sitemaps = await sitemapModule.generateSitemaps();
        for (const item of sitemaps){
            if (item?.id == null) {
                throw new Error('id property is required for every item returned from generateSitemaps');
            }
        }
    }
    const targetId = id && hasXmlExtension ? id.slice(0, -4) : undefined;
    const data = await handler({
        id: targetId
    });
    const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$metadata$2f$resolve$2d$route$2d$data$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveRouteData"])(data, fileType);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"](content, {
        headers: {
            'Content-Type': contentType,
            'Cache-Control': cacheControl
        }
    });
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__9afb0137._.js.map