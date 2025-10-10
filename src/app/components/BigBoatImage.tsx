"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from './ui/Container';

export default function BigBoatImage() {
   return (
      <Container size="xl" className="py-0 bg-white">
         <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden rounded-lg"
         >
            <Image
               src="/images/big-boat.png"
               alt="Nordkapp Yacht in Harbor"
               fill
               className="object-cover w-full"
               priority
               sizes="100vw"
            />
            {/* Optional overlay for better text contrast if needed */}
            <div className="absolute inset-0 bg-black/5" />
         </motion.section>
      </Container>
   );
}
