"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, X } from 'lucide-react';
import { yachts, sortOptions } from '../data/yachts';
import { FilterOptions } from '../types/yacht';
import BoatsFilterSidebar from './BoatsFilterSidebar';
import YachtCard from './YachtCard';
import Button from './ui/Button';

export default function BoatsCollection() {
   const [searchTerm, setSearchTerm] = useState('');
   const [sortBy, setSortBy] = useState('newest');
   const [isSortOpen, setIsSortOpen] = useState(false);
   const [filters, setFilters] = useState<FilterOptions>({
      bodyType: 'All Types',
      year: 'All Years',
      minLength: 15,
      maxLength: 35,
      minPrice: 0,
      maxPrice: 5
   });

   // Filter and sort yachts
   const filteredYachts = useMemo(() => {
      const filtered = yachts.filter(yacht => {
         // Search filter
         if (searchTerm && !yacht.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return false;
         }

         // Body type filter
         if (filters.bodyType !== 'All Types' && yacht.category !== filters.bodyType) {
            return false;
         }

         // Year filter
         if (filters.year !== 'All Years' && yacht.year.toString() !== filters.year) {
            return false;
         }

         // Length filter
         const yachtLength = parseFloat(yacht.length);
         if (yachtLength < filters.minLength || yachtLength > filters.maxLength) {
            return false;
         }

         // Price filter
         const yachtPrice = parseFloat(yacht.price.replace('€', '').replace('M', ''));
         if (yachtPrice < filters.minPrice || yachtPrice > filters.maxPrice) {
            return false;
         }

         return true;
      });

      // Sort yachts
      filtered.sort((a, b) => {
         switch (sortBy) {
            case 'newest':
               return b.year - a.year;
            case 'oldest':
               return a.year - b.year;
            case 'price-low':
               return parseFloat(a.price.replace('€', '').replace('M', '')) - parseFloat(b.price.replace('€', '').replace('M', ''));
            case 'price-high':
               return parseFloat(b.price.replace('€', '').replace('M', '')) - parseFloat(a.price.replace('€', '').replace('M', ''));
            case 'length':
               return parseFloat(b.length) - parseFloat(a.length);
            case 'name':
               return a.name.localeCompare(b.name);
            default:
               return 0;
         }
      });

      return filtered;
   }, [searchTerm, filters, sortBy]);

   const clearAllFilters = () => {
      setFilters({
         bodyType: 'All Types',
         year: 'All Years',
         minLength: 15,
         maxLength: 35,
         minPrice: 0,
         maxPrice: 5
      });
      setSearchTerm('');
   };

   const hasActiveFilters = filters.bodyType !== 'All Types' ||
      filters.year !== 'All Years' ||
      filters.minLength !== 15 ||
      filters.maxLength !== 35 ||
      filters.minPrice !== 0 ||
      filters.maxPrice !== 5 ||
      searchTerm !== '';

   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="min-h-screen bg-gray-50 pt-34 pb-12"
      >
         <div className="max-w-7xl mx-auto px-4">
            {/* Header Section */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6 }}
               className="mb-8"
            >
               {/* Title and Search */}
               <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-8"
               >
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                     className="mb-6"
                  >
                     <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-4xl lg:text-5xl font-serif font-bold text-[#0B1D2C] mb-3 italic"
                     >
                        Nordkapp Yacht Collection
                     </motion.h1>
                     <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-lg text-gray-600 max-w-2xl mb-6"
                     >
                        Discover our premium selection of Nordkapp yachts available in the UAE
                     </motion.p>

                     {/* Search Bar - Centered */}
                     <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex justify-start"
                     >
                        <motion.div
                           initial={{ scale: 0.95, opacity: 0 }}
                           animate={{ scale: 1, opacity: 1 }}
                           transition={{ duration: 0.4, delay: 0.6 }}
                           className="relative max-w-3xl w-full"
                        >
                           <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none z-10" />
                           <input
                              type="text"
                              placeholder="Search models..."
                              value={searchTerm}
                              onChange={(e) => setSearchTerm(e.target.value)}
                              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#bdcfdd] focus:border-transparent shadow-sm text-[#0B1D2C] placeholder-gray-500 transition-all duration-200"
                           />
                        </motion.div>
                     </motion.div>
                  </motion.div>
               </motion.div>

               {/* Results Bar */}
               <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6"
               >
                  <motion.div
                     initial={{ x: -20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.7 }}
                     className="text-gray-600 mb-4 sm:mb-0"
                  >
                     Showing {filteredYachts.length} yachts
                  </motion.div>

                  <motion.div
                     initial={{ x: 20, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 0.8 }}
                     className="flex items-center space-x-4"
                  >
                     {/* Sort Dropdown */}
                     <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.9 }}
                        className="relative"
                     >
                        <motion.button
                           whileHover={{ scale: 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           onClick={() => setIsSortOpen(!isSortOpen)}
                           className="flex items-center space-x-2  border border-gray-200 rounded-lg px-4 py-2 hover:bg-gray-100 transition-colors bg-white text-black cursor-pointer"
                        >
                           <span className="text-gray-700">
                              {sortOptions.find(option => option.value === sortBy)?.label}
                           </span>
                           <motion.div
                              animate={{ rotate: isSortOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                           >
                              <ChevronDown className="w-4 h-4 text-black" />
                           </motion.div>
                        </motion.button>

                        <AnimatePresence>
                           {isSortOpen && (
                              <motion.div
                                 initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                 animate={{ opacity: 1, y: 0, scale: 1 }}
                                 exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                 transition={{ duration: 0.2 }}
                                 className="absolute top-full right-0 sm:right-0 sm:left-auto left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[200px] max-w-[calc(100vw-2rem)]"
                              >
                                 {sortOptions.map((option, index) => (
                                    <motion.button
                                       key={option.value}
                                       initial={{ opacity: 0, x: -10 }}
                                       animate={{ opacity: 1, x: 0 }}
                                       transition={{ duration: 0.2, delay: index * 0.05 }}
                                       whileHover={{ scale: 1.02 }}
                                       whileTap={{ scale: 0.98 }}
                                       onClick={() => {
                                          setSortBy(option.value);
                                          setIsSortOpen(false);
                                       }}
                                       className={`w-full px-4 py-3 text-left first:rounded-t-lg cursor-pointer last:rounded-b-lg ${sortBy === option.value
                                          ? 'bg-[#0B1D2C] text-white'
                                          : 'text-[#0B1D2C] hover:bg-gray-100'
                                          }`}
                                    >
                                       {option.label}
                                    </motion.button>
                                 ))}
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.div>

                     {/* Clear Filters */}
                     <AnimatePresence>
                        {hasActiveFilters && (
                           <motion.button
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={clearAllFilters}
                              className="flex items-center space-x-1 text-gray-500 hover:text-red-500 text-sm font-medium cursor-pointer"
                           >
                              <X className="w-4 h-4" />
                              <span>Clear filters</span>
                           </motion.button>
                        )}
                     </AnimatePresence>
                  </motion.div>
               </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
               initial={{ y: 30, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.6, delay: 1.0 }}
               className="flex flex-col lg:flex-row gap-8"
            >
               {/* Filter Sidebar */}
               <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="lg:w-80 flex-shrink-0"
               >
                  <BoatsFilterSidebar
                     filters={filters}
                     onFiltersChange={setFilters}
                     onClearAll={clearAllFilters}
                  />
               </motion.div>

               {/* Yacht Grid */}
               <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="flex-1"
               >
                  <AnimatePresence mode="wait">
                     {filteredYachts.length > 0 ? (
                        <motion.div
                           key="yacht-grid"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           exit={{ opacity: 0, y: -20 }}
                           transition={{ duration: 0.4 }}
                           className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        >
                           {filteredYachts.map((yacht, index) => (
                              <YachtCard key={yacht.id} yacht={yacht} index={index} />
                           ))}
                        </motion.div>
                     ) : (
                        <motion.div
                           key="no-results"
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           exit={{ opacity: 0, scale: 0.9 }}
                           transition={{ duration: 0.4 }}
                           className="text-center py-12"
                        >
                           <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.1 }}
                              className="text-gray-500 text-lg mb-4"
                           >
                              No yachts found
                           </motion.div>
                           <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.2 }}
                              className="text-gray-400 mb-6"
                           >
                              Try adjusting your filters or search terms
                           </motion.p>
                           <motion.button
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.4, delay: 0.3 }}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={clearAllFilters}
                              className="bg-[#0B1D2C] text-white px-6 py-3 rounded-lg hover:bg-[#0A1A28] transition-colors cursor-pointer"
                           >
                              Clear All Filters
                           </motion.button>
                        </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
            </motion.div>

            {/* Call-to-Action Section */}
            <motion.div
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ duration: 0.8, delay: 1.3 }}
               className="mt-16 w-full"
            >
               <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-xl shadow-lg p-8 w-full text-center"
               >
                  {/* Heading */}
                  <motion.h2
                     initial={{ y: 30, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 1.5 }}
                     className="text-3xl lg:text-4xl font-serif font-bold italic text-[#0B1D2C] mb-4"
                  >
                     Ready to Start Your Journey?
                  </motion.h2>

                  {/* Body Text */}
                  <motion.p
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 1.6 }}
                     className="text-lg text-[#0B1D2C] mb-8 leading-relaxed"
                  >
                     Have all your questions answered? Explore our boat collection or get in touch with our team.
                  </motion.p>

                  {/* Buttons */}
                  <motion.div
                     initial={{ y: 20, opacity: 0 }}
                     animate={{ y: 0, opacity: 1 }}
                     transition={{ duration: 0.6, delay: 1.7 }}
                     className="flex flex-col sm:flex-row gap-4 justify-center"
                  >
                     <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.8 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Button
                           href="/boats"
                           className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 min-w-55"
                        >
                           Explore Our Boats
                        </Button>
                     </motion.div>
                     <motion.div
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.4, delay: 1.9 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Button
                           href="/contact"
                           className="bg-[#0B1D2C] hover:bg-[#0A1A28] text-white md:px-8 md:py-3 rounded-lg font-semibold transition-all duration-300 min-w-55"
                        >
                           Schedule Consultation
                        </Button>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </motion.div>
         </div>
      </motion.div>
   );
}
