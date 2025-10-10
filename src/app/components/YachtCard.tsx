"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Yacht } from '../types/yacht';
import Button from './ui/Button';

interface YachtCardProps {
   yacht: Yacht;
   index: number;
}

export default function YachtCard({ yacht, index }: YachtCardProps) {
   return (
      <motion.div
         initial={{ y: 20, opacity: 0, scale: 0.9, rotateX: -15 }}
         animate={{ y: 0, opacity: 1, scale: 1, rotateX: 0 }}
         transition={{
            duration: 0.4,
            delay: index * 0.05,
            type: "spring",
            stiffness: 120,
            damping: 15
         }}
         whileHover={{
            y: -8,
            scale: 1.03,
            rotateX: 2,
            transition: { duration: 0.2, type: "spring", stiffness: 300 }
         }}
         className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:shadow-[#0B1D2C]/10 transition-all duration-300 overflow-hidden group cursor-pointer"
      >
         {/* Image Container */}
         <motion.div
            className="relative h-64 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
         >
            <Image
               src={yacht.image}
               alt={yacht.name}
               fill
               className="object-cover transition-transform duration-500 group-hover:scale-110"
               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <motion.div
               className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100"
               transition={{ duration: 0.3 }}
            />
         </motion.div>

         {/* Content */}
         <motion.div
            initial={{ y: 15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
               duration: 0.3,
               delay: index * 0.05 + 0.1,
               type: "spring",
               stiffness: 100
            }}
            className="p-4 md:p-6"
         >
            {/* Title and Category Row */}
            <motion.div
               initial={{ x: -15, opacity: 0, scale: 0.95 }}
               animate={{ x: 0, opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.3,
                  delay: index * 0.05 + 0.15,
                  type: "spring",
                  stiffness: 120
               }}
               className="flex flex-col items-start gap-2 mb-4 xl:flex-row xl:items-center xl:justify-between"
            >
               <motion.h3
                  initial={{ y: 8, opacity: 0, scale: 0.9 }}
                  animate={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{
                     duration: 0.25,
                     delay: index * 0.05 + 0.2,
                     type: "spring",
                     stiffness: 150
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="text-2xl lg:text-xl xl:text-2xl font-serif font-bold !not-italic text-[#0B1D2C] flex-1"
               >
                  {yacht.name}
               </motion.h3>
               <motion.div
                  initial={{ x: 15, opacity: 0, scale: 0.8 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{
                     duration: 0.25,
                     delay: index * 0.05 + 0.25,
                     type: "spring",
                     stiffness: 150
                  }}
                  className="flex items-center"
               >
                  <motion.div
                     initial={{ scale: 0, rotate: -180 }}
                     animate={{ scale: 1, rotate: 0 }}
                     transition={{
                        duration: 0.2,
                        delay: index * 0.05 + 0.3,
                        type: "spring",
                        stiffness: 200
                     }}
                     whileHover={{ scale: 1.2, rotate: 180 }}
                     className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  ></motion.div>
                  <motion.span
                     className="text-green-600 text-sm font-medium"
                     whileHover={{ scale: 1.05 }}
                  >
                     {yacht.category}
                  </motion.span>
               </motion.div>
            </motion.div>

            {/* Specifications - Two Column Layout */}
            <motion.div
               initial={{ y: 10, opacity: 0, scale: 0.95 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.3,
                  delay: index * 0.05 + 0.3,
                  type: "spring",
                  stiffness: 100
               }}
               className="grid grid-cols-2 md:grid-cols-2 gap-x-0 md:gap-x-1 lg:gap-x-0 gap-y-2 mb-6"
            >
               {[
                  { icon: 'bg-black', label: 'Power:', value: yacht.power },
                  { icon: 'bg-cyan-500', label: 'Capacity:', value: `${yacht.capacity} guests` },
                  { icon: 'bg-orange-500', label: 'Length:', value: yacht.length },
                  { icon: 'bg-gray-400', label: 'Tank:', value: yacht.tank }
               ].map((spec, specIndex) => (
                  <motion.div
                     key={spec.label}
                     initial={{ x: -8, opacity: 0, scale: 0.9 }}
                     animate={{ x: 0, opacity: 1, scale: 1 }}
                     transition={{
                        duration: 0.2,
                        delay: index * 0.05 + 0.35 + specIndex * 0.05,
                        type: "spring",
                        stiffness: 150
                     }}
                     whileHover={{ scale: 1.02, x: 2 }}
                     className="flex items-center lg:text-xs text-xs md:text-sm xl:text-base group/spec"
                  >
                     <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                           duration: 0.15,
                           delay: index * 0.05 + 0.4 + specIndex * 0.05,
                           type: "spring",
                           stiffness: 200
                        }}
                        whileHover={{ scale: 1.3, rotate: 90 }}
                        className={`w-1.5 h-1.5 ${spec.icon} rounded-full mr-1 md:mr-3 lg:mr-2 xl:mr-3 group-hover/spec:scale-110`}
                     ></motion.div>
                     <motion.span
                        className="font-medium text-black"
                        whileHover={{ scale: 1.05 }}
                     >
                        {spec.label}
                     </motion.span>
                     <motion.span
                        className="ml-1 font-semibold text-gray-600"
                        whileHover={{ scale: 1.05 }}
                     >
                        {spec.value}
                     </motion.span>
                  </motion.div>
               ))}
            </motion.div>

            {/* Price and Button Row */}
            <motion.div
               initial={{ y: 10, opacity: 0, scale: 0.95 }}
               animate={{ y: 0, opacity: 1, scale: 1 }}
               transition={{
                  duration: 0.3,
                  delay: index * 0.05 + 0.4,
                  type: "spring",
                  stiffness: 100
               }}
               className="flex items-center justify-between"
            >
               <motion.div
                  initial={{ x: -12, opacity: 0, scale: 0.9 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{
                     duration: 0.25,
                     delay: index * 0.05 + 0.45,
                     type: "spring",
                     stiffness: 120
                  }}
                  className="flex-1"
               >
                  <motion.div
                     initial={{ scale: 0.8, opacity: 0, y: 5 }}
                     animate={{ scale: 1, opacity: 1, y: 0 }}
                     transition={{
                        duration: 0.2,
                        delay: index * 0.05 + 0.5,
                        type: "spring",
                        stiffness: 150
                     }}
                     whileHover={{
                        scale: 1.05,
                        y: -2,
                        transition: { duration: 0.2, type: "spring", stiffness: 300 }
                     }}
                     className="xl:text-2xl text-base md:text-xl lg:text-base font-bold text-[#0B1D2C] mb-1 group/price"
                  >
                     <motion.span
                        whileHover={{
                           scale: 1.02,
                           color: "#0A1A28",
                           transition: { duration: 0.15 }
                        }}
                        className="inline-block"
                     >
                        From {yacht.price}
                     </motion.span>
                  </motion.div>
                  <motion.div
                     initial={{ y: 5, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{
                        duration: 0.2,
                        delay: index * 0.05 + 0.55,
                        type: "spring",
                        stiffness: 150
                     }}
                     whileHover={{
                        scale: 1.03,
                        y: -1,
                        transition: { duration: 0.15 }
                     }}
                     className="text-sm text-gray-500 font-medium group-hover/price:text-gray-600"
                  >
                     <motion.span
                        whileHover={{
                           scale: 1.05,
                           transition: { duration: 0.1 }
                        }}
                        className="inline-block"
                     >
                        Starting price
                     </motion.span>
                  </motion.div>
               </motion.div>

               {/* View Details Button */}
               <motion.div
                  initial={{ x: 12, opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ x: 0, opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                     duration: 0.25,
                     delay: index * 0.05 + 0.6,
                     type: "spring",
                     stiffness: 120
                  }}
                  whileHover={{
                     scale: 1.08,
                     y: -3,
                     rotate: 1,
                     transition: {
                        duration: 0.15,
                        type: "spring",
                        stiffness: 400
                     }
                  }}
                  whileTap={{
                     scale: 0.92,
                     transition: { duration: 0.1 }
                  }}
               >
                  <Button
                     href={yacht.link || '#'}
                     external={true}
                     className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center whitespace-nowrap text-[10px] md:text-xs lg:text-[10px] xl:text-base hover:shadow-xl hover:shadow-[#0B1D2C]/30 group"
                  >
                     <motion.span
                        className="inline-block"
                        whileHover={{
                           x: 3,
                           scale: 1.05,
                           transition: { duration: 0.15 }
                        }}
                     >
                        VIEW DETAILS
                     </motion.span>
                  </Button>
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
