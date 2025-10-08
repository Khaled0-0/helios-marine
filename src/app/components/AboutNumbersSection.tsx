"use client";

import { motion } from 'framer-motion';
import Container from './ui/Container';

const numbersData = [
   {
      id: 1,
      number: "50+",
      description: "Years of Nordkapp Heritage"
   },
   {
      id: 2,
      number: "200+",
      description: "Happy Boat Owners"
   },
   {
      id: 3,
      number: "15+",
      description: "Model Variants Available"
   },
   {
      id: 4,
      number: "24/7",
      description: "Support Available"
   }
];

const NumberItem = ({ item, index }: { item: typeof numbersData[0]; index: number }) => (
   <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className="text-center"
   >
      <motion.div
         initial={{ scale: 0.8 }}
         whileInView={{ scale: 1 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
         className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif italic font-light text-white mb-4 lg:mb-6 tracking-wider"
         style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 300,
            letterSpacing: '0.05em'
         }}
      >
         {item.number}
      </motion.div>
      <motion.p
         initial={{ y: 20, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.5, delay: index * 0.2 + 0.5, ease: "easeOut" }}
         className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-light leading-relaxed"
      >
         {item.description}
      </motion.p>
   </motion.div>
);

export default function AboutNumbersSection() {
   return (
      <section className="py-24 bg-[#0B1D2C]">
         <Container>
            {/* Section Header */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="text-center mb-16 lg:mb-20"
            >
               <h2
                  className="font-serif italic text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 leading-tight tracking-wider"
                  style={{
                     fontFamily: 'Playfair Display, serif',
                     fontWeight: 300,
                     letterSpacing: '0.05em'
                  }}
               >
                  By the Numbers
               </h2>
               <p className="text-lg sm:text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl mx-auto">
                  Our commitment to excellence reflected in measurable achievements.
               </p>
            </motion.div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12">
               {numbersData.map((item, index) => (
                  <NumberItem key={item.id} item={item} index={index} />
               ))}
            </div>
         </Container>
      </section>
   );
}
