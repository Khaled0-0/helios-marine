"use client";

import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

export default function AboutCTASection() {
   return (
      <section className="py-24 bg-blue-50">
         <Container>
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="text-center max-w-4xl mx-auto"
            >
               {/* Main Title */}
               <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  className="font-serif italic text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-[#0B1D2C] mb-6 lg:mb-8 leading-tight"
                  style={{
                     fontFamily: 'Playfair Display, serif',
                     fontWeight: 300,
                     letterSpacing: '0.02em'
                  }}
               >
                  Ready to Start Your Journey?
               </motion.h2>

               {/* Description */}
               <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-lg sm:text-xl md:text-2xl text-[#0B1D2C]/70 font-normal leading-relaxed mb-10 lg:mb-12 max-w-3xl mx-auto"
               >
                  Discover why hundreds of UAE boaters choose Helios Marine for their Nordkapp experience.
               </motion.p>

               {/* Action Buttons */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
               >
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <Button
                        href="/boats"
                        className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center text-lg min-w-[200px] justify-center"
                     >
                        Explore Our Boats
                     </Button>
                  </motion.div>

                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <Button
                        href="/contact"
                        className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center text-lg min-w-[200px] justify-center"
                     >
                        Visit our Showroom
                     </Button>
                  </motion.div>
               </motion.div>
            </motion.div>
         </Container>
      </section>
   );
}
