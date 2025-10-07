"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#F4F8FC]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif italic text-3xl sm:text-4xl md:text-[42px] text-[#0B1D2C] mb-6 leading-tight xl:whitespace-nowrap">
              Beyond boats, it&apos;s a lifestyle.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-3 max-w-2xl">
              Nordkapp blends power, safety, and Scandinavian elegance.
            </p>
            <p className="text-base sm:text-lg text-gray-700 mb-10 max-w-2xl">
              Every voyage becomes an experience where precision engineering meets the freedom of open waters.
            </p>

            {/* Badge */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#0B1D2C] text-white flex items-center justify-center text-sm font-semibold shadow-md">
                1966
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">Trusted in Nordic waters since 1966</div>
                <div className="text-sm text-gray-600">Over 50 years of maritime excellence</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Images collage */}
          <div className="order-1 lg:order-2">
            <div className="flex gap-[10px] h-[320px] sm:h-[400px] md:h-[480px]">
              {/* Left column - two stacked images */}
              <div className="flex flex-col gap-[10px] flex-[1.5]">
                {/* Top-left */}
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex-1"
                >
                  <motion.div
                    className="relative h-full rounded-xl overflow-hidden shadow-md border-2 border-transparent transition-all duration-500"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#0B1D2C",
                      boxShadow: "0 20px 40px rgba(11, 29, 44, 0.15)"
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Image
                      src="/images/ImageWithFallback(2).png"
                      alt="Sailing crew"
                      fill
                      className="object-cover transition-transform duration-500 ease-out"
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                      priority
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </motion.div>
                </motion.div>

                {/* Bottom-left */}
                <motion.div
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-1"
                >
                  <motion.div
                    className="relative h-full rounded-xl overflow-hidden shadow-md border-2 border-transparent transition-all duration-500"
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#0B1D2C",
                      boxShadow: "0 20px 40px rgba(11, 29, 44, 0.15)"
                    }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <Image
                      src="/images/ImageWithFallback(3).png"
                      alt="Harbor yachts"
                      fill
                      className="object-cover transition-transform duration-500 ease-out"
                      sizes="(min-width: 1024px) 260px, (min-width: 640px) 50vw, 100vw"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </motion.div>
                </motion.div>
              </div>

              {/* Right column - tall image */}
              <motion.div
                initial={{ x: 16, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex-[1.5]"
              >
                <motion.div
                  className="relative h-[180px] top-17 md:top-28 md:h-[280px] rounded-xl overflow-hidden shadow-md border-2 border-transparent transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    borderColor: "#0B1D2C",
                    boxShadow: "0 20px 40px rgba(11, 29, 44, 0.15)"
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Image
                    src="/images/ImageWithFallback(1).png"
                    alt="Sunset at sea"
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}