import Link from 'next/link';
import Container from './ui/Container';
import { TwitterIcon, FacebookIcon, LinkedInIcon, PinterestIcon } from './ui/Icons';
import { footerLinkGroups } from '../data/navigation';
import { socialLinks } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    twitter: TwitterIcon,
    facebook: FacebookIcon,
    linkedin: LinkedInIcon,
    pinterest: PinterestIcon,
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Container className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary-dark transition-colors duration-200">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <span className="text-2xl font-bold group-hover:text-primary transition-colors duration-200">
                Helios
              </span>
            </Link>
            <p className="text-body-regular text-gray-400 mb-6">
              Your premier destination for premium boats, yachts, and marine equipment. 
              Experience the freedom of the open water with Helios.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-h5 font-semibold mb-6 text-white">
                  {group.title}
                </h3>
                <ul className="space-y-4">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-body-regular text-gray-400 hover:text-primary transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-body-regular text-gray-400">
              © {currentYear} Helios. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-body-regular text-gray-400">
                Made with ❤️ for boat lovers
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}