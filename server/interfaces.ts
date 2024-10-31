export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  currency: string;
  suitableFor: Suitability[];
  onStock: number;
}

export enum Suitability {
  dogs = "dogs",
  humans = "humans"
}