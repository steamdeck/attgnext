const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '..', 'data', 'images.db');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err);
    return;
  }
  
  console.log('Connected to database');
  
  const pages = [
    {
      route: '/',
      page_name: 'Home Page',
      title: 'AT Tech Global - Digital Marketing & Web Solutions',
      meta_title: 'AT Tech Global | Digital Marketing Agency in Gurugram',
      meta_description: 'Leading digital marketing agency in Gurugram offering SEO, web development, social media marketing, and content marketing services to help businesses grow online.',
      keywords: 'digital marketing, seo, web development, gurugram, social media marketing',
      og_title: 'AT Tech Global - Your Digital Growth Partner',
      og_description: 'Transform your business with our expert digital marketing solutions. SEO, web development, and social media marketing services in Gurugram.',
      og_image: '/assets/img/hero-bg.jpg',
      canonical_url: 'https://attechglobal.com/',
      robots_index: 1,
      robots_follow: 1,
      twitter_title: 'AT Tech Global - Digital Marketing Experts',
      twitter_description: 'Grow your business with our proven digital marketing strategies. SEO, web development, and social media marketing services.',
      twitter_image: '/assets/img/hero-bg.jpg'
    },
    {
      route: '/about',
      page_name: 'About Us',
      title: 'About AT Tech Global - Your Trusted Digital Marketing Partner',
      meta_title: 'About AT Tech Global | Digital Marketing Experts in Gurugram',
      meta_description: 'Learn about AT Tech Global\'s mission to help businesses succeed online through innovative digital marketing strategies and cutting-edge web solutions.',
      keywords: 'about us, digital marketing agency, gurugram, seo company',
      og_title: 'About AT Tech Global - Digital Marketing Agency',
      og_description: 'Discover how AT Tech Global transforms businesses through innovative digital marketing solutions and expert web development services.',
      og_image: '/assets/img/about-hero.jpg',
      canonical_url: 'https://attechglobal.com/about',
      robots_index: 1,
      robots_follow: 1
    },
    {
      route: '/services',
      page_name: 'Services',
      title: 'Our Digital Marketing Services - AT Tech Global',
      meta_title: 'Digital Marketing Services | SEO, Web Dev & Social Media',
      meta_description: 'Comprehensive digital marketing services including SEO, web development, social media marketing, content marketing, and PPC advertising.',
      keywords: 'digital marketing services, seo services, web development, social media marketing',
      og_title: 'Complete Digital Marketing Services',
      og_description: 'End-to-end digital marketing solutions to grow your business online. SEO, web development, social media, and content marketing services.',
      og_image: '/assets/img/services-hero.jpg',
      canonical_url: 'https://attechglobal.com/services',
      robots_index: 1,
      robots_follow: 1
    },
    {
      route: '/services/seo',
      page_name: 'SEO Services',
      title: 'SEO Services - Boost Your Search Rankings | AT Tech Global',
      meta_title: 'Professional SEO Services | Search Engine Optimization',
      meta_description: 'Expert SEO services to improve your website rankings, drive organic traffic, and increase conversions. Local SEO, technical SEO, and content optimization.',
      keywords: 'seo services, search engine optimization, local seo, technical seo',
      og_title: 'Professional SEO Services - Boost Your Rankings',
      og_description: 'Get found online with our expert SEO services. Improve rankings, drive traffic, and grow your business with proven SEO strategies.',
      og_image: '/assets/img/seo-service.jpg',
      canonical_url: 'https://attechglobal.com/services/seo',
      robots_index: 1,
      robots_follow: 1
    },
    {
      route: '/services/smm',
      page_name: 'Social Media Marketing',
      title: 'Social Media Marketing Services | AT Tech Global',
      meta_title: 'SMM Services | Social Media Marketing Agency',
      meta_description: 'Boost your brand presence with expert social media marketing services. Facebook, Instagram, LinkedIn, and Twitter marketing strategies.',
      keywords: 'social media marketing, smm, facebook marketing, instagram marketing',
      og_title: 'Social Media Marketing Services',
      og_description: 'Grow your audience and engagement with our professional social media marketing services across all major platforms.',
      og_image: '/assets/img/smm-service.jpg',
      canonical_url: 'https://attechglobal.com/services/smm',
      robots_index: 1,
      robots_follow: 1
    },
    {
      route: '/services/crm',
      page_name: 'CRM Solutions',
      title: 'CRM Software Solutions | Customer Relationship Management',
      meta_title: 'CRM Solutions | Customer Relationship Management Software',
      meta_description: 'Streamline your customer relationships with our CRM software solutions. Manage leads, sales, and customer service efficiently.',
      keywords: 'crm, customer relationship management, crm software, lead management',
      og_title: 'CRM Software Solutions',
      og_description: 'Transform customer relationships with our comprehensive CRM solutions designed for modern businesses.',
      og_image: '/assets/img/crm-service.jpg',
      canonical_url: 'https://attechglobal.com/services/crm',
      robots_index: 1,
      robots_follow: 1
    },
    {
      route: '/services/web-development',
      page_name: 'Web Development',
      title: 'Web Development Services - Custom Websites | AT Tech Global',
      meta_title: 'Custom Web Development Services | Responsive Websites',
      meta_description: 'Professional web development services for custom websites, e-commerce platforms, and web applications. Responsive design and modern technologies.',
      keywords: 'web development, custom website, e-commerce, responsive design',
      og_title: 'Custom Web Development Services',
      og_description: 'Build stunning, high-performing websites with our expert web development services. Custom solutions for businesses of all sizes.',
      og_image: '/assets/img/web-dev-service.jpg',
      canonical_url: 'https://attechglobal.com/services/web-development',
      robots_index: 1,
      robots_follow: 1
    },
    {
      route: '/contact',
      page_name: 'Contact Us',
      title: 'Contact AT Tech Global - Get in Touch Today',
      meta_title: 'Contact Us | Digital Marketing Agency in Gurugram',
      meta_description: 'Ready to grow your business? Contact AT Tech Global today for a free consultation. We\'re here to help you succeed with digital marketing.',
      keywords: 'contact us, digital marketing consultation, gurugram',
      og_title: 'Contact AT Tech Global - Let\'s Talk Business',
      og_description: 'Get in touch with our digital marketing experts. Schedule a free consultation to discuss your business goals and growth strategies.',
      og_image: '/assets/img/contact-hero.jpg',
      canonical_url: 'https://attechglobal.com/contact',
      robots_index: 1,
      robots_follow: 1
    }
  ];
  
  let inserted = 0;
  
  pages.forEach(page => {
    const query = `
      INSERT OR IGNORE INTO page_metadata (
        route, page_name, title, meta_title, meta_description, keywords,
        og_title, og_description, og_image, canonical_url,
        robots_index, robots_follow, twitter_title, twitter_description, twitter_image
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const params = [
      page.route, page.page_name, page.title, page.meta_title, page.meta_description, page.keywords,
      page.og_title, page.og_description, page.og_image, page.canonical_url,
      page.robots_index, page.robots_follow, page.twitter_title || '', page.twitter_description || '', page.twitter_image || ''
    ];
    
    db.run(query, params, function(err) {
      if (err) {
        console.error(`Error inserting ${page.route}:`, err);
      } else {
        if (this.changes > 0) {
          console.log(`Inserted: ${page.route} - ${page.page_name}`);
          inserted++;
        } else {
          console.log(`Skipped (already exists): ${page.route}`);
        }
      }
      
      // Close database when all inserts are done
      if (++inserted === pages.length || (inserted >= pages.length && arguments.callee.caller === null)) {
        db.get('SELECT COUNT(*) as count FROM page_metadata', (err, row) => {
          console.log(`\nTotal page metadata records: ${row.count}`);
          db.close();
        });
      }
    });
  });
});
