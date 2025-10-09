"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Award } from 'lucide-react';
import Container from './ui/Container';

const showroomData = [
   {
      id: 1,
      icon: MapPin,
      title: "Location",
      details: [
         "Dubai Marina",
         "United Arab Emirates",
         "P.O. Box 12345"
      ]
   },
   {
      id: 2,
      icon: Calendar,
      title: "Opening Hours",
      details: [
         "Saturday - Thursday: 9:00 AM - 7:00 PM",
         "Friday: 2:00 PM - 7:00 PM",
         "Sea trials by appointment"
      ]
   },
   {
      id: 3,
      icon: Award,
      title: "Certifications",
      details: [
         "Authorized Nordkapp Dealer",
         "Marine Industry Certified",
         "ISO 9001:2015 Quality Management"
      ]
   }
];

const InfoItem = ({ item, index }: { item: typeof showroomData[0]; index: number }) => {
   const IconComponent = item.icon;

   return (
      <motion.div
         initial={{ y: 30, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
         className="mb-5"
      >
         <div className="flex items-start gap-4">
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
               className="flex-shrink-0 w-12 h-12 bg-[#0B1D2C] rounded-full flex items-center justify-center"
            >
               <IconComponent className="w-6 h-6 text-white" />
            </motion.div>

            <div className="flex-1">
               <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                  className="text-xl sm:text-2xl !not-italic font-bold text-[#0B1D2C] mb-3"
               >
                  {item.title}
               </motion.h3>

               <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
                  className="space-y-2"
               >
                  {item.details.map((detail, detailIndex) => (
                     <p key={detailIndex} className="text-gray-700 leading-relaxed">
                        {detail}
                     </p>
                  ))}
               </motion.div>
            </div>
         </div>
      </motion.div>
   );
};

export default function AboutShowroomSection() {
   return (
      <section className="py-24 bg-white overflow-x-clip">
         <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
               {/* Left Column - Text Content */}
               <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="order-2 lg:order-1"
               >
                  <motion.h2
                     initial={{ y: 30, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, ease: "easeOut" }}
                     className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#0B1D2C] mb-8 lg:mb-12 leading-tight xl:whitespace-nowrap"
                  >
                     Visit Our Marina Showroom
                  </motion.h2>

                  <div className="space-y-0 grid grid-cols-1 gap-3">
                     {showroomData.map((item, index) => (
                        <InfoItem key={item.id} item={item} index={index} />
                     ))}
                  </div>
               </motion.div>

               {/* Right Column - Image */}
               <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="order-1 lg:order-2"
               >
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     whileInView={{ scale: 1, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                     className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl group"
                  >
                     <Image
                        src="/images/big.png"
                        alt="Dubai Marina Showroom - Modern marina with boats and cruise ships"
                        width={600}
                        height={500}
                        className="w-full h-auto lg:h-[600px] object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                     />

                     {/* Subtle gradient overlay */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                  </motion.div>
               </motion.div>
            </div>
         </Container>
      </section>
   );
}
