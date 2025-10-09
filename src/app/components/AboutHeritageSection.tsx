"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

export default function AboutHeritageSection() {
   return (
      <section className="py-24 bg-gray-50">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               {/* Left: Content */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="order-2 lg:order-1"
               >
                  {/* Main Heading */}
                  <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B1D2C] mb-6 sm:mb-8 leading-tight">
                     Our Heritage
                  </h2>

                  {/* Description Paragraphs */}
                  <div className="space-y-6 mb-8">
                     <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
                     >
                        At Helios Marine, we believe yachting is more than ownership — it&apos;s an experience of freedom, prestige, and connection with the sea.As the exclusive Nordkapp partner in the UAE, we bring over 50 years of Scandinavian craftsmanship into the heart of the Gulf.

                        Every Nordkapp vessel reflects a legacy of Norwegian innovation: built to endure rugged northern seas, yet refined with luxury for modern lifestyles. Helios ensures this heritage meets the expectations of today&apos;s discerning boat owners in the Emirates.
                     </motion.p>

                     <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed"
                     >
                        Every Nordkapp vessel embodies Norwegian innovation, built for the rugged northern seas yet refined with luxury for modern lifestyles. This heritage meets the expectations of discerning boat owners in the Emirates, where quality and performance are paramount.
                     </motion.p>
                  </div>
               </motion.div>

               {/* Right: Image */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="order-1 lg:order-2"
               >
                  <motion.div
                     className="relative rounded-xl sm:rounded-2xl overflow-visible shadow-xl sm:shadow-2xl group"
                     whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" }
                     }}
                  >
                     <Image
                        src="/images/ImageWithFallback(8).png"
                        alt="Noble Emperor II yacht - Nordkapp heritage vessel"
                        width={600}
                        height={400}
                        className="w-full h-auto xl:h-[500px] object-cover md:h-[400px] group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                     />

                     {/* Overlay with establishment year */}
                     <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="absolute xl:-bottom-3 xl:-right-15 bg-white/95 backdrop-blur-sm xl:px-4 xl:py-3 py-1 px-2 flex flex-col justify-center items-start rounded-lg shadow-lg z-10 bottom-4 right-4 text-black"
                     >
                        <div className="number-badge text-2xl">1966</div>
                        <div className="number-badge-subtitle text-sm">Est. Norway</div>
                     </motion.div>

                     {/* Subtle gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-" />
                  </motion.div>

               </motion.div>
            </div>
         </Container>
      </section>
   );
}
