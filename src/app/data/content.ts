import { HeroContent, AboutContent, SocialLink } from '../types';

export const heroContent: HeroContent = {
   title: 'Discover the Perfect',
   subtitle: 'Boat for Your Adventure',
   description: 'Experience the freedom of the open water with our premium collection of boats, yachts, and marine equipment. Your next adventure awaits.',
   primaryButton: {
      text: 'Explore Boats',
      href: '/boats',
   },
   secondaryButton: {
      text: 'Learn More',
      href: '/about',
   },
   stats: [
      { value: '500+', label: 'Boats Available' },
      { value: '50+', label: 'Years Experience' },
      { value: '10K+', label: 'Happy Customers' },
   ],
};

export const aboutContent: AboutContent = {
   title: 'Your Trusted Partner in',
   subtitle: 'Marine Excellence',
   description: 'For over 50 years, Helios has been the premier destination for boat enthusiasts, offering unparalleled expertise, quality vessels, and exceptional service. We\'re passionate about connecting you with the perfect boat for your adventures.',
   features: [
      {
         icon: 'check',
         title: 'Expert Selection',
         description: 'Every boat is carefully inspected by our marine experts',
      },
      {
         icon: 'service',
         title: 'Comprehensive Service',
         description: 'From purchase to maintenance, we\'re here to help',
      },
      {
         icon: 'support',
         title: '24/7 Support',
         description: 'Round-the-clock assistance for all your marine needs',
      },
   ],
   button: {
      text: 'Learn More About Us',
      href: '/about',
   },
   image: '/api/placeholder/600/500',
   stats: [
      { value: '50+', label: 'Years Experience' },
      { value: '10K+', label: 'Happy Customers' },
   ],
};

export const socialLinks: SocialLink[] = [
   {
      name: 'Twitter',
      href: '#',
      icon: 'twitter',
   },
   {
      name: 'Facebook',
      href: '#',
      icon: 'facebook',
   },
   {
      name: 'LinkedIn',
      href: '#',
      icon: 'linkedin',
   },
   {
      name: 'Pinterest',
      href: '#',
      icon: 'pinterest',
   },
];
