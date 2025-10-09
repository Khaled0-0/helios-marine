'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import { MenuIcon, CloseIcon } from './ui/Icons';
import { navigationItems } from '../data/navigation';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isMounted, setIsMounted] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const pathname = usePathname();

   // Check if we're on boats or contact pages for different styling
   const isWhiteHeader = pathname === '/boats' || pathname === '/contact';

   const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleLinkClick = () => {
      setIsMenuOpen(false);
   };

   // Handle scroll effect
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 20) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   // Prevent background scroll when mobile menu is open
   useEffect(() => {
      setIsMounted(true);
      if (isMenuOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = '';
      }
      return () => {
         document.body.style.overflow = '';
      };
   }, [isMenuOpen]);

   return (
      <motion.header
         initial={{ y: -100, opacity: 0 }}
         animate={{
            y: 0,
            opacity: 1,
            backgroundColor: isWhiteHeader
               ? 'rgba(255, 255, 255, 1)'
               : isScrolled
                  ? 'rgba(255, 255, 255, 1)'
                  : 'rgba(255, 255, 255, 0)',
            boxShadow: isScrolled
               ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
               : isWhiteHeader
                  ? '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
                  : '0 0 0 0 rgba(0, 0, 0, 0)',
            borderBottomColor: isScrolled
               ? 'rgba(229, 231, 235, 1)'
               : isWhiteHeader
                  ? 'rgba(229, 231, 235, 1)'
                  : 'rgba(229, 231, 235, 0)'
         }}
         transition={{
            y: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.6 },
            backgroundColor: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            boxShadow: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
            borderBottomColor: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
         }}
         style={{ borderBottomWidth: '1px', borderBottomStyle: 'solid' }}
         className="fixed top-0 left-0 right-0 z-[90]"
      >
         <Container>
            <div className="flex items-center justify-between h-16 sm:h-20">
               {/* Logo */}
               <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
               >
                  <Link
                     href="/"
                     className="flex items-center space-x-2 sm:space-x-3 group"
                     onClick={handleLinkClick}
                  >
                     <motion.div
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="w-8 h-8 sm:w-10 sm:h-10 relative overflow-hidden rounded-xl"
                     >
                        <Image
                           src="/images/logo 1.png"
                           alt="Helios Marine Logo"
                           fill
                           className="object-contain"
                           priority
                        />
                        {/* Shine effect overlay */}
                        <div className="shine-overlay pointer-events-none rounded-lg" aria-hidden="true" />
                     </motion.div>
                     <div className="flex flex-col -space-y-0.5 sm:-space-y-0.7">
                        <motion.h1
                           whileHover={{ x: 2 }}
                           transition={{ type: "spring", stiffness: 300 }}
                           className={`text-sm sm:text-lg font-serif font-semibold leading-tight !not-italic transition-colors duration-300 ${isScrolled ? 'text-[#0B1D2C]' : isWhiteHeader ? 'text-[#0B1D2C]' : 'text-white'
                              }`}
                        >
                           Helios Marine
                        </motion.h1>
                        <motion.div
                           whileHover={{ x: 2 }}
                           transition={{ type: "spring", stiffness: 300 }}
                           className={`text-[10px] sm:text-xs flex items-center gap-1 sm:gap-2 transition-colors duration-300 ${isScrolled ? 'text-gray-600' : isWhiteHeader ? 'text-gray-600' : 'text-white/70'
                              }`}
                        >
                           Authorized Nordkapp Dealer
                           <motion.div
                              animate={{ rotate: [0, 5, 0] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                           >
                              <Image
                                 src="/images/Icon (1).svg"
                                 alt="decorative waves"
                                 width={10}
                                 height={10}
                                 className={`sm:w-3 sm:h-3 transition-all duration-300 ${isScrolled ? 'filter brightness-0' : isWhiteHeader ? 'filter brightness-0' : ''
                                    }`}
                              />
                           </motion.div>
                        </motion.div>
                     </div>
                  </Link>
               </motion.div>

               {/* Desktop Navigation */}
               <nav className="hidden lg:flex items-center space-x-10">
                  {navigationItems.map((item, index) => {
                     const isActive = pathname === item.href;
                     return (
                        <motion.div
                           key={item.name}
                           initial={{ y: -20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           transition={{
                              duration: 0.4,
                              delay: 0.3 + (index * 0.1),
                              ease: [0.4, 0, 0.2, 1]
                           }}
                        >
                           <Link
                              href={item.href}
                              className={`transition-colors duration-300 relative group font-medium ${isScrolled
                                 ? `text-[#0B1D2C] hover:text-[#0B1D2C] ${isActive ? 'text-[#0B1D2C]' : 'text-gray-600'}`
                                 : isWhiteHeader
                                    ? `text-[#0B1D2C] hover:text-[#0B1D2C] ${isActive ? 'text-[#0B1D2C]' : 'text-gray-600'}`
                                    : `text-white hover:text-gray-200 ${isActive ? 'text-white' : ''}`
                                 }`}
                           >
                              <motion.span
                                 whileHover={{ y: -2 }}
                                 transition={{ type: "spring", stiffness: 300 }}
                                 className="inline-block"
                              >
                                 {item.name}
                              </motion.span>
                              <motion.span
                                 className={`absolute -bottom-1 left-0 h-0.5 ${isScrolled ? 'bg-[#0B1D2C]' : isWhiteHeader ? 'bg-[#0B1D2C]' : 'bg-white'
                                    } ${isActive ? 'w-full' : 'w-0'}`}
                                 whileHover={{ width: '100%' }}
                                 transition={{ duration: 0.3, ease: "easeInOut" }}
                              ></motion.span>
                           </Link>
                        </motion.div>
                     );
                  })}
               </nav>

               {/* Desktop CTA Button */}
               <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="hidden lg:flex items-center"
               >
                  <motion.div
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                     <Button
                        href="/boats"
                        className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center shadow-lg hover:shadow-xl"
                     >
                        <motion.div
                           animate={{ x: [0, 3, 0] }}
                           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                           <Image
                              src="/images/Icon.svg"
                              alt="Boat Icon"
                              width={16}
                              height={16}
                              className="mr-2"
                           />
                        </motion.div>
                        Explore Models
                     </Button>
                  </motion.div>
               </motion.div>

               {/* Mobile menu button */}
               <button
                  onClick={handleMenuToggle}
                  className={`lg:hidden p-2 rounded-lg transition-colors duration-300 cursor-pointer ${isScrolled
                     ? `text-[#0B1D2C] hover:text-[#0B1D2C] hover:bg-gray-100 ${isMenuOpen ? 'bg-gray-100 ring-1 ring-gray-300' : ''}`
                     : isWhiteHeader
                        ? `text-[#0B1D2C] hover:text-[#0B1D2C] hover:bg-gray-100 ${isMenuOpen ? 'bg-gray-100 ring-1 ring-gray-300' : ''}`
                        : `text-white hover:text-gray-200 hover:bg-white/10 ${isMenuOpen ? 'bg-white/20 ring-1 ring-white/30' : ''}`
                     }`}
                  aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                  aria-expanded={isMenuOpen}
               >
                  {isMenuOpen ? (
                     <CloseIcon size={28} />
                  ) : (
                     <MenuIcon size={26} />
                  )}
               </button>
            </div>

            {/* Mobile Navigation */}
            {isMounted && createPortal(
               <AnimatePresence>
                  {isMenuOpen && (
                     <>
                        {/* Click-away overlay */}
                        <motion.div
                           key="overlay"
                           className={`fixed inset-0 z-[70] backdrop-blur-sm lg:hidden ${isWhiteHeader ? 'bg-gray-500/20' : 'bg-black/30'
                              }`}
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                           transition={{ duration: 0.3, ease: "easeOut" }}
                           onClick={() => setIsMenuOpen(false)}
                        />
                        {/* Sliding panel */}
                        <motion.div
                           key="panel"
                           initial={{ y: -20, opacity: 0, scale: 0.95 }}
                           animate={{ y: 0, opacity: 1, scale: 1 }}
                           exit={{ y: -20, opacity: 0, scale: 0.95 }}
                           transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                           className="fixed top-20 left-0 right-0 z-[80] lg:hidden"
                        >
                           <nav className={`mx-3 rounded-2xl backdrop-blur-md p-2 ${isWhiteHeader
                              ? 'border border-gray-200 bg-white/95 shadow-[0_10px_30px_rgba(0,0,0,0.1)]'
                              : 'border border-white/15 bg-gradient-to-b from-black/70 to-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.35)]'
                              }`}>
                              <div className="px-2 py-1">
                                 {navigationItems.map((item, index) => {
                                    const isActive = pathname === item.href;
                                    return (
                                       <motion.div
                                          key={item.name}
                                          initial={{ x: -20, opacity: 0 }}
                                          animate={{ x: 0, opacity: 1 }}
                                          exit={{ x: -20, opacity: 0 }}
                                          transition={{
                                             duration: 0.3,
                                             delay: index * 0.1,
                                             ease: "easeOut"
                                          }}
                                       >
                                          <Link
                                             href={item.href}
                                             className={`block transition-all duration-300 py-3.5 px-3 rounded-xl font-medium text-[17px] tracking-wide hover:scale-[1.02] ${isWhiteHeader
                                                ? isActive
                                                   ? 'text-white bg-[#0B1D2C]'
                                                   : 'text-[#0B1D2C] hover:text-[#0B1D2C] hover:bg-gray-100 active:bg-gray-200'
                                                : isActive
                                                   ? 'text-white bg-white/20'
                                                   : 'text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15'
                                                }`}
                                             onClick={handleLinkClick}
                                          >
                                             {item.name}
                                          </Link>
                                       </motion.div>
                                    );
                                 })}
                              </div>
                              <motion.div
                                 className={`mt-2 border-t ${isWhiteHeader ? 'border-gray-200' : 'border-white/10'
                                    }`}
                                 initial={{ scaleX: 0 }}
                                 animate={{ scaleX: 1 }}
                                 transition={{ duration: 0.3, delay: 0.5 }}
                              />
                              <motion.div
                                 className="p-2"
                                 initial={{ y: 20, opacity: 0 }}
                                 animate={{ y: 0, opacity: 1 }}
                                 transition={{ duration: 0.4, delay: 0.6 }}
                              >
                                 <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ duration: 0.2 }}
                                 >
                                    <Button
                                       href="/boats"
                                       className="w-full justify-center bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-6 py-3.5 rounded-xl font-semibold transition-all duration-300 flex items-center shadow-lg ring-1 ring-white/10 hover:shadow-xl"
                                    >
                                       <Image
                                          src="/images/Icon.svg"
                                          alt="Boat Icon"
                                          width={18}
                                          height={18}
                                          className="mr-2"
                                       />
                                       Explore Models
                                    </Button>
                                 </motion.div>
                              </motion.div>
                           </nav>
                        </motion.div>
                     </>
                  )}
               </AnimatePresence>,
               document.body
            )}
         </Container>
      </motion.header>
   );
}