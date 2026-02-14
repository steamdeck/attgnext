const fs = require('fs');
const path = require('path');

const metadataDir = path.join(__dirname, '..', 'data', 'metadata');

// Ensure directory exists
if (!fs.existsSync(metadataDir)) {
  fs.mkdirSync(metadataDir, { recursive: true });
}

const pages = [
  {
    filename: 'home.json',
    data: {
      id: 1,
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
      twitter_image: '/assets/img/hero-bg.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    filename: 'about.json',
    data: {
      id: 2,
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
      twitter_image: '/assets/img/hero-bg.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    filename: 'contact.json',
    data: {
      id: 3,
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
      twitter_image: '/assets/img/hero-bg.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    filename: 'services.json',
    data: {
      id: 4,
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
      twitter_image: '/assets/img/hero-bg.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  },
  {
    filename: 'blog.json',
    data: {
      id: 5,
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
      twitter_image: '/assets/img/hero-bg.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  }
];

pages.forEach(page => {
  const filePath = path.join(metadataDir, page.filename);
  fs.writeFileSync(filePath, JSON.stringify(page.data, null, 2), 'utf8');
  console.log(`Created ${page.filename}`);
});

console.log(`\nSuccessfully created ${pages.length} metadata files in data/metadata/`);
