import { Product } from "@/components/home";
import MainCard from "@/components/home/MainCard";
import { searchApi } from "@/utils/api";
import React from "react";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const data = await searchApi(searchParams.q);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((product: Product, index: number) => (
        <MainCard data={product} key={index} />
      ))}
    </div>
  );
};

export default page;
