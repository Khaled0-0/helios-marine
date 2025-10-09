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
         initial={{ y: 30, opacity: 0, scale: 0.95 }}
         animate={{ y: 0, opacity: 1, scale: 1 }}
         transition={{ duration: 0.6, delay: index * 0.1 }}
         whileHover={{ y: -5, scale: 1.02 }}
         className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
      >
         {/* Image Container */}
         <div
            className="relative h-64 overflow-hidden">
            <Image
               src={yacht.image}
               alt={yacht.name}
               fill
               className="object-cover transition-transform duration-500"
               sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {/* Year Badge - White oval with black text */}
            <div
               className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-black shadow-sm"
            >
               {yacht.year}
            </div>
         </div>

         {/* Content */}
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            className="p-4 md:p-6"
         >
            {/* Title and Category Row */}
            <motion.div
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
               className="flex flex-col items-start gap-2 mb-4 xl:flex-row xl:items-center xl:justify-between"
            >
               <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                  className="text-2xl lg:text-xl xl:text-2xl  font-serif font-bold !not-italic text-[#0B1D2C] flex-1"
               >
                  {yacht.name}
               </motion.h3>
               <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="flex items-center"
               >
                  <motion.div
                     initial={{ scale: 0 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.3, delay: index * 0.1 + 0.7 }}
                     className="w-2 h-2 bg-green-500 rounded-full mr-2"
                  ></motion.div>
                  <span className="text-green-600 text-sm font-medium">
                     {yacht.category}
                  </span>
               </motion.div>
            </motion.div>

            {/* Specifications - Two Column Layout */}
            <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: index * 0.1 + 0.8 }}
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
                     initial={{ x: -10, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.1 + 0.9 + specIndex * 0.1 }}
                     className="flex items-center lg:text-xs text-xs md:text-sm xl:text-base"
                  >
                     <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + 1.0 + specIndex * 0.1 }}
                        className={`w-1.5 h-1.5 ${spec.icon} rounded-full mr-1 md:mr-3 lg:mr-2 xl:mr-3`}
                     ></motion.div>
                     <span className="font-medium  text-black ">{spec.label}</span>
                     <span className="ml-1 font-semibold text-gray-600 ">{spec.value}</span>
                  </motion.div>
               ))}
            </motion.div>

            {/* Price and Button Row */}
            <motion.div
               initial={{ y: 20, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: index * 0.1 + 1.2 }}
               className="flex items-center justify-between"
            >
               <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.3 }}
                  className="flex-1"
               >
                  <motion.div
                     initial={{ scale: 0.9, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.1 + 1.4 }}
                     className="xl:text-3xl text-lg md:text-xl lg:text-base font-bold text-[#0B1D2C] mb-1"
                  >
                     From {yacht.price}
                  </motion.div>
                  <motion.div
                     initial={{ y: 10, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.4, delay: index * 0.1 + 1.5 }}
                     className="text-sm text-gray-500 font-medium"
                  >
                     Starting price
                  </motion.div>
               </motion.div>

               {/* View Details Button */}
               <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 1.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
               >
                  <Button
                     href={`/boats/${yacht.id}`}
                     className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center whitespace-nowrap text-xs md:text-base lg:text-sm xl:text-lg"
                  >
                     VIEW DETAILS
                  </Button>
               </motion.div>
            </motion.div>
         </motion.div>
      </motion.div>
   );
}
