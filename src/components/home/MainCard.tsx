"use client";
import Image from "next/image";
import React from "react";
import { Product } from ".";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { addCart, deleteCartItems } from "@/store/slices/cartSlice";

const MainCard = ({ data }: { data: Product }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleCart = (data: Product) => {
    dispatch(addCart({ ...data, qty: 1 }));
  };

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const ifExistInCart = cartItems.some((item) => item.id === data.id);
  return (
    <div
      key={data.id}
      className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out"
    >
      <Image
        width={300}
        height={300}
        src={data.thumbnail}
        alt={data.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
        {data.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
        {data.description}
      </p>

      <div className="flex items-center justify-between">
        <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          ${data.price}
        </p>
        <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          {data?.qty}
        </p>
      </div>

      {!ifExistInCart ? (
        <button
          onClick={() => handleCart(data)}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Add to Cart
        </button>
      ) : (
        <button
          onClick={() => dispatch(deleteCartItems(data.id))}
          className="w-full border-blue-500 dark:text-blue-300 text-black/[60%] py-2 rounded-lgtransition duration-300"
        >
          Remove From cart
        </button>
      )}
    </div>
  );
};

export default MainCard;
