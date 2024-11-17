"use client";
import React, { FC } from "react";
import MainCard from "./MainCard";

// Define the types for product data
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  qty?: number;
}

interface IHomeProps {
  data: Product[];
}

const Homepage: FC<IHomeProps> = ({ data }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((product: Product, index: number) => (
        <MainCard data={product} key={index} />
      ))}
    </div>
  );
};

export default Homepage;
