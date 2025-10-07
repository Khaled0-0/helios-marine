"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

const experiences = [
   {
      id: 1,
      title: "Day Cruisers",
      description: "Perfect for coastal adventures and family outings",
      image: "/images/ImageWithFallback(5).png",
      delay: 0.1
   },
   {
      id: 2,
      title: "Offshore Adventures",
      description: "Built for serious fishing and exploration",
      image: "/images/ImageWithFallback(6).png",
      delay: 0.2
   },
   {
      id: 3,
      title: "Luxury at the Marina",
      description: "Sophisticated design meets premium comfort",
      image: "/images/ImageWithFallback(7).png",
      delay: 0.3
   }
];

const experienceStats = [
   {
      id: 1,
      value: "15+",
      label: "Model Variants"
   },
   {
      id: 2,
      value: "360°",
      label: "Experiences"
   },
   {
      id: 3,
      value: "∞",
      label: "Possibilities"
   }
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => (
   <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
         duration: 0.6,
         delay: experience.delay,
         ease: "easeOut"
      }}
      className="group"
   >
      <motion.div
         className="relative rounded-2xl overflow-hidden shadow-2xl h-80 sm:h-96 lg:h-[400px]"
         whileHover={{
            scale: 1.02,
            y: -8
         }}
         transition={{ duration: 0.4, ease: "easeOut" }}
      >
         <Image
            src={experience.image}
            alt={experience.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
         />

         {/* Gradient overlay */}
         <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 0.9 }}
            transition={{ duration: 0.3 }}
         />

         {/* Content overlay */}
         <motion.div
            className="absolute bottom-0 left-0 right-0 p-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: experience.delay + 0.2 }}
         >
            <motion.h3
               className="text-2xl !not-italic sm:text-3xl font-serif  font-bold mb-2"
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 0.2 }}
            >
               {experience.title}
            </motion.h3>
            <motion.p
               className="text-sm sm:text-base text-gray-300 font-medium"
               initial={{ opacity: 0.8 }}
               whileHover={{ opacity: 1 }}
               transition={{ duration: 0.2 }}
            >
               {experience.description}
            </motion.p>
         </motion.div>

         {/* Hover effect overlay */}
         <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: -100 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
         />
      </motion.div>
   </motion.div>
);

const StatCard = ({ stat, index }: { stat: typeof experienceStats[0]; index: number }) => (
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
         className="text-2xl sm:text-4xl font-serif italic font-bold text-blue-200 mb-2"
         whileHover={{ scale: 1.1, color: "#ffffff" }}
         transition={{ duration: 0.3 }}
      >
         {stat.value}
      </motion.div>
      <div className="text-xs sm:text-base text-gray-400 font-medium">
         {stat.label}
      </div>
   </motion.div>
);

export default function ExperienceSection() {
   return (
      <section className="py-24 bg-[#0B1D2C]">
         <Container>
            {/* Section Header */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="text-center mb-16"
            >
               <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-white mb-6">
                  Experience the Sea
               </h2>
               <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed lg:whitespace-nowrap">
                  Every moment aboard a Nordkapp is crafted for perfection. Discover the possibilities.
               </p>
            </motion.div>

            {/* Experience Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {experiences.map((experience, index) => (
                  <ExperienceCard key={experience.id} experience={experience} index={index} />
               ))}
            </div>

            {/* Bottom Stats Section */}
            <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="pt-12 border-t border-gray-500"
            >
               <div className="flex items-center justify-center px-4 gap-4 md:gap-8">
                  {experienceStats.map((stat, index) => (
                     <div key={stat.id} className="flex items-center">
                        <StatCard stat={stat} index={index} />
                        {index < experienceStats.length - 1 && (
                           <div className="w-px h-12 bg-gray-500 mx-4 md:mx-8"></div>
                        )}
                     </div>
                  ))}
               </div>
            </motion.div>
         </Container>
      </section>
   );
}
