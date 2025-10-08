"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

const heritageStats = [
   {
      id: 1,
      value: "50+",
      label: "Years Heritage"
   },
   {
      id: 2,
      value: "100%",
      label: "Authentic Parts"
   },
   {
      id: 3,
      value: "24/7",
      label: "Support Available"
   }
];

const heritageCards = [
   {
      id: 1,
      title: "Nordic",
      subtitle: "Engineering"
   },
   {
      id: 2,
      title: "Gulf",
      subtitle: "Ready"
   }
];

const StatCard = ({ stat, index }: { stat: typeof heritageStats[0]; index: number }) => (
   <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
         duration: 0.4,
         delay: index * 0.05,
         ease: "easeOut"
      }}
      className="text-center"
   >
      <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif italic font-bold text-[#0B1D2C] mb-1 sm:mb-2">
         {stat.value}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">
         {stat.label}
      </div>
   </motion.div>
);

const HeritageCard = ({ card }: { card: typeof heritageCards[0] }) => (
   <div className="bg-gray-100 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center cursor-pointer transition-all duration-200 hover:bg-gray-200 hover:shadow-md">
      <div className="text-xl sm:text-2xl md:text-3xl font-serif italic font-bold text-[#0B1D2C] mb-1">
         {card.title}
      </div>
      <div className="text-xs sm:text-sm md:text-base text-gray-500 font-medium">
         {card.subtitle}
      </div>
   </div>
);

export default function HeritageSection() {
   return (
      <section className="py-24 bg-white">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-start">
               {/* Left: Content */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="order-2 lg:order-1"
               >
                  {/* Main Heading */}
                  <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B1D2C] mb-4 sm:mb-6 leading-tight">
                     Nordic Heritage Meets UAE Waters
                  </h2>

                  {/* Description */}
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 mb-4 sm:mb-6 leading-relaxed font-serif italic">
                     Born in the rugged fjords of Norway, Nordkapp boats have weathered the world&apos;s most challenging waters for over five decades. Each vessel carries the DNA of Scandinavian craftsmanship—where every detail serves both form and function.
                  </p>

                  {/* Quote */}
                  <div className="mb-6 sm:mb-8 bg-white rounded-lg p-4 sm:p-6">
                     <h5 className="text-sm sm:text-base font-serif !italic text-center leading-relaxed" style={{ color: '#AA8602' }}>
                        &quot;Helios Marine proudly brings Nordkapp&apos;s 50+ years of innovation to the UAE.&quot;
                     </h5>
                  </div>

                  {/* Heritage Cards */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-12">
                     {heritageCards.map((card) => (
                        <HeritageCard key={card.id} card={card} />
                     ))}
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
                     className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group"
                     whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3, ease: "easeOut" }
                     }}
                  >
                     <Image
                        src="/images/ImageWithFallback(4).png"
                        alt="Nordkapp boat on UAE waters with crew"
                        width={600}
                        height={400}
                        className="w-full h-auto xl:h-[570px] object-cover md:h-[370px] group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                     />

                     {/* Overlay with establishment year */}
                     <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-[#0B1D2C] text-white px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl shadow-lg"
                     >
                        <div className="text-lg sm:text-2xl font-bold">1966</div>
                        <div className="text-xs sm:text-sm font-medium text-gray-300">Est. Norway</div>
                     </motion.div>

                     {/* Subtle gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                  </motion.div>
               </motion.div>
            </div>

            {/* Bottom Stats Section */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="mt-8 pt-8 sm:pt-12 border-t border-gray-200"
            >
               <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-8">
                  {heritageStats.map((stat, index) => (
                     <div key={stat.id} className="flex items-center">
                        <StatCard stat={stat} index={index} />
                        {index < heritageStats.length - 1 && (
                           <div className="w-px h-8 sm:h-12 bg-gray-300 mx-2 sm:mx-4 md:mx-8"></div>
                        )}
                     </div>
                  ))}
               </div>
            </motion.div>
         </Container>
      </section>
   );
}
