"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

const testimonials = [
   {
      id: 1,
      name: "Ahmed Al-Mansouri",
      title: "Dubai Business Owner",
      quote: "The Nordkapp 840 has transformed our family weekends. The build quality is exceptional, and Helios Marine's service is unparalleled.",
      avatar: "/images/ahmed-i.png",
      delay: 0.1
   },
   {
      id: 2,
      name: "Sarah Mitchell",
      title: "Fishing Enthusiast",
      quote: "Three years with my Nordkapp 760, and it still feels like the first day. Perfect for Gulf waters and offshore adventures.",
      avatar: "/images/sara-i.png",
      delay: 0.2
   },
   {
      id: 3,
      name: "Captain Mohammed",
      title: "Charter Operator",
      quote: "Professional grade engineering meets luxury comfort. My clients always ask about the boat-it's a Nordkapp difference.",
      avatar: "/images/mohamed-i.png",
      delay: 0.3
   }
];

const stats = [
   {
      id: 1,
      icon: "/images/start-i.svg",
      value: "4.9/5",
      label: "Customer Rating"
   },
   {
      id: 2,
      value: "200+",
      label: "Happy Owners in UAE"
   },
   {
      id: 3,
      value: "95%",
      label: "Recommend to Friends"
   }
];

const StarRating = () => (
   <div className="flex space-x-1 mb-4">
      {[...Array(5)].map((_, i) => (
         <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            whileHover={{ scale: 1.2, rotate: 10 }}
            className="w-5 h-5"
         >
            <svg
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="text-yellow-400"
            >
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
         </motion.div>
      ))}
   </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
   <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
         duration: 0.6,
         delay: testimonial.delay,
         ease: "easeOut"
      }}
      className="group"
   >
      <motion.div
         className="bg-white rounded-xl p-6 shadow-lg h-full flex flex-col"
         whileHover={{
            y: -8,
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
         }}
         transition={{ duration: 0.3, ease: "easeOut" }}
      >
         {/* Star Rating */}
         <StarRating />

         {/* Quote */}
         <motion.blockquote
            className="text-gray-700 text-base leading-relaxed mb-6 flex-1"
            initial={{ opacity: 0.8 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
         >
            &ldquo;{testimonial.quote}&rdquo;
         </motion.blockquote>

         {/* Author Info */}
         <motion.div
            className="flex items-center"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: testimonial.delay + 0.3 }}
         >
            <motion.div
               className="w-12 h-12 rounded-full overflow-hidden mr-4 flex-shrink-0"
               whileHover={{ scale: 1.1 }}
               transition={{ duration: 0.2 }}
            >
               <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
               />
            </motion.div>
            <div className="flex flex-col gap-1">
               <motion.h4
                  className="font-semibold text-gray-900 text-sm !not-italic"
                  whileHover={{ color: "#0B1D2C" }}
                  transition={{ duration: 0.2 }}
               >
                  {testimonial.name}
               </motion.h4>
               <p className="text-gray-500 text-xs">
                  {testimonial.title}
               </p>
            </div>
         </motion.div>
      </motion.div>
   </motion.div>
);

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => (
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
         className="flex items-center justify-center mb-2"
         whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.2 }}
      >
         {stat.icon && (
            <svg
               width="20"
               height="20"
               viewBox="0 0 24 24"
               fill="currentColor"
               className="text-yellow-400 mr-2"
            >
               <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
         )}
         <span className="text-base sm:text-lg font-bold text-gray-800">
            {stat.value}
         </span>
      </motion.div>
      <div className="text-xs md:text-sm text-gray-600 font-medium">
         {stat.label}
      </div>
   </motion.div>
);

export default function TestimonialsSection() {
   return (
      <section className="py-24 bg-blue-50">
         <Container>
            {/* Section Header */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.6, ease: "easeOut" }}
               className="text-center mb-16"
            >
               <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-gray-800 mb-6">
                  Voices from the Water
               </h2>
               <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Hear from Nordkapp owners who&apos;ve made the Gulf their playground.
               </p>
            </motion.div>

            {/* Testimonial Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
               {testimonials.map((testimonial) => (
                  <TestimonialCard key={testimonial.id} testimonial={testimonial} />
               ))}
            </div>

            {/* Bottom Stats Section */}
            <motion.div
               initial={{ y: 50, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="pt-12 border-t border-gray-300"
            >
               <div className="flex items-center justify-center md:px-4 gap-1 md:gap-8">
                  {stats.map((stat, index) => (
                     <div key={stat.id} className="flex items-center">
                        <StatCard stat={stat} index={index} />
                        {index < stats.length - 1 && (
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
