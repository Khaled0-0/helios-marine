import { Yacht } from '../types/yacht';

export const yachts: Yacht[] = [
   {
      id: '1',
      name: 'Nordkapp 760 RS',
      category: 'Sport Yacht',
      year: 2024,
      power: '850 HP',
      capacity: 8,
      length: '23.2m',
      tank: '800L',
      price: '€1.3M',
      image: '/images/ImageWithFallback(1).png',
      description: 'High-performance sport yacht with exceptional speed and luxury'
   },
   {
      id: '2',
      name: 'Nordkapp 840 Flybridge',
      category: 'Flybridge',
      year: 2024,
      power: '1200 HP',
      capacity: 12,
      length: '25.6m',
      tank: '1200L',
      price: '€2.1M',
      image: '/images/ImageWithFallback(2).png',
      description: 'Spacious flybridge yacht perfect for entertaining and cruising'
   },
   {
      id: '3',
      name: 'Nordkapp 680 Sport',
      category: 'Sport Yacht',
      year: 2023,
      power: '650 HP',
      capacity: 6,
      length: '20.8m',
      tank: '600L',
      price: '€950K',
      image: '/images/ImageWithFallback(3).png',
      description: 'Classic sport yacht with timeless design and modern performance'
   },
   {
      id: '4',
      name: 'Nordkapp 920 Explorer',
      category: 'Explorer',
      year: 2024,
      power: '1500 HP',
      capacity: 16,
      length: '28.0m',
      tank: '1500L',
      price: '€3.2M',
      image: '/images/ImageWithFallback(4).png',
      description: 'Ultimate explorer yacht for long-range cruising and adventure'
   }
];

export const sortOptions = [
   { value: 'newest', label: 'Newest First' },
   { value: 'oldest', label: 'Oldest First' },
   { value: 'price-low', label: 'Price: Low to High' },
   { value: 'price-high', label: 'Price: High to Low' },
   { value: 'length', label: 'Length' },
   { value: 'name', label: 'Name A-Z' }
];

export const bodyTypes = [
   'All Types',
   'Sport Yacht',
   'Flybridge',
   'Explorer',
   'Cruiser',
   'Day Boat'
];

export const years = [
   'All Years',
   '2024',
   '2023',
   '2022',
   '2021',
   '2020'
];
