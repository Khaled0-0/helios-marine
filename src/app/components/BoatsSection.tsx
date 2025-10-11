"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './ui/Container';
import Button from './ui/Button';
import { yachts } from '../data/yachts';

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

// Optimized boat card component with guaranteed visibility
interface BoatCardProps {
  boat: typeof yachts[0];
  index: number;
  isVisible: boolean;
}

const BoatCard = ({ boat, index, isVisible }: BoatCardProps) => {
  return (
    <motion.div
      key={`boat-${boat.id}`}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0.8,
        y: 0,
        scale: isVisible ? 1 : 0.98
      }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 20
      }}
      className="group"
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:shadow-[#0B1D2C]/10 transition-all duration-500"
        whileHover={{
          y: -8,
          scale: 1.03,
          transition: { duration: 0.2, type: "spring", stiffness: 300 }
        }}
        layout
      >
        {/* Boat Image */}
        <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
          <Image
            src={boat.image}
            alt={boat.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={index < 3} // Priority for first 3 images
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Card Content - Animated but Always Visible */}
        <motion.div
          className="p-4 sm:p-6"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.1 + 0.2,
            type: "spring",
            stiffness: 100
          }}
        >
          {/* Boat Name */}
          <motion.h3
            className="font-serif italic md:text-3xl text-2xl font-bold text-[#0B1D2C] mb-3 sm:mb-4"
            initial={{ y: 8, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1 + 0.3,
              type: "spring",
              stiffness: 120
            }}
            whileHover={{ scale: 1.02 }}
          >
            {boat.name}
          </motion.h3>

          {/* Specifications Grid */}
          <motion.div
            className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 justify-items-start"
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 0.4,
              type: "spring",
              stiffness: 100
            }}
          >
            {/* Power */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.5,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.02, x: 2 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.6,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.2, rotate: 45 }}
              >
                <SpecIcon icon="/images/lightning-i.svg" alt="Power" />
              </motion.div>
              <div>
                <motion.div
                  className="text-sm font-semibold text-[#0B1D2C]"
                  whileHover={{ scale: 1.05 }}
                >
                  {boat.power}
                </motion.div>
                <motion.div
                  className="text-xs text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Power
                </motion.div>
              </div>
            </motion.div>

            {/* Length */}
            <motion.div
              className="flex items-center space-x-3 ml-7"
              initial={{ x: 5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.6,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.02, x: -2 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 45 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.7,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.2, rotate: -45 }}
              >
                <SpecIcon icon="/images/anchor-i.svg" alt="Length" />
              </motion.div>
              <div>
                <motion.div
                  className="text-sm font-semibold text-[#0B1D2C]"
                  whileHover={{ scale: 1.05 }}
                >
                  {boat.length} FT
                </motion.div>
                <motion.div
                  className="text-xs text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Length
                </motion.div>
              </div>
            </motion.div>

            {/* Capacity */}
            <motion.div
              className="flex items-center space-x-3"
              initial={{ x: -5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.7,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.02, x: 2 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.8,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.2, rotate: 180 }}
              >
                <SpecIcon icon="/images/persons-i.svg" alt="Capacity" />
              </motion.div>
              <div>
                <motion.div
                  className="text-sm font-semibold text-[#0B1D2C]"
                  whileHover={{ scale: 1.05 }}
                >
                  {boat.capacity} guests
                </motion.div>
                <motion.div
                  className="text-xs text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Capacity
                </motion.div>
              </div>
            </motion.div>

            {/* Tank */}
            <motion.div
              className="flex items-center space-x-3 ml-7"
              initial={{ x: 5, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1 + 0.8,
                type: "spring",
                stiffness: 120
              }}
              whileHover={{ scale: 1.02, x: -2 }}
            >
              <motion.div
                initial={{ scale: 0, rotate: 180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  duration: 0.2,
                  delay: index * 0.1 + 0.9,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ scale: 1.2, rotate: -180 }}
              >
                <SpecIcon icon="/images/speed-i.svg" alt="Tank" />
              </motion.div>
              <div>
                <motion.div
                  className="text-sm font-semibold text-[#0B1D2C]"
                  whileHover={{ scale: 1.05 }}
                >
                  {boat.tank}
                </motion.div>
                <motion.div
                  className="text-xs text-gray-600"
                  whileHover={{ scale: 1.05 }}
                >
                  Tank
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* View Details Button */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1 + 1.0,
              type: "spring",
              stiffness: 100
            }}
            whileHover={{
              y: -4,
              scale: 1.02,
              transition: { duration: 0.2, type: "spring", stiffness: 300 }
            }}
            whileTap={{
              scale: 0.98,
              transition: { duration: 0.1 }
            }}
          >
            <Button
              href={boat.link || '#'}
              external={true}
              className="w-full bg-[#0B1D2C] hover:bg-[#0A1A28] text-white py-3 rounded-lg font-semibold transition-all duration-300 group"
            >
              <motion.span
                className="inline-block"
                whileHover={{
                  x: 2,
                  transition: { duration: 0.15 }
                }}
              >
                View Details
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default function BoatsSection() {
  // State management with React best practices
  const [currentBoatSet, setCurrentBoatSet] = useState(0);
  const [displayedBoats, setDisplayedBoats] = useState<typeof yachts>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Memoized random boat selection for performance
  const getRandomBoatSet = useCallback(() => {
    const shuffled = [...yachts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  // Initialize with first set of boats
  useEffect(() => {
    setDisplayedBoats(getRandomBoatSet());
  }, [getRandomBoatSet]);

  // Auto-rotate boats every 30 seconds with transition management
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      // Small delay to ensure smooth transition
      setTimeout(() => {
        setCurrentBoatSet(prev => prev + 1);
        setDisplayedBoats(getRandomBoatSet());
        setIsTransitioning(false);
      }, 100);
    }, 3600000); // 1 hour

    return () => clearInterval(interval);
  }, [getRandomBoatSet]);

  // Memoized boat cards for performance
  const boatCards = useMemo(() => {
    return displayedBoats.map((boat, index) => (
      <BoatCard
        key={`${currentBoatSet}-${boat.id}-${index}`}
        boat={boat}
        index={index}
        isVisible={!isTransitioning}
      />
    ));
  }, [displayedBoats, currentBoatSet, isTransitioning]);

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

        {/* Boat Cards Grid with AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <AnimatePresence mode="popLayout" initial={false}>
            {boatCards}
          </AnimatePresence>
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