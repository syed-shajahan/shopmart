"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import {
  decreaseQty,
  deleteCartItems,
  incrementQty,
} from "@/store/slices/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const dispatch = useDispatch();

  return (
    <div className="mt-10">
      <h3 className="mb-3">
        Total Items Added:{" "}
        <span className="font-semibold">{cartItems.length}</span>{" "}
      </h3>

      {cartItems.map((data) => {
        return (
          <>
            <div className="p-8 border rounded-[10px] mb-3">
              <div className="flex items-start justify-between ">
                <div className="flex items-center center ">
                  <Image
                    src={data?.thumbnail || ""}
                    alt=""
                    width={60}
                    height={60}
                    className="me-4 shrink-0"
                  />
                  <div className="block">
                    <h3 className="mb-2">{data.title}</h3>
                    <p className="text-[13px] max-w-[500px] truncate mb-1">
                      {data.description}
                    </p>
                    <p className="text-[12px]">
                      In stock:{" "}
                      <span className="text-green-300 text-[14px]">
                        {data.stock}
                      </span>
                    </p>
                    <h5 className="text-[16px]  font-bold">{data.qty}</h5>
                  </div>
                </div>

                <div className="flex items-end justify-end  flex-col">
                  <p className="mb-2">price</p>
                  <MdDelete
                    className="cursor-pointer text-[red] text-[30px]"
                    onClick={() => dispatch(deleteCartItems(data.id))}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 justify-end">
                <Button
                  className="shrink-0"
                  onClick={() => dispatch(decreaseQty(data.id))}
                >
                  <FaCircleMinus />
                </Button>

                <Button
                  className="shrink-0"
                  onClick={() => dispatch(incrementQty(data.id))}
                >
                  <IoIosAddCircle />
                </Button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default CartPage;
