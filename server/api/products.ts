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
  ]

  return products;
})

