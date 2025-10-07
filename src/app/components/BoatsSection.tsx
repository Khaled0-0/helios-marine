"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';

const boatModels = [
  {
    id: 1,
    name: "Nordkapp 760 Sport",
    image: "/images/ImageWithFallback.png",
    specs: {
      topSpeed: "45 knots",
      length: "7.6m",
      capacity: "8 persons",
      enginePower: "300 HP"
    }
  },
  {
    id: 2,
    name: "Nordkapp 840 Sport",
    image: "/images/ImageWithFallback(1).png",
    specs: {
      topSpeed: "50 knots",
      length: "8.4m",
      capacity: "10 persons",
      enginePower: "400 HP"
    }
  },
  {
    id: 3,
    name: "Nordkapp 680 RS",
    image: "/images/ImageWithFallback(2).png",
    specs: {
      topSpeed: "42 knots",
      length: "6.8m",
      capacity: "6 persons",
      enginePower: "250 HP"
    }
  }
];

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
        <div className="text-center mb-16">
          {/* Section Header */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="font-serif italic text-4xl sm:text-5xl md:text-6xl text-[#0B1D2C] mb-6">
              Featured Models
            </h2>
            <p className="text-lg flex justify-center sm:text-xl text-gray-600 max-w-3xl mx-auto xl:whitespace-nowrap leading-relaxed">
              Discover our selection of premium Nordkapp boats, each engineered for performance and luxury.
            </p>
          </motion.div>
        </div>

        {/* Boat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {boatModels.map((boat, index) => (
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
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <Image
                    src={boat.image}
                    alt={boat.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Boat Name */}
                  <h3 className="font-serif italic text-xl font-semibold text-[#0B1D2C] mb-4">
                    {boat.name}
                  </h3>

                  {/* Specifications Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6 justify-items-start">
                    {/* Top Speed */}
                    <div className="flex items-center space-x-3">
                      <SpecIcon icon="/images/speed-i.svg" alt="Speed" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.specs.topSpeed}
                        </div>
                        <div className="text-xs text-gray-600">Top Speed</div>
                      </div>
                    </div>

                    {/* Length */}
                    <div className="flex items-center space-x-3">
                      <SpecIcon icon="/images/anchor-i.svg" alt="Length" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.specs.length}
                        </div>
                        <div className="text-xs text-gray-600">Length</div>
                      </div>
                    </div>

                    {/* Capacity */}
                    <div className="flex items-center space-x-3">
                      <SpecIcon icon="/images/persons-i.svg" alt="Capacity" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.specs.capacity}
                        </div>
                        <div className="text-xs text-gray-600">Capacity</div>
                      </div>
                    </div>

                    {/* Engine Power */}
                    <div className="flex items-center space-x-3">
                      <SpecIcon icon="/images/lightning-i.svg" alt="Engine Power" />
                      <div>
                        <div className="text-sm font-semibold text-[#0B1D2C]">
                          {boat.specs.enginePower}
                        </div>
                        <div className="text-xs text-gray-600">Engine Power</div>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      href={`/boats/${boat.id}`}
                      className="w-full bg-[#0B1D2C] hover:bg-[#0A1A28] text-white py-3 rounded-lg font-semibold transition-all duration-300"
                    >
                      View Details
                    </Button>
                  </motion.div>
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="/boats"
              className="inline-block bg-white text-[#0B1D2C] border-2 border-[#0B1D2C] hover:bg-[#0B1D2C] hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 cursor-pointer"
            >
              View All Models
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}