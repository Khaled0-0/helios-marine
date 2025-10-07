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
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
         duration: 0.6,
         delay: index * 0.1,
         ease: "easeOut"
      }}
      className="text-center"
   >
      <motion.div
         className="text-2xl sm:text-4xl font-serif italic font-bold text-[#0B1D2C] mb-2"
         whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.2 }}
      >
         {stat.value}
      </motion.div>
      <div className="text-sm sm:text-base text-gray-500 font-medium">
         {stat.label}
      </div>
   </motion.div>
);

const HeritageCard = ({ card, index }: { card: typeof heritageCards[0]; index: number }) => (
   <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
         duration: 0.5,
         delay: 0.3 + index * 0.1,
         ease: "easeOut"
      }}
      whileHover={{
         scale: 1.05,
         y: -5
      }}
      className="bg-gray-100 rounded-xl p-6 text-center cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:shadow-lg"
   >
      <div className="text-2xl sm:text-3xl font-serif italic font-bold text-[#0B1D2C] mb-1">
         {card.title}
      </div>
      <div className="text-sm sm:text-base text-gray-500 font-medium">
         {card.subtitle}
      </div>
   </motion.div>
);

export default function HeritageSection() {
   return (
      <section className="py-24 bg-white">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
               {/* Left: Content */}
               <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="order-2 lg:order-1"
               >
                  {/* Main Heading */}
                  <motion.h2
                     initial={{ y: 30, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#0B1D2C] mb-6 leading-tight"
                  >
                     Nordic Heritage Meets UAE Waters
                  </motion.h2>

                  {/* Description */}
                  <motion.p
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className="text-lg sm:text-xl text-gray-500 mb-6 leading-relaxed font-semibold"
                  >
                     Born in the rugged fjords of Norway, Nordkapp boats have weathered the world&apos;s most challenging waters for over five decades. Each vessel carries the DNA of Scandinavian craftsmanship—where every detail serves both form and function.
                  </motion.p>

                  {/* Quote */}
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.6 }}
                     className="mb-8 bg-white rounded-lg"
                  >
                     <h5 className="text-base font-serif !italic text-center leading-1" style={{ color: '#AA8602' }}>
                        &quot;Helios Marine proudly brings Nordkapp&apos;s 50+ years of innovation to the UAE.&quot;
                     </h5>
                  </motion.div>

                  {/* Heritage Cards */}
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.8 }}
                     className="grid grid-cols-2 gap-4 mb-12"
                  >
                     {heritageCards.map((card, index) => (
                        <HeritageCard key={card.id} card={card} index={index} />
                     ))}
                  </motion.div>
               </motion.div>

               {/* Right: Image */}
               <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="order-1 lg:order-2"
               >
                  <motion.div
                     className="relative rounded-2xl overflow-hidden shadow-2xl"
                     whileHover={{
                        scale: 1.02,
                        rotateY: 2
                     }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                     <Image
                        src="/images/ImageWithFallback(4).png"
                        alt="Nordkapp boat on UAE waters with crew"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                     />

                     {/* Overlay with establishment year */}
                     <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                        className="absolute bottom-4 right-4 bg-[#0B1D2C] text-white px-4 py-3 rounded-xl shadow-lg"
                     >
                        <div className="text-2xl font-bold">1966</div>
                        <div className="text-sm font-medium text-gray-300">Est. Norway</div>
                     </motion.div>

                     {/* Subtle gradient overlay */}
                     <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                     />
                  </motion.div>
               </motion.div>
            </div>

            {/* Bottom Stats Section */}
            <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="mt-5 pt-12 border-t border-gray-200 "
            >
               <div className="flex items-center justify-center px-4 gap-4 md:gap-8">
                  {heritageStats.map((stat, index) => (
                     <div key={stat.id} className="flex items-center">
                        <StatCard stat={stat} index={index} />
                        {index < heritageStats.length - 1 && (
                           <div className="w-px h-12 bg-gray-300 mx-4 md:mx-8"></div>
                        )}
                     </div>
                  ))}
               </div>
            </motion.div>
         </Container>
      </section>
   );
}
