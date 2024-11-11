import { Product } from '@/components/home';
import { searchApi } from '@/utils/api';
import Image from 'next/image';
import React from 'react';

const page = async ({ searchParams }: { searchParams: { [key: string]: string } }) => {
  const data = await searchApi(searchParams.q);
  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {data?.map((product: Product) => (
        <div
          key={product.id}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow ease-in-out"
        >
          <Image
            width={300}
            height={300}
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">{product.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
