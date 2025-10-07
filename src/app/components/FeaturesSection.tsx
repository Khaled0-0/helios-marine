"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

const features = [
   {
      id: 1,
      title: "Authorized Dealer UAE",
      description: "Nordkapp partner offering exclusive access to the full model range and authentic Nordic heritage.",
      icon: "/images/authorized-i.svg",
      delay: 0.1
   },
   {
      id: 2,
      title: "Financing & Leasing Plans",
      description: "Tailored payment options for UAE residents. Get your dream boat at competitive rates.",
      icon: "/images/financing-i.svg",
      delay: 0.2
   },
   {
      id: 3,
      title: "Genuine Parts & Support",
      description: "Expert maintenance services and genuine Nordkapp parts to ensure your vessel runs smoothly.",
      icon: "/images/settings-i.svg",
      delay: 0.3
   }
];

const FeatureCard = ({ feature }: { feature: typeof features[0] }) => (
   <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
         duration: 0.6,
         delay: feature.delay,
         ease: "easeOut"
      }}
      className="group"
   >
      <motion.div
         className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full hover:shadow-2xl transition-all duration-500"
         whileHover={{
            y: -8,
            scale: 1.02
         }}
         transition={{ duration: 0.3, ease: "easeOut" }}
      >
         {/* Icon */}
         <motion.div
            className="w-16 h-16 bg-[#0B1D2C] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.2 }}
         >
            <Image
               src={feature.icon}
               alt={feature.title}
               width={32}
               height={32}
               className="text-white"
            />
         </motion.div>

         {/* Title */}
         <motion.h3
            className="font-serif !not-italic text-xl !font-bold text-[#0B1D2C] mb-4 text-center group-hover:text-[#0A1A28] transition-colors duration-300"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
         >
            {feature.title}
         </motion.h3>

         {/* Description */}
         <motion.p
            className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
         >
            {feature.description}
         </motion.p>

         {/* Decorative line */}
         <motion.div
            className="w-12 h-0.5 bg-[#0B1D2C] mx-auto mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
         />
      </motion.div>
   </motion.div>
);

export default function FeaturesSection() {
   return (
      <section className="py-24 bg-gray-50">
         <Container>
            {/* Section Header */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="text-center mb-16"
            >
               <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#0B1D2C] mb-6">
                  Featured Models
               </h2>
               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto xl:whitespace-nowrap leading-relaxed">
                  Your trusted partner for Nordkapp excellence in the United Arab Emirates.
               </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {features.map((feature) => (
                  <FeatureCard key={feature.id} feature={feature} />
               ))}
            </div>
         </Container>
      </section>
   );
}
