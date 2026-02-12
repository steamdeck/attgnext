import { initDatabase, runQuery } from '../lib/database'

export async function seedInitialPageMetadata() {
  await initDatabase()
  
  const initialPages = [
    {
      route: '/',
      page_name: 'Home Page',
      title: 'AT Tech Global - Digital Marketing Agency in Gurugram',
      meta_title: 'AT Tech Global - Digital Marketing Agency | SEO & Web Development',
      meta_description: 'Leading digital marketing agency in Gurugram offering SEO, PPC, social media marketing, and web development services. Grow your business with our expert digital solutions.',
      keywords: 'digital marketing agency, seo services, web development, ppc advertising, social media marketing, gurugram',
      og_title: 'AT Tech Global - Digital Marketing Agency in Gurugram',
      og_description: 'Transform your business with our comprehensive digital marketing services. Expert SEO, PPC, and web development solutions.',
      robots_index: true,
      robots_follow: true
    },
    {
      route: '/about',
      page_name: 'About Us',
      title: 'About AT Tech Global | Your Partner in Digital Excellence',
      meta_title: 'About AT Tech Global - Digital Marketing Experts | Our Story',
      meta_description: 'Discover the story behind AT Tech Global. Since 2020, we\'ve helped 500+ businesses achieve digital success through innovative marketing strategies and creative solutions.',
      keywords: 'about AT Tech Global, digital marketing agency, company story, our mission, digital transformation, gurugram',
      og_title: 'About AT Tech Global - Digital Marketing Experts',
      og_description: 'Learn about our journey, mission, and how we help businesses succeed in the digital world.',
      robots_index: true,
      robots_follow: true
    },
    {
      route: '/contact',
      page_name: 'Contact Us',
      title: 'Contact AT Tech Global | Get in Touch with Our Digital Experts',
      meta_title: 'Contact Us - AT Tech Global | Digital Marketing Consultation',
      meta_description: 'Ready to grow your business? Contact AT Tech Global for a free consultation. Our digital marketing experts are ready to help you achieve your business goals.',
      keywords: 'contact AT Tech Global, digital marketing consultation, get quote, business inquiry, gurugram office',
      og_title: 'Contact AT Tech Global - Digital Marketing Experts',
      og_description: 'Get in touch with our digital marketing team for a free consultation and quote.',
      robots_index: true,
      robots_follow: true
    },
    {
      route: '/services/seo',
      page_name: 'SEO Services',
      title: 'SEO Services | Search Engine Optimization by AT Tech Global',
      meta_title: 'SEO Services - Search Engine Optimization | AT Tech Global',
      meta_description: 'Boost your online visibility with our expert SEO services. We help businesses rank higher on Google and drive qualified organic traffic to increase conversions.',
      keywords: 'seo services, search engine optimization, google ranking, organic traffic, keyword optimization, local seo',
      og_title: 'SEO Services - Search Engine Optimization Experts',
      og_description: 'Professional SEO services to improve your search rankings and drive organic traffic.',
      robots_index: true,
      robots_follow: true
    },
    {
      route: '/services/web-development',
      page_name: 'Web Development',
      title: 'Web Development Services | Custom Websites by AT Tech Global',
      meta_title: 'Web Development Services - Custom Website Design | AT Tech Global',
      meta_description: 'Get a professional, responsive website that converts visitors into customers. Our web development team creates stunning websites tailored to your business needs.',
      keywords: 'web development, custom website, responsive design, website builder, wordpress development, e-commerce website',
      og_title: 'Web Development Services - Custom Website Solutions',
      og_description: 'Professional web development services for businesses of all sizes.',
      robots_index: true,
      robots_follow: true
    }
  ]

  for (const page of initialPages) {
    try {
      // Check if page already exists
      const existing = await runQuery('SELECT id FROM page_metadata WHERE route = ?', [page.route])
      
      if ((existing as any).changes === 0) {
        // Insert new page
        await runQuery(`
          INSERT INTO page_metadata (
            route, page_name, title, meta_title, meta_description, keywords,
            og_title, og_description, robots_index, robots_follow
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `, [
          page.route, page.page_name, page.title, page.meta_title, page.meta_description, page.keywords,
          page.og_title, page.og_description, page.robots_index, page.robots_follow
        ])
        console.log(`Added metadata for ${page.route}`)
      }
    } catch (error) {
      console.error(`Error seeding ${page.route}:`, error)
    }
  }
  
  console.log('Initial page metadata seeding completed')
}