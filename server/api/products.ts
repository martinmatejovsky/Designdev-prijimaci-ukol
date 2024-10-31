import {Product, Suitability} from "../interfaces";

export default defineEventHandler(() => {
  let products: Product[] = [
    {
      id: 1,
      name: "Product name",
      image: "/images/products/1.png",
      description: "Subtitle with basic ingredients",
      rating: 4.8,
      reviews: 17,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs],
      onStock: 15,
    },
    {
      id: 2,
      name: "Product name",
      image: "/images/products/2.png",
      description: "Subtitle with basic ingredients",
      rating: 4.8,
      reviews: 17,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs, Suitability.humans],
      onStock: 15,
    },
    {
      id: 3,
      name: "Product name",
      image: "/images/products/3.png",
      description: "Subtitle with basic ingredients",
      rating: 3.8,
      reviews: 17,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs],
      onStock: 15,
    },
    {
      id: 4,
      name: "Product name",
      image: "/images/products/4.png",
      description: "Subtitle with basic ingredients",
      rating: 4.8,
      reviews: 17,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs],
      onStock: 15,
    },
  ]

  return products;
})

