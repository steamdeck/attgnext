import React from 'react';
import Link from 'next/link';
import SchemaOrg from './SchemaOrg';

interface BreadcrumbItem {
  name: string;
  item: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <>
      <SchemaOrg type="breadcrumb" data={{ items }} />
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li 
              key={index} 
              className={`breadcrumb-item ${index === items.length - 1 ? 'active' : ''}`}
              aria-current={index === items.length - 1 ? 'page' : undefined}
            >
              {index === items.length - 1 ? (
                item.name
              ) : (
                <Link href={item.item}>{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumb;
