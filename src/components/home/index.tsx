"use client";

import Image from "next/image";
import React, { FC, useState } from "react";

// Define the types for product data
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string;
  qty?:number
}

interface IHomeProps {
  data: Product[];
}

const Homepage: FC<IHomeProps> = ({ data }) => {
  const [cart, setCart] = useState<Product[]>([]);

  console.log(cart, "cartitmes");

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out"
        >
          <img
            src={product.images[0]}
            alt={product.title}
        
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
            {product.description}
          </p>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            ${product.price}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;