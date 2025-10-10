"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Container from './ui/Container';
import { ChevronDownIcon } from './ui/Icons';

const faqData = [
   {
      id: 1,
      question: "What financing options are available for Nordkapp boats?",
      answer: "We offer flexible financing solutions including traditional boat loans, leasing options, and custom payment plans. Our financing partners provide competitive rates with terms ranging from 5-20 years. Contact our financing team to discuss options tailored to your budget and requirements."
   },
   {
      id: 2,
      question: "How long is the warranty period for new Nordkapp boats?",
      answer: "All new Nordkapp boats come with a comprehensive 5-year warranty covering structural components, engine systems, and manufacturing defects. We also provide extended warranty options for additional peace of mind. Our authorized service centers ensure all warranty work is performed to Nordkapp standards."
   },
   {
      id: 3,
      question: "Do you provide boat maintenance and servicing?",
      answer: "Yes, we offer comprehensive maintenance and servicing for all Nordkapp boats. Our certified technicians provide regular maintenance, seasonal servicing, emergency repairs, and performance optimization. We maintain genuine Nordkapp parts inventory and follow manufacturer specifications for all service work."
   }
];

const FAQItem = ({ faq, index }: { faq: typeof faqData[0]; index: number }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
      <motion.div
         initial={{ y: 30, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true, amount: 0.3 }}
         transition={{
            duration: 0.6,
            delay: index * 0.1,
            ease: "easeOut"
         }}
         className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-6 last:mb-0"
      >
         <motion.button
            onClick={toggleOpen}
            className="w-full py-6 px-4 sm:px-6 text-left flex items-center justify-between group hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
            whileHover={{ backgroundColor: "#f9fafb" }}
            whileTap={{ scale: 0.98 }}
         >
            <motion.h3
               className="text-base sm:text-lg md:text-xl font-medium text-gray-900 pr-4 leading-relaxed cursor-pointer !not-italic"
               layout
            >
               {faq.question}
            </motion.h3>

            <motion.div
               className="flex-shrink-0 ml-4"
               animate={{ rotate: isOpen ? 180 : 0 }}
               transition={{ duration: 0.3, ease: "easeInOut" }}
            >
               <ChevronDownIcon
                  size={24}
                  className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200 cursor-pointer"
               />
            </motion.div>
         </motion.button>

         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                     duration: 0.4,
                     ease: [0.4, 0, 0.2, 1],
                     opacity: { duration: 0.3 }
                  }}
                  className="overflow-hidden"
               >
                  <motion.div
                     initial={{ y: -10 }}
                     animate={{ y: 0 }}
                     exit={{ y: -10 }}
                     transition={{ duration: 0.3, delay: 0.1 }}
                     className="px-4 sm:px-6 pb-6"
                  >
                     <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                        {faq.answer}
                     </p>
                  </motion.div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.div>
   );
};

export default function FAQSection() {
   return (
      <section className="py-24 bg-white">
         <Container>
            <div className="max-w-4xl mx-auto">
               {/* Section Header */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center mb-12 sm:mb-16 cursor-pointer"
               >
                  <motion.h2
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B1D2C] mb-4 sm:mb-6 leading-tight cursor-pointer"
                  >
                     Frequently Asked Questions
                  </motion.h2>

                  <motion.p
                     initial={{ y: 20, opacity: 0 }}
                     whileInView={{ y: 0, opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto cursor-pointer"
                  >
                     Quick answers to help you get started with your Nordkapp journey.
                  </motion.p>
               </motion.div>

               {/* FAQ Items */}
               <div className="space-y-6">
                  {faqData.map((faq, index) => (
                     <FAQItem key={faq.id} faq={faq} index={index} />
                  ))}
               </div>

               {/* Additional CTA */}
               <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-center mt-12 sm:mt-16"
               >
                  <motion.p
                     className="text-base sm:text-lg text-gray-600 mb-6"
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true, amount: 0.3 }}
                     transition={{ duration: 0.6, delay: 1 }}
                  >
                     Still have questions? We&apos;re here to help.
                  </motion.p>

                  <motion.div
                     whileHover={{ scale: 1.05, y: -2 }}
                     whileTap={{ scale: 0.95 }}
                     transition={{ duration: 0.2 }}
                  >
                     <Link
                        href="/contact"
                        className="inline-block bg-[#0B1D2C] hover:bg-[#0A1A28] text-white px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                     >
                        Contact Us
                     </Link>
                  </motion.div>
               </motion.div>
            </div>
         </Container>
      </section>
   );
}
