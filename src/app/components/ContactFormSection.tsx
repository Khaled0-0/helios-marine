"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, EmailIcon, MapPinIcon, ClockIcon, WhatsAppIcon, SendIcon } from './ui/Icons';
import Container from './ui/Container';

interface FormData {
   title: string;
   fullName: string;
   email: string;
   phone: string;
   contactMethod: string;
   message: string;
}

const ContactFormSection = () => {
   const [formData, setFormData] = useState<FormData>({
      title: '',
      fullName: '',
      email: '',
      phone: '',
      contactMethod: '',
      message: ''
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
   const [isTitleOpen, setIsTitleOpen] = useState(false);
   const [isContactMethodOpen, setIsContactMethodOpen] = useState(false);
   const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({});

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));

      // Clear validation error when user starts typing
      if (validationErrors[name]) {
         setValidationErrors(prev => ({
            ...prev,
            [name]: ''
         }));
      }
   };

   const handleSelectChange = (name: string, value: string) => {
      setFormData(prev => ({
         ...prev,
         [name]: value
      }));
      // Clear validation error when user selects an option
      if (validationErrors[name]) {
         setValidationErrors(prev => ({
            ...prev,
            [name]: ''
         }));
      }
   };

   const validateForm = () => {
      const errors: { [key: string]: string } = {};

      if (!formData.fullName.trim()) {
         errors.fullName = 'Full name is required';
      }
      if (!formData.email.trim()) {
         errors.email = 'Email address is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
         errors.email = 'Please enter a valid email address';
      }
      if (!formData.phone.trim()) {
         errors.phone = 'Phone number is required';
      }
      if (!formData.contactMethod.trim()) {
         errors.contactMethod = 'Preferred contact method is required';
      }
      if (!formData.message.trim()) {
         errors.message = 'Message is required';
      }

      setValidationErrors(errors);
      return Object.keys(errors).length === 0;
   };

   const titleOptions = ['Mr', 'Mrs', 'Ms', 'Dr'];
   const contactMethodOptions = ['Email', 'Phone Call', 'WhatsApp'];

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form before submission
      if (!validateForm()) {
         return;
      }

      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
         const response = await fetch('https://formspree.io/f/mgvnnknq', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            setSubmitStatus('success');
            setFormData({
               title: '',
               fullName: '',
               email: '',
               phone: '',
               contactMethod: '',
               message: ''
            });
         } else {
            setSubmitStatus('error');
         }
      } catch {
         setSubmitStatus('error');
      } finally {
         setIsSubmitting(false);
      }
   };

   const handleWhatsAppClick = () => {
      const message = `Hello! I'm interested in Nordkapp yachts and would like to know more.`;
      const whatsappUrl = `https://wa.me/97141234567?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
   };

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
         }
      }
   };

   const itemVariants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
   };

   return (
      <section className=" md:pt-36 pb-16 pt-26   bg-white">
         <Container>
            {/* Hero Section */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true, amount: 0.3 }}
               transition={{ duration: 0.8 }}
               className="text-center mb-12"
            >
               <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-serif text-[#0B1D2C] mb-4"
               >
                  Contact Helios Marine
               </motion.h1>
               <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg text-gray-600 max-w-2xl mx-auto"
               >
                  Ready to explore the world of Nordkapp yachts? Get in touch with our expert team for personalized assistance and exclusive insights.
               </motion.p>
            </motion.div>

            {/* Main Content */}
            <motion.div
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.3 }}
               className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            >
               {/* Contact Form */}
               <motion.div
                  variants={itemVariants}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="bg-gray-50 rounded-2xl shadow-lg p-8 lg:col-span-2"
               >
                  <motion.h2
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="text-2xl font-semibold text-[#0B1D2C] mb-6"
                  >
                     Send us a Message
                  </motion.h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                     {/* Title and Full Name Row */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
                           <motion.label
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                              className="block text-sm font-semibold text-gray-800 mb-2"
                           >
                              Title
                           </motion.label>
                           <div className="relative">
                              <motion.button
                                 type="button"
                                 whileHover={{ scale: 1.02, y: -1 }}
                                 whileTap={{ scale: 0.98 }}
                                 whileFocus={{ scale: 1.02, y: -1 }}
                                 onClick={() => setIsTitleOpen(!isTitleOpen)}
                                 className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                              >
                                 <span className="text-gray-900 text-sm">{formData.title || 'Select title'}</span>
                                 <motion.svg
                                    animate={{ rotate: isTitleOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-4 h-4 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                 >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                 </motion.svg>
                              </motion.button>

                              <AnimatePresence>
                                 {isTitleOpen && (
                                    <motion.div
                                       initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                       animate={{ opacity: 1, y: 0, scale: 1 }}
                                       exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                       transition={{ duration: 0.2 }}
                                       className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                                    >
                                       {titleOptions.map((option, index) => (
                                          <motion.button
                                             key={option}
                                             initial={{ opacity: 0, x: -10, y: -5 }}
                                             animate={{ opacity: 1, x: 0, y: 0 }}
                                             exit={{ opacity: 0, x: -10, y: -5 }}
                                             transition={{ duration: 0.2, delay: index * 0.05 }}
                                             whileHover={{ scale: 1.02, x: 5 }}
                                             whileTap={{ scale: 0.98 }}
                                             onClick={() => {
                                                handleSelectChange('title', option);
                                                setIsTitleOpen(false);
                                             }}
                                             className={`w-full px-4 py-3 text-left first:rounded-t-lg cursor-pointer last:rounded-b-lg transition-colors duration-200 ${formData.title === option
                                                ? 'bg-[#0B1D2C] text-white'
                                                : 'text-[#0B1D2C] hover:bg-gray-100'
                                                }`}
                                          >
                                             {option}
                                          </motion.button>
                                       ))}
                                    </motion.div>
                                 )}
                              </AnimatePresence>
                           </div>
                        </motion.div>

                        <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
                           <motion.label
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="block text-sm font-semibold text-gray-800 mb-2"
                           >
                              Full Name *
                           </motion.label>
                           <motion.div
                              whileHover={{ scale: 1.01 }}
                              className="relative"
                           >
                              <motion.input
                                 type="text"
                                 name="fullName"
                                 value={formData.fullName}
                                 onChange={handleInputChange}
                                 placeholder="Your full name"
                                 whileFocus={{ scale: 1.02 }}
                                 className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:outline-none transition-all duration-200 text-gray-900 bg-white placeholder-gray-400 text-sm ${validationErrors.fullName ? 'border-red-500' : 'border-gray-300'
                                    }`}
                              />
                           </motion.div>
                           <AnimatePresence>
                              {validationErrors.fullName && (
                                 <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-1 text-sm text-red-600"
                                 >
                                    {validationErrors.fullName}
                                 </motion.p>
                              )}
                           </AnimatePresence>
                        </motion.div>
                     </div>

                     {/* Email and Phone Row */}
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
                           <motion.label
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                              className="block text-sm font-semibold text-gray-800 mb-2"
                           >
                              Email Address *
                           </motion.label>
                           <motion.input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your.email@example.com"
                              whileFocus={{ scale: 1.02 }}
                              whileHover={{ scale: 1.01 }}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:outline-none transition-all duration-200 text-gray-900 bg-white placeholder-gray-400 text-sm ${validationErrors.email ? 'border-red-500' : 'border-gray-300'
                                 }`}
                           />
                           <AnimatePresence>
                              {validationErrors.email && (
                                 <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-1 text-sm text-red-600"
                                 >
                                    {validationErrors.email}
                                 </motion.p>
                              )}
                           </AnimatePresence>
                        </motion.div>

                        <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }}>
                           <motion.label
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.4 }}
                              className="block text-sm font-semibold text-gray-800 mb-2"
                           >
                              Phone Number *
                           </motion.label>
                           <motion.input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+971 50 123 4567"
                              whileFocus={{ scale: 1.02 }}
                              whileHover={{ scale: 1.01 }}
                              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:outline-none transition-all duration-200 text-gray-900 bg-white placeholder-gray-400 text-sm ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                                 }`}
                           />
                           <AnimatePresence>
                              {validationErrors.phone && (
                                 <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-1 text-sm text-red-600"
                                 >
                                    {validationErrors.phone}
                                 </motion.p>
                              )}
                           </AnimatePresence>
                        </motion.div>
                     </div>

                     {/* Preferred Contact Method */}
                     <motion.div variants={itemVariants}>
                        <motion.label
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.5 }}
                           className="block text-sm font-semibold text-gray-800 mb-2"
                        >
                           Preferred Contact Method *
                        </motion.label>
                        <div className="relative">
                           <motion.button
                              type="button"
                              whileHover={{ scale: 1.02, y: -1 }}
                              whileTap={{ scale: 0.98 }}
                              whileFocus={{ scale: 1.02, y: -1 }}
                              onClick={() => setIsContactMethodOpen(!isContactMethodOpen)}
                              className={`w-full bg-white border rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer ${validationErrors.contactMethod ? 'border-red-500' : 'border-gray-300'
                                 }`}
                           >
                              <span className="text-gray-900 text-sm">{formData.contactMethod || 'How would you like us to contact you?'}</span>
                              <motion.svg
                                 animate={{ rotate: isContactMethodOpen ? 180 : 0 }}
                                 transition={{ duration: 0.3 }}
                                 className="w-4 h-4 text-gray-500"
                                 fill="none"
                                 stroke="currentColor"
                                 viewBox="0 0 24 24"
                              >
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </motion.svg>
                           </motion.button>

                           <AnimatePresence>
                              {isContactMethodOpen && (
                                 <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                                 >
                                    {contactMethodOptions.map((option, index) => (
                                       <motion.button
                                          key={option}
                                          initial={{ opacity: 0, x: -10, y: -5 }}
                                          animate={{ opacity: 1, x: 0, y: 0 }}
                                          exit={{ opacity: 0, x: -10, y: -5 }}
                                          transition={{ duration: 0.2, delay: index * 0.05 }}
                                          whileHover={{ scale: 1.02, x: 5 }}
                                          whileTap={{ scale: 0.98 }}
                                          onClick={() => {
                                             handleSelectChange('contactMethod', option);
                                             setIsContactMethodOpen(false);
                                          }}
                                          className={`w-full px-4 py-3 text-left first:rounded-t-lg cursor-pointer last:rounded-b-lg transition-colors duration-200 ${formData.contactMethod === option
                                             ? 'bg-[#0B1D2C] text-white'
                                             : 'text-[#0B1D2C] hover:bg-gray-100'
                                             }`}
                                       >
                                          {option}
                                       </motion.button>
                                    ))}
                                 </motion.div>
                              )}
                           </AnimatePresence>
                        </div>
                        <AnimatePresence>
                           {validationErrors.contactMethod && (
                              <motion.p
                                 initial={{ opacity: 0, y: -10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: -10 }}
                                 transition={{ duration: 0.3 }}
                                 className="mt-1 text-sm text-red-600"
                              >
                                 {validationErrors.contactMethod}
                              </motion.p>
                           )}
                        </AnimatePresence>
                     </motion.div>

                     {/* Message */}
                     <motion.div variants={itemVariants}>
                        <motion.label
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.6 }}
                           className="block text-sm font-semibold text-gray-800 mb-2"
                        >
                           Message *
                        </motion.label>
                        <motion.textarea
                           name="message"
                           value={formData.message}
                           onChange={handleInputChange}
                           rows={4}
                           placeholder="Tell us about your interest in Nordkapp yachts, specific models you&apos;d like to know about, or any questions you have..."
                           whileFocus={{ scale: 1.02 }}
                           whileHover={{ scale: 1.01 }}
                           className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-300 focus:outline-none transition-all duration-200 resize-none text-gray-900 bg-white placeholder-gray-400 text-sm ${validationErrors.message ? 'border-red-500' : 'border-gray-300'
                              }`}
                        />
                        <AnimatePresence>
                           {validationErrors.message && (
                              <motion.p
                                 initial={{ opacity: 0, y: -10 }}
                                 animate={{ opacity: 1, y: 0 }}
                                 exit={{ opacity: 0, y: -10 }}
                                 transition={{ duration: 0.3 }}
                                 className="mt-1 text-sm text-red-600"
                              >
                                 {validationErrors.message}
                              </motion.p>
                           )}
                        </AnimatePresence>
                     </motion.div>

                     {/* Submit Buttons */}
                     <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                           type="submit"
                           disabled={isSubmitting}
                           whileHover={{ scale: 1.02, y: -2 }}
                           whileTap={{ scale: 0.98 }}
                           className="flex items-center justify-center gap-2 bg-[#0B1D2C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0A1A28] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer group"
                        >
                           {isSubmitting ? (
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                           ) : (
                              <>
                                 <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    className="group-hover:rotate-360 group-hover:scale-110 transition-transform duration-600"
                                 >
                                    <SendIcon size={20} />
                                 </motion.div>
                                 SEND MESSAGE
                              </>
                           )}
                        </motion.button>

                        <motion.button
                           type="button"
                           onClick={handleWhatsAppClick}
                           whileHover={{ scale: 1.02, y: -2 }}
                           whileTap={{ scale: 0.98 }}
                           className="flex items-center justify-center gap-2 border-2 border-green-500 text-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 cursor-pointer group"
                        >
                           <motion.div
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="group-hover:rotate-360 transition-transform duration-600"
                           >
                              <WhatsAppIcon size={20} />
                           </motion.div>
                           WhatsApp US
                        </motion.button>
                     </motion.div>

                     {/* Status Messages */}
                     {submitStatus === 'success' && (
                        <motion.div
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700"
                        >
                           Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                        </motion.div>
                     )}

                     {submitStatus === 'error' && (
                        <motion.div
                           initial={{ opacity: 0, y: 10 }}
                           animate={{ opacity: 1, y: 0 }}
                           className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700"
                        >
                           Sorry, there was an error sending your message. Please try again or contact us directly.
                        </motion.div>
                     )}
                  </form>
               </motion.div>

               {/* Contact Information Sidebar */}
               <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: "easeOut" }} className="space-y-6 lg:col-span-1">
                  {/* Get in Touch Card */}
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.3 }}
                     className="bg-gray-50 rounded-2xl shadow-lg p-8"
                  >
                     <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="text-2xl font-semibold text-[#0B1D2C] mb-6"
                     >
                        Get in Touch
                     </motion.h2>

                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="space-y-4"
                     >
                        <motion.div
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.6 }}
                           whileHover={{ x: 5, scale: 1.02 }}
                           className="flex items-center gap-3 text-gray-700 cursor-pointer group"
                        >
                           <motion.div
                              animate={{ rotate: 0 }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="group-hover:rotate-360 transition-transform duration-600"
                           >
                              <PhoneIcon size={20} className="text-[#0B1D2C]" />
                           </motion.div>
                           <motion.span
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                              className="group-hover:translate-x-0.5 transition-transform duration-200"
                           >
                              +971 4 123 4567
                           </motion.span>
                        </motion.div>

                        <motion.div
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.7 }}
                           whileHover={{ x: 5, scale: 1.02 }}
                           className="flex items-center gap-3 text-gray-700 cursor-pointer group"
                        >
                           <motion.div
                              animate={{ rotate: 0 }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="group-hover:rotate-360 transition-transform duration-600"
                           >
                              <EmailIcon size={20} className="text-[#0B1D2C]" />
                           </motion.div>
                           <motion.span
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                              className="group-hover:translate-x-0.5 transition-transform duration-200"
                           >
                              info@heliosmarine.ae
                           </motion.span>
                        </motion.div>

                        <motion.div
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.8 }}
                           whileHover={{ x: 5, scale: 1.02 }}
                           className="flex items-center gap-3 text-gray-700 cursor-pointer group"
                        >
                           <motion.div
                              animate={{ rotate: 0 }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="group-hover:rotate-360 transition-transform duration-600"
                           >
                              <MapPinIcon size={20} className="text-[#0B1D2C]" />
                           </motion.div>
                           <motion.span
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                              className="group-hover:translate-x-0.5 transition-transform duration-200"
                           >
                              Dubai Marina, UAE, P.O. Box 12345
                           </motion.span>
                        </motion.div>

                        <motion.div
                           initial={{ x: -20, opacity: 0 }}
                           animate={{ x: 0, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.9 }}
                           whileHover={{ x: 5, scale: 1.02 }}
                           className="flex items-center gap-3 text-gray-700 cursor-pointer group"
                        >
                           <motion.div
                              animate={{ rotate: 0 }}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className="group-hover:rotate-360 transition-transform duration-600"
                           >
                              <ClockIcon size={20} className="text-[#0B1D2C]" />
                           </motion.div>
                           <motion.div
                              whileHover={{ x: 2 }}
                              transition={{ duration: 0.2 }}
                              className="group-hover:translate-x-0.5 transition-transform duration-200"
                           >
                              <div>Mon-Sat: 9:00 AM - 7:00 PM</div>
                              <div>Sun: 10:00 AM - 6:00 PM</div>
                           </motion.div>
                        </motion.div>
                     </motion.div>

                     <motion.button
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.0 }}
                        onClick={handleWhatsAppClick}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full mt-6 flex items-center justify-center gap-2 border-2 border-green-500 text-green-500 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-200 cursor-pointer group"
                     >
                        <motion.div
                           whileHover={{ rotate: 360 }}
                           transition={{ duration: 0.6 }}
                           className="group-hover:rotate-360 transition-transform duration-600"
                        >
                           <WhatsAppIcon size={20} />
                        </motion.div>
                        WhatsApp US
                     </motion.button>
                  </motion.div>

                  {/* Visit Our Showroom Card */}
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                     whileHover={{ y: -5, scale: 1.02 }}
                     className="bg-[#0B1D2C] rounded-2xl shadow-lg p-8 text-white"
                  >
                     <motion.h2
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        className="text-2xl font-semibold mb-4"
                     >
                        Visit Our Showroom
                     </motion.h2>
                     <motion.p
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        className="text-gray-300 mb-6"
                     >
                        Experience Nordkapp yachts up close at our Dubai Marina location. Private viewings and sea trials available by appointment.
                     </motion.p>
                     <motion.button
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-white text-[#0B1D2C] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 cursor-pointer"
                     >
                        Schedule Showroom Visit
                     </motion.button>
                  </motion.div>
               </motion.div>
            </motion.div>
         </Container>
      </section>
   );
};

export default ContactFormSection;
