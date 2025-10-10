export interface Yacht {
   id: string;
   name: string;
   category: string;
   year: number;
   power: string;
   capacity: number;
   length: string;
   tank: string;
   price: string;
   image: string;
   description?: string;
   link?: string;
   width?: string;
}

export interface FilterOptions {
   bodyType: string;
   year: string;
   minLength: number;
   maxLength: number;
   minPrice: number;
   maxPrice: number;
}

export interface SortOption {
   value: string;
   label: string;
}
