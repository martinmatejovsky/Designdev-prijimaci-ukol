import {Product, Suitability} from "assets/interfaces";

export default defineEventHandler(() => {
  let products: Product[] = [
    {
      id: 1,
      name: "Product name",
      image: {
        src: "/images/products/1.png",
        alt: "Product name"
      },
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
      name: "Product name very long",
      image: {
        src: "/images/products/2.png",
        alt: "Product name"
      },
      description: "Subtitle with basic ingredients, subtitle with basic ingredients.",
      rating: 3.8,
      reviews: 17,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs],
      onStock: 15,
    },
    {
      id: 3,
      name: "Product name",
      image: {
        src: "/images/products/3.png",
        alt: "Product name"
      },
      description: "Subtitle with basic ingredients, subtitle with basic ingredients, subtitle with basic ingredients.",
      rating: null,
      reviews: 0,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs, Suitability.humans],
      onStock: 15,
    },
    {
      id: 4,
      name: "Product name",
      image: {
        src: "/images/products/4.png",
        alt: "Product name"
      },
      description: "Subtitle with basic ingredients, subtitle with basic ingredients, subtitle with basic ingredients.",
      rating: null,
      reviews: 5,
      price: 49.90,
      currency: "$",
      suitableFor: [Suitability.dogs],
      onStock: 0,
    },
  ]

  return products;
})

