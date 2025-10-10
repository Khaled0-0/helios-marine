"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import { yachts } from '../data/yachts';

// Get the first 3 featured boats for the homepage
const featuredBoats = yachts.slice(0, 3);

const SpecIcon = ({ icon, alt }: { icon: string; alt: string }) => (
  <div className="w-4 h-4 flex items-center justify-center">
    <Image
      src={icon}
      alt={alt}
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
);

export default function BoatsSection() {
  return (
    <section className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#0B1D2C] mb-4 sm:mb-6">
            Featured Models
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-gray-600 mx-auto leading-relaxed px-4 sm:px-0">
            Discover our selection of premium Nordkapp boats, each engineered for performance and luxury.
          </p>
        </motion.div>

        {/* Boat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {featuredBoats.map((boat, index) => (
            <motion.div
              key={boat.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="group"
            >
              <motion.div
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500"
                whileHover={{
                  y: -8,
                  scale: 1.02
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                {/* Boat Image */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-6">
                  {/* Boat Name */}
                  <h3 className="font-serif italic text-lg sm:text-xl font-semibold text-[#0B1D2C] mb-3 sm:mb-4">
                    {boat.name}
                  </h3>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 justify-items-start">
                    {/* Power */}
                    <div className="flex items-center space-x-3">
                      <SpecIcon icon="/images/lightning-i.svg" alt="Power" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.power}
                        </div>
                        <div className="text-xs text-gray-600">Power</div>
                      </div>
                    </div>

                    {/* Length */}
                    <div className="flex items-center space-x-3 ml-7">
                      <SpecIcon icon="/images/anchor-i.svg" alt="Length" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.length} FT
                        </div>
                        <div className="text-xs text-gray-600">Length</div>
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="flex items-center space-x-3">
                      <SpecIcon icon="/images/persons-i.svg" alt="Capacity" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.capacity} guests
                        </div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                    </div>

                    {/* Tank */}
                    <div className="flex items-center space-x-3 ml-7">
                      <SpecIcon icon="/images/speed-i.svg" alt="Tank" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.tank}
                        </div>
                        <div className="text-xs text-gray-600">Tank</div>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button
                    href={boat.link || '#'}
                    external={true}
                    className="w-full bg-[#0B1D2C] hover:bg-[#0A1A28] text-white py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    View Details
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View All Models Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -2,
              transition: { duration: 0.2, type: "spring", stiffness: 300 }
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
            className='w-fit mx-auto'
          >
            <Button
              href="/boats"
              className="bg-black text-white border-2 border-[#0B1D2C] px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#0B1D2C]/25 group"
            >
              <motion.span
                className="inline-block group-hover:translate-x-1 transition-transform duration-150"
              >
                View All Models
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}