import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const CommonBanner = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Map for static routes
  const pageMap = {
    '': 'Home',
    'shop': 'Shop',
    'blog': 'Blog',
    'contact': 'Contact',
    'checkout': 'Checkout',
    'cart': 'Cart'
  };

  // Generate dynamic title
  const dynamicTitle = pageMap[pathSegments[0]] || 'Page';

  // Generate breadcrumb links
  const breadcrumb = pathSegments.map((seg, idx) => {
    const path = '/' + pathSegments.slice(0, idx + 1).join('/');
    const label = pageMap[seg] || decodeURIComponent(seg.replace(/-/g, ' '));
    return { path, label };
  });

  // Ensure Home is always first
  breadcrumb.unshift({ path: '/', label: 'Home' });

  return (
    <div className="commone_banner text-center">
      <h3>{dynamicTitle}</h3>
      <ul className="breadcrumb d-inline-flex gap-2 justify-content-center">
        {breadcrumb.map((crumb, idx) => (
          <li key={idx}>
            {idx !== breadcrumb.length - 1 ? (
              <>
                <Link to={crumb.path}>{crumb.label}</Link>
                <span className="mx-2"><i className="fa-solid fa-arrow-right"></i></span>
              </>
            ) : (
              <span>{crumb.label}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonBanner;
