import { NavigationItem } from '../types';

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Boats', href: '/boats' },
  { name: 'About', href: '/about' },
  // { name: 'Shop', href: '/shop' },
  { name: 'Contact', href: '/contact' },
];

export const footerLinkGroups = [
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/team' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Services',
    links: [
      { name: 'Boat Sales', href: '/boats' },
      { name: 'Boat Rental', href: '/rental' },
      { name: 'Maintenance', href: '/maintenance' },
      { name: 'Insurance', href: '/insurance' },
    ],
  },
  {
    title: 'Support',
    links: [
      { name: 'Help Center', href: '/help' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Warranty', href: '/warranty' },
      { name: 'FAQ', href: '/faq' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  },
];
