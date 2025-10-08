"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';
import Container from './ui/Container';

const quickLinks = [
  { name: 'Models', href: '/boats' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' }
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/heliosmarine',
    icon: Instagram,
    color: 'hover:text-pink-400'
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@heliosmarine',
    icon: Youtube,
    color: 'hover:text-red-400'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/heliosmarine',
    icon: Facebook,
    color: 'hover:text-blue-400'
  }
];

const SocialIcon = ({ link }: { link: typeof socialLinks[0] }) => {
  const IconComponent = link.icon;

  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative w-12 h-12 rounded-full border-2 border-gray-600 bg-gradient-to-br from-gray-800/60 to-gray-900/60 flex items-center justify-center text-white overflow-hidden transition-all bg-gray-700 duration-500 ${link.color}`}
      whileHover={{
        y: -4,
        scale: 1.1,
        rotate: 5,
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Icon with enhanced animation */}
      <motion.div
        whileHover={{
          scale: 1.2,
          rotate: -5
        }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        <IconComponent size={18} />
      </motion.div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* Border glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-400/50 to-purple-400/50 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        style={{
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "xor"
        }}
      />
    </motion.a>
  );
};

export default function Footer() {
  return (
    <footer className="bg-[#0B1D2C] text-white">
      {/* Main Footer Content */}
      <div className="border-b border-gray-700">
        <Container>
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

              {/* Left Column - Company Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-1"
              >
                {/* Company Title */}
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-serif !not-italic font-bold mb-6"
                >
                  Helios Marine
                </motion.h3>

                {/* Company Description */}
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8"
                >
                  Authorized Nordkapp dealer bringing Scandinavian excellence to UAE waters. Your gateway to premium boating experiences since 2015.
                </motion.p>

                {/* Authorized Dealer Badge */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#1d293d] rounded-lg p-4 hover:border-gray-600 transition-colors duration-300 max-w-xs"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center space-x-4">
                    {/* Logo from header */}
                    <div className="w-16 h-16 relative overflow-hidden rounded-lg flex-shrink-0">
                      <Image
                        src="/images/logo 1.png"
                        alt="Helios Marine Logo"
                        fill
                        className="object-contain"
                      />
                      {/* Shine effect overlay */}
                      <div className="shine-overlay pointer-events-none rounded-lg" aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-white !not-italic font-bold text-lg mb-1">Authorized Dealer</h4>
                      <p className="text-gray-300 text-sm">Nordkapp UAE</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Middle Column - Quick Links */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1 xl:ml-30 lg:ml-20"
              >
                <motion.h4
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-xl font-semibold mb-6 !not-italic"
                >
                  Quick Links
                </motion.h4>

                <motion.nav
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="space-y-3"
                >
                  {quickLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group !not-italic"
                      >
                        <motion.span
                          className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"
                          whileHover={{ scale: 1.2 }}
                        />
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </motion.nav>
              </motion.div>

              {/* Right Column - Contact Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:col-span-1 xl:ml-30 lg:ml-20"
              >
                <motion.h4
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-xl font-semibold mb-6 !not-italic"
                >
                  Contact
                </motion.h4>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="space-y-4"
                >
                  {/* Location */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    className="flex items-start space-x-3"
                  >
                    <MapPin size={20} className="text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-300 text-sm">Dubai Marina</p>
                      <p className="text-gray-400 text-xs">United Arab Emirates</p>
                    </div>
                  </motion.div>

                  {/* Phone */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                    className="flex items-center space-x-3"
                  >
                    <Phone size={20} className="text-gray-400 flex-shrink-0" />
                    <a
                      href="tel:+9714XXXXXXX"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      +971 4 XXX XXXX
                    </a>
                  </motion.div>

                  {/* Email */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.8 }}
                    className="flex items-center space-x-3"
                  >
                    <Mail size={20} className="text-gray-400 flex-shrink-0" />
                    <a
                      href="mailto:info@heliosmarine.ae"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      info@heliosmarine.ae
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="py-8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">

            {/* Social Media Icons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{
                    y: 30,
                    opacity: 0,
                    scale: 0.8,
                    rotate: -10
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.15,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <SocialIcon link={link} />
                </motion.div>
              ))}
            </motion.div>

            {/* Copyright */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center sm:text-right"
            >
              <p className="text-gray-400 text-sm mb-1">
                © 2024 Helios Marine. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs">
                Authorized Nordkapp dealer in the United Arab Emirates
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
    </footer>
  );
}