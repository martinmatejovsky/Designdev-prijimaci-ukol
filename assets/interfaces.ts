export interface Product {
  id: number;
  name: string;
  image: {
    src: string;
    srcSet?: string;
    alt?: string;
  };
  description?: string;
  rating: number | null;
  reviews: number;
  price: number;
  currency: string;
  suitableFor: Suitability[];
  onStock: number;
}

export enum Suitability {
  dogs = "For Dogs",
  humans = "For Humans"
}