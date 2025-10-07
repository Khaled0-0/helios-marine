"use client";

import { motion } from 'framer-motion';
import Container from './ui/Container';

const contactInfo = [
   {
      id: 1,
      heading: "Call us directly",
      detail: "+971 4 XXX XXXX"
   },
   {
      id: 2,
      heading: "Visit our showroom",
      detail: "Dubai Marina"
   },
   {
      id: 3,
      heading: "Email us",
      detail: "info@heliosmarine.ae"
   }
];

const ContactInfoCard = ({ info, index }: { info: typeof contactInfo[0]; index: number }) => (
   <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
         duration: 0.6,
         delay: index * 0.1 + 0.4,
         ease: "easeOut"
      }}
      className="text-center"
   >
      <motion.div
         className="text-sm sm:text-base text-gray-300 mb-2 font-medium"
         whileHover={{ color: "#ffffff" }}
         transition={{ duration: 0.2 }}
      >
         {info.heading}
      </motion.div>
      <motion.div
         className="text-base sm:text-lg text-white font-semibold"
         whileHover={{ scale: 1.05 }}
         transition={{ duration: 0.2 }}
      >
         {info.detail}
      </motion.div>
   </motion.div>
);

export default function ContactSection() {
   return (
      <section className="py-24 bg-[#0B1D2C]">
         <Container>
            {/* Main Content */}
            <div className="text-center text-white">
               {/* Headline */}
               <div className="text-center">
                  <motion.h2
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-2 leading-tight"
                  >
                     Your Journey
                  </motion.h2>
                  <motion.h2
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-6 sm:mb-8 leading-tight"
                  >
                     Begins on the Water.
                  </motion.h2>
               </div>

               {/* Description */}
               <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"
               >
                  Experience the pinnacle of Scandinavian boat engineering. Schedule your private consultation today.
               </motion.p>

               {/* CTA Buttons */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20"
               >
                  <motion.div
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <a
                        href="/boats"
                        className="inline-block bg-white text-[#0B1D2C] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-w-60"
                     >
                        Explore Models
                     </a>
                  </motion.div>
                  <motion.div
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <a
                        href="/contact"
                        className="inline-block bg-white text-[#0B1D2C] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl min-w-60"
                     >
                        Book Consultation
                     </a>
                  </motion.div>
               </motion.div>

               {/* Divider Line */}
               <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 1, delay: 1 }}
                  className="w-full max-w-4xl mx-auto mb-12 sm:mb-16"
               >
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
               </motion.div>

               {/* Contact Information */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12"
               >
                  {contactInfo.map((info, index) => (
                     <ContactInfoCard key={info.id} info={info} index={index} />
                  ))}
               </motion.div>
            </div>
         </Container>
      </section>
   );
}
