'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import { ChevronDownIcon } from './ui/Icons';
import { heroContent } from '../data/content';

export default function Hero() {
   return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
         {/* Background Image */}
         <div className="absolute inset-0 z-0">
            <Image
               src="/images/ImageWithFallback.png"
               alt="Luxury yacht on calm waters"
               fill
               className="object-cover"
               priority
               quality={90}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>
         </div>

         {/* Content */}
         <Container className="relative z-20 text-center text-white pt-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
               {/* Main Heading */}
               <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif !font-black mb-6 sm:mb-8 leading-tight"
               >
                  Precision Born of the Sea.
               </motion.h1>

               {/* Description */}
               <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 max-w-4xl mx-auto text-gray-200 font-light"
               >
                  Authorized dealer in UAE — Helios Marine brings Scandinavian Engineering to Gulf waters.
               </motion.p>

               {/* CTA Buttons */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20"
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <Button
                        href="/boats"
                        className="w-full sm:w-auto bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
                     >
                        <Image
                           src="/images/Icon.svg"
                           alt="Boat Icon"
                           width={20}
                           height={20}
                           className="mr-2"
                        />
                        Explore Models
                     </Button>
                  </motion.div>
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <a
                        href="/contact"
                        className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100 hover:text-gray-800 border-2 border-white hover:border-gray-300 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center cursor-pointer"
                     >
                        Book Consultation
                     </a>
                  </motion.div>
               </motion.div>

            </div>
         </Container>

         {/* Scroll indicator */}
         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center animate-bounce">
               <ChevronDownIcon size={16} className="text-white" />
            </div>
         </div>
      </section>
   );
}