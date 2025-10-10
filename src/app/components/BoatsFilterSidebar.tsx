"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FilterOptions } from '../types/yacht';
import { bodyTypes } from '../data/yachts';

interface BoatsFilterSidebarProps {
   filters: FilterOptions;
   onFiltersChange: (filters: FilterOptions) => void;
   onClearAll: () => void;
}

export default function BoatsFilterSidebar({
   filters,
   onFiltersChange,
   onClearAll
}: BoatsFilterSidebarProps) {
   const [isBodyTypeOpen, setIsBodyTypeOpen] = useState(false);

   // Local state for input values to allow free typing
   const [minLengthInput, setMinLengthInput] = useState(filters.minLength.toString());
   const [maxLengthInput, setMaxLengthInput] = useState(filters.maxLength.toString());
   const [minPriceInput, setMinPriceInput] = useState(filters.minPrice.toString());
   const [maxPriceInput, setMaxPriceInput] = useState(filters.maxPrice.toString());

   // Sync local state when filters change from outside
   useEffect(() => {
      setMinLengthInput(filters.minLength.toString());
      setMaxLengthInput(filters.maxLength.toString());
      setMinPriceInput(filters.minPrice.toString());
      setMaxPriceInput(filters.maxPrice.toString());
   }, [filters.minLength, filters.maxLength, filters.minPrice, filters.maxPrice]);

   const handleFilterChange = (key: keyof FilterOptions, value: string | number) => {
      onFiltersChange({
         ...filters,
         [key]: value
      });
   };

   return (
      <motion.div
         initial={{ x: -30, opacity: 0, scale: 0.95 }}
         animate={{ x: 0, opacity: 1, scale: 1 }}
         transition={{ duration: 0.6 }}
         className="bg-white rounded-xl shadow-lg p-6 h-fit"
      >
         {/* Header */}
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center justify-between mb-6"
         >
            <motion.p
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.4, delay: 0.2 }}
               className="text-xl !not-italic font-bold text-[#0B1D2C]"
            >
               Filters
            </motion.p>
         </motion.div>

         {/* Category Filter */}
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
         >
            <motion.label
               initial={{ x: -10, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.4, delay: 0.4 }}
               className="block text-sm font-medium text-[#0B1D2C] mb-2"
            >
               Category
            </motion.label>
            <div className="relative">
               <motion.button
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsBodyTypeOpen(!isBodyTypeOpen)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-left flex items-center justify-between hover:bg-gray-100 transition-colors cursor-pointer"
               >
                  <span className="text-gray-700">{filters.bodyType}</span>
                  <motion.svg
                     animate={{ rotate: isBodyTypeOpen ? 180 : 0 }}
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
                  {isBodyTypeOpen && (
                     <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                     >
                        {bodyTypes.map((type, index) => (
                           <motion.button
                              key={type}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: index * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                 handleFilterChange('bodyType', type);
                                 setIsBodyTypeOpen(false);
                              }}
                              className={`w-full px-4 py-3 text-left first:rounded-t-lg cursor-pointer last:rounded-b-lg ${filters.bodyType === type
                                 ? 'bg-[#0B1D2C] text-white'
                                 : 'text-[#0B1D2C] hover:bg-gray-100'
                                 }`}
                           >
                              {type}
                           </motion.button>
                        ))}
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </motion.div>

         {/* Length Filter */}
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mb-6"
         >
            <motion.label
               initial={{ x: -10, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.4, delay: 1.0 }}
               className="block text-sm font-medium text-[#0B1D2C] mb-2"
            >
               Length: {filters.minLength}m - {filters.maxLength}m
            </motion.label>

            <motion.div
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.4, delay: 1.1 }}
               className="space-y-3"
            >
               <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="flex space-x-3"
               >
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.3, delay: 1.3 }}
                     className="flex-1"
                  >
                     <label className="block text-xs text-gray-600 mb-1">Min Length: {filters.minLength}m</label>
                     <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="number"
                        min="19.9"
                        max="31"
                        step="0.1"
                        value={minLengthInput}
                        onChange={(e) => {
                           setMinLengthInput(e.target.value);
                        }}
                        onBlur={(e) => {
                           const value = parseFloat(e.target.value);
                           if (isNaN(value) || e.target.value === '') {
                              setMinLengthInput('19.9');
                              handleFilterChange('minLength', 19.9);
                           } else {
                              const constrainedValue = Math.max(19.9, Math.min(31, Math.min(value, filters.maxLength)));
                              setMinLengthInput(constrainedValue.toString());
                              handleFilterChange('minLength', constrainedValue);
                           }
                        }}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#0B1D2C] placeholder-gray-500"
                        placeholder="15m"
                     />
                  </motion.div>
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.3, delay: 1.4 }}
                     className="flex-1"
                  >
                     <label className="block text-xs text-gray-600 mb-1">Max Length: {filters.maxLength}m</label>
                     <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="number"
                        min="19.9"
                        max="31"
                        step="0.1"
                        value={maxLengthInput}
                        onChange={(e) => {
                           setMaxLengthInput(e.target.value);
                        }}
                        onBlur={(e) => {
                           const value = parseFloat(e.target.value);
                           if (isNaN(value) || e.target.value === '') {
                              setMaxLengthInput('31');
                              handleFilterChange('maxLength', 31);
                           } else {
                              const constrainedValue = Math.max(19.9, Math.min(31, Math.max(value, filters.minLength)));
                              setMaxLengthInput(constrainedValue.toString());
                              handleFilterChange('maxLength', constrainedValue);
                           }
                        }}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#0B1D2C] placeholder-gray-500"
                        placeholder="35m"
                     />
                  </motion.div>
               </motion.div>

               {/* Range Slider */}
               <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.5 }}
                  className="relative h-2 bg-gray-200 rounded-lg"
               >
                  <motion.div
                     className="absolute h-2 bg-[#0B1D2C] rounded-lg"
                     style={{
                        left: `${Math.max(0, Math.min(100, ((filters.minLength - 19.9) / (31 - 19.9)) * 100))}%`,
                        width: `${Math.max(0, Math.min(100, ((filters.maxLength - filters.minLength) / (31 - 19.9)) * 100))}%`
                     }}
                     transition={{ duration: 0.3 }}
                  ></motion.div>
                  <input
                     type="range"
                     min="19.9"
                     max="31"
                     step="0.1"
                     value={Math.max(19.9, Math.min(31, filters.minLength))}
                     onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (value <= filters.maxLength) {
                           handleFilterChange('minLength', value);
                        }
                     }}
                     className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                     style={{ zIndex: filters.minLength > filters.maxLength ? 1 : 2 }}
                  />
                  <input
                     type="range"
                     min="19.9"
                     max="31"
                     step="0.1"
                     value={Math.max(19.9, Math.min(31, filters.maxLength))}
                     onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (value >= filters.minLength) {
                           handleFilterChange('maxLength', value);
                        }
                     }}
                     className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                     style={{ zIndex: filters.maxLength < filters.minLength ? 1 : 2 }}
                  />
               </motion.div>
            </motion.div>
         </motion.div>

         {/* Price Filter */}
         <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="mb-6"
         >
            <motion.label
               initial={{ x: -10, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.4, delay: 1.7 }}
               className="block text-sm font-medium text-[#0B1D2C] mb-2"
            >
               Price: €{filters.minPrice}M - €{filters.maxPrice}M
            </motion.label>

            <motion.div
               initial={{ y: 10, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.4, delay: 1.8 }}
               className="space-y-3"
            >
               <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.9 }}
                  className="flex space-x-3"
               >
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.3, delay: 2.0 }}
                     className="flex-1"
                  >
                     <label className="block text-xs text-gray-600 mb-1">Min Price: €{filters.minPrice}k</label>
                     <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="number"
                        step="1"
                        min="39"
                        max="237"
                        value={minPriceInput}
                        onChange={(e) => {
                           setMinPriceInput(e.target.value);
                        }}
                        onBlur={(e) => {
                           const value = parseFloat(e.target.value);
                           if (isNaN(value) || e.target.value === '') {
                              setMinPriceInput('39');
                              handleFilterChange('minPrice', 39);
                           } else {
                              const constrainedValue = Math.max(39, Math.min(237, Math.min(value, filters.maxPrice)));
                              setMinPriceInput(constrainedValue.toString());
                              handleFilterChange('minPrice', constrainedValue);
                           }
                        }}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#0B1D2C] placeholder-gray-500"
                        placeholder="€39k"
                     />
                  </motion.div>
                  <motion.div
                     initial={{ scale: 0.95, opacity: 0 }}
                     animate={{ scale: 1, opacity: 1 }}
                     transition={{ duration: 0.3, delay: 2.1 }}
                     className="flex-1"
                  >
                     <label className="block text-xs text-gray-600 mb-1">Max Price: €{filters.maxPrice}k</label>
                     <motion.input
                        whileFocus={{ scale: 1.02 }}
                        type="number"
                        step="1"
                        min="39"
                        max="237"
                        value={maxPriceInput}
                        onChange={(e) => {
                           setMaxPriceInput(e.target.value);
                        }}
                        onBlur={(e) => {
                           const value = parseFloat(e.target.value);
                           if (isNaN(value) || e.target.value === '') {
                              setMaxPriceInput('237');
                              handleFilterChange('maxPrice', 237);
                           } else {
                              const constrainedValue = Math.max(39, Math.min(237, Math.max(value, filters.minPrice)));
                              setMaxPriceInput(constrainedValue.toString());
                              handleFilterChange('maxPrice', constrainedValue);
                           }
                        }}
                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#0B1D2C] placeholder-gray-500"
                        placeholder="€237k"
                     />
                  </motion.div>
               </motion.div>

               {/* Range Slider */}
               <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                  className="relative h-2 bg-gray-200 rounded-lg"
               >
                  <motion.div
                     className="absolute h-2 bg-[#0B1D2C] rounded-lg"
                     style={{
                        left: `${Math.max(0, Math.min(100, ((filters.minPrice - 39) / (237 - 39)) * 100))}%`,
                        width: `${Math.max(0, Math.min(100, ((filters.maxPrice - filters.minPrice) / (237 - 39)) * 100))}%`
                     }}
                     transition={{ duration: 0.3 }}
                  ></motion.div>
                  <input
                     type="range"
                     min="39"
                     max="236"
                     step="1"
                     value={filters.minPrice}
                     onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (value <= filters.maxPrice) {
                           handleFilterChange('minPrice', value);
                           setMinPriceInput(value.toString());
                        }
                     }}
                     className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                     style={{ zIndex: filters.minPrice > filters.maxPrice ? 1 : 2 }}
                  />
                  <input
                     type="range"
                     min="39"
                     max="236"
                     step="1"
                     value={filters.maxPrice}
                     onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        if (value >= filters.minPrice) {
                           handleFilterChange('maxPrice', value);
                           setMaxPriceInput(value.toString());
                        }
                     }}
                     className="absolute w-full h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                     style={{ zIndex: filters.maxPrice < filters.minPrice ? 1 : 2 }}
                  />
               </motion.div>
            </motion.div>
         </motion.div>

         {/* Clear All Button */}
         <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClearAll}
            className="w-full bg-white border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 cursor-pointer hover:text-red-500 transition-all duration-300 flex gap-3 items-center justify-center"
         >
            <span>✕</span>  Clear All Filters
         </motion.button>
      </motion.div>
   );
}
