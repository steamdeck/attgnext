import React from 'react';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Helper function to fetch book cab items
async function getBookCabItems() {
  try {
    // If you have an API endpoint, fetch from there
    // const response = await fetch('https://your-api.com/book-cab');
    // const data = await response.json();
    // return data || [];
    
    // For now, return empty array or fetch from your data source
    // Replace this with your actual data fetching logic
    return [];
  } catch (error) {
    console.error('Error fetching book cab items:', error);
    return [];
  }
}

// Generate static params with defensive checks
export async function generateStaticParams() {
  try {
    const data = await getBookCabItems();
    
    // Ensure we only use items that have a valid slug string
    const validParams = (data || [])
      .filter((item: any) => {
        // Check if item exists and has a slug property
        if (!item || !item.slug) {
          console.warn('Skipping item with missing slug', item);
          return false;
        }
        
        // Ensure slug is a string and not empty
        const slug = typeof item.slug === 'string' ? item.slug : String(item.slug || '');
        return slug.length > 0;
      })
      .map((item: any) => {
        // Safe conversion: ensure slug is a string before calling toLowerCase
        const slug = item?.slug ?? '';
        return {
          slug: String(slug).toLowerCase(),
        };
      });
    
    return validParams;
  } catch (error) {
    console.error('Error in generateStaticParams for book-cab:', error);
    // Return empty array on error to prevent build failure
    return [];
  }
}

// Page component
export default async function BookCabPage({ params }: PageProps) {
  const { slug } = await params;
  
  if (!slug) {
    notFound();
  }
  
  // Fetch the specific book cab item based on slug
  // Replace this with your actual data fetching logic
  // const item = await getBookCabItemBySlug(slug);
  // if (!item) {
  //   notFound();
  // }
  
  return (
    <div>
      <h1>Book Cab - {slug}</h1>
      <p>This is a placeholder page for the book cab route.</p>
      {/* Add your actual content here */}
    </div>
  );
}

// Generate metadata if needed
export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  
  return {
    title: `Book Cab - ${slug}`,
    description: `Book cab page for ${slug}`,
  };
}

