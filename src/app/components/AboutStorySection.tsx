"use client";

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Container from './ui/Container';

const timelineData = [
   {
      id: 1,
      year: "2022",
      chapter: "Chapter 1",
      title: "Founded in Dubai Marina",
      description: "Helios Marine was established with a vision to bring Scandinavian precision and Norwegian craftsmanship to the UAE.",
      detail: "Appointed as the official Nordkapp dealer in the Emirates.",
      side: "right"
   },
   {
      id: 2,
      year: "2023",
      chapter: "Chapter 2",
      title: "Expanding Across the Gulf",
      description: "We introduced Nordkapp's latest models to a growing community of marine enthusiasts across the region, setting new standards in safety, performance, and luxury.",
      detail: "Recognized for excellence at the Dubai International Boat Show.",
      side: "left"
   },
   {
      id: 3,
      year: "2025",
      chapter: "Chapter 3",
      title: "Market Leadership in Premium Yachting",
      description: "Helios continues to lead the UAE's luxury marine sector, offering tailored financing, after-sales support, and exclusive Nordkapp experiences for discerning yacht owners.",
      detail: "Launched the “Book a Sea Trial” experience to elevate customer journeys.",
      side: "right",
      special: true
   }
];

const TimelineItem = ({ item, index }: { item: typeof timelineData[0]; index: number }) => (
   <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className={`relative flex flex-col-reverse lg:flex-row items-center gap-8 lg:pt-3 lg:gap-30 mb-16 lg:mb-20 ${item.side === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'
         }`}
   >
      {/* Content Card */}
      <motion.div
         initial={{ x: item.side === 'left' ? 50 : -50, opacity: 0 }}
         whileInView={{ x: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.6, delay: index * 0.2 + 0.2, ease: "easeOut" }}
         className={`w-full lg:flex-1 text-left max-w-sm sm:max-w-2xl lg:max-w-sm xl:max-w-lg`}
      >
         <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-sm font-medium text-gray-500 mb-2">{item.chapter}</div>
            <span className="text-xl sm:text-2xl font-serif !not-italic font-semibold text-black mb-3">
               {item.title}
            </span>
            <p className="text-gray-600 leading-relaxed mb-4">
               {item.description}
            </p>
            <div className={`flex items-center text-xs text-[#0B1D2C] font-medium justify-start`}>
               <Image
                  src="/images/anchor-i.svg"
                  alt="Anchor icon"
                  width={16}
                  height={16}
                  className={`mr-2 flex-shrink-0`}
               />
               <span>{item.detail}</span>
            </div>
         </div>
      </motion.div>
      {/* Year */}
      <motion.div
         initial={{ scale: 0.8, opacity: 0 }}
         whileInView={{ scale: 1, opacity: 1 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{ duration: 0.5, delay: index * 0.2 + 0.3, ease: "easeOut" }}
         className={`flex-shrink-0 ${item.side === 'right' ? 'lg:ml-8' : 'lg:mr-8'}`}
      >
         <div className={`flex items-center gap-3 sm:gap-4 ${item.side === 'left' ? 'lg:flex-row-reverse' : 'flex-row'}`}>
            {/* create small line on the left side - only visible on small screens */}
            <div className="lg:hidden w-8 sm:w-10 h-0.5 bg-[#0B1D2C]"></div>
            <div className="text-2xl sm:text-2xl font-serif italic font-bold text-[#0B1D2C]">
               {item.year}
            </div>
            {/* create small line next to the year */}
            <div className="w-8 sm:w-10 h-0.5 bg-[#0B1D2C]"></div>
         </div>
      </motion.div>
   </motion.div>
);

export default function AboutStorySection() {

   // Trigger animation when section comes into view
   const ref = useRef(null);
   const timelineRef = useRef<HTMLDivElement>(null);
   const isInView = useInView(ref, { once: true, amount: 0.3 });

   // Calculate dynamic timeline height
   const [timelineHeight, setTimelineHeight] = useState(980);

   useEffect(() => {
      if (timelineRef.current) {
         const height = timelineRef.current.offsetHeight;
         setTimelineHeight(height - 32); // Subtract icon height (h-8 = 32px)
      }
   }, []);

   return (
      <section ref={ref} className="py-24 bg-white">
         <Container>
            {/* Section Header */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="text-center mb-16 lg:mb-20 max-w-4xl mx-auto"
            >
               <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B1D2C] mb-6 leading-tight">
                  Our Story
               </h2>
               <p className="text-lg sm:text-xl text-gray-600 text-center mx-auto leading-relaxed">
                  From humble beginnings to market leadership, our journey reflects our commitment to excellence in marine luxury.
               </p>
            </motion.div>

            {/* Timeline */}
            <div ref={timelineRef} className="relative">
               {/* Vertical Dashed Line - Hidden on mobile, visible on desktop */}
               <div
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full border-l-2 border-dashed border-gray-300"
               />

               {/* Special Icon - Auto moving from top to bottom and stop - Hidden on mobile */}
               <motion.div
                  className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 z-20"
                  animate={isInView ? {
                     y: [0, timelineHeight]
                  } : {}}
                  transition={{
                     duration: 6,
                     ease: "easeInOut",
                     delay: 0.5
                  }}
               >
                  <motion.div
                     initial={{ scale: 0, rotate: -180 }}
                     whileInView={{ scale: 1, rotate: 0 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                     className="w-8 h-8 bg-[#0B1D2C] rounded-full flex items-center justify-center"
                  >
                     <Image
                        src="/images/image18.svg"
                        alt="Special achievement icon"
                        width={20}
                        height={20}
                        className="text-white"
                     />
                  </motion.div>
               </motion.div>

               {/* Timeline Items */}
               <div className="space-y-0">
                  {timelineData.map((item, index) => (
                     <div key={item.id} className="relative">
                        {/* Timeline Dot on the middle line - Hidden on mobile */}
                        <motion.div
                           initial={{ scale: 0 }}
                           whileInView={{ scale: 1 }}
                           viewport={{ once: true, amount: 0.3 }}
                           transition={{ duration: 0.4, delay: index * 0.2 + 0.4, ease: "easeOut" }}
                           className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10"
                           style={{ top: '50%' }}
                        >
                           <div className="w-3 h-3 bg-[#0B1D2C] rounded-full" />
                        </motion.div>

                        <TimelineItem item={item} index={index} />
                     </div>
                  ))}
               </div>
            </div>
         </Container>
      </section>
   );
}