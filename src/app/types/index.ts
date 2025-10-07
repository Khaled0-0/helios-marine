// Navigation types
export interface NavigationItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

// Boat types
export interface Boat {
  id: number;
  name: string;
  type: string;
  price: string;
  length: string;
  capacity: string;
  image: string;
  features: string[];
  description?: string;
  year?: number;
  condition?: 'new' | 'used' | 'refurbished';
}

// Feature types
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// Stats types
export interface Stat {
  value: string;
  label: string;
  description?: string;
}

// Social media types
export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

// Footer link types
export interface FooterLinkGroup {
  title: string;
  links: NavigationItem[];
}

// Hero section types
export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton: {
    text: string;
    href: string;
  };
  stats: Stat[];
}

// About section types
export interface AboutContent {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  button: {
    text: string;
    href: string;
  };
  image: string;
  stats: Stat[];
}
