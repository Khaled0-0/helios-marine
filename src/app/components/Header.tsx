'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import { MenuIcon, CloseIcon } from './ui/Icons';
import { navigationItems } from '../data/navigation';

export default function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isMounted, setIsMounted] = useState(false);

   const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
   };

   const handleLinkClick = () => {
      setIsMenuOpen(false);
   };

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
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="fixed top-0 left-0 right-0 z-[90] bg-black/20 backdrop-blur-md"
      >
         <Container>
            <div className="flex items-center justify-between h-20">
               {/* Logo */}
               <Link
                  href="/"
                  className="flex items-center space-x-3 group"
                  onClick={handleLinkClick}
               >
                  <div className="w-10 h-10 relative overflow-hidden rounded-xl">
                     <Image
                        src="/images/logo 1.png"
                        alt="Helios Marine Logo"
                        fill
                        className="object-contain"
                        priority
                     />
                     {/* Shine effect overlay */}
                     <div className="shine-overlay pointer-events-none rounded-lg" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col -space-y-0.7">
                     <h1 className="text-white text-lg font-serif !not-italic font-semibold leading-tight">Helios Marine</h1>
                     <p className="text-white/70 text-xs flex items-center gap-2">
                        Authorized Nordkapp Dealer
                        <Image src="/images/Icon (1).svg" alt="decorative waves" width={12} height={12} />
                     </p>
                  </div>
               </Link>

               {/* Desktop Navigation */}
               <nav className="hidden lg:flex items-center space-x-10">
                  {navigationItems.map((item) => (
                     <Link
                        key={item.name}
                        href={item.href}
                        className="text-white hover:text-gray-200 transition-colors duration-200 relative group font-medium"
                     >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
                     </Link>
                  ))}
               </nav>

               {/* Desktop CTA Button */}
               <div className="hidden lg:flex items-center">
                  <Button
                     href="/boats"
                     className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center"
                  >
                     <Image
                        src="/images/Icon.svg"
                        alt="Boat Icon"
                        width={16}
                        height={16}
                        className="mr-2"
                     />
                     Explore Models
                  </Button>
               </div>

               {/* Mobile menu button */}
               <button
                  onClick={handleMenuToggle}
                  className={`lg:hidden p-2 rounded-lg text-white hover:text-gray-200 hover:bg-white/10 transition-colors duration-200 cursor-pointer ${isMenuOpen ? 'bg-white/20 ring-1 ring-white/30' : ''}`}
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
                           className="fixed inset-0 z-[70] bg-black/30 backdrop-blur-sm lg:hidden"
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
                           <nav className="mx-3 rounded-2xl border border-white/15 bg-gradient-to-b from-black/70 to-black/60 backdrop-blur-md p-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
                              <div className="px-2 py-1">
                                 {navigationItems.map((item, index) => (
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
                                          className="block text-white/90 hover:text-white hover:bg-white/10 active:bg-white/15 transition-all duration-300 py-3.5 px-3 rounded-xl font-medium text-[17px] tracking-wide hover:scale-[1.02]"
                                          onClick={handleLinkClick}
                                       >
                                          {item.name}
                                       </Link>
                                    </motion.div>
                                 ))}
                              </div>
                              <motion.div
                                 className="mt-2 border-t border-white/10"
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