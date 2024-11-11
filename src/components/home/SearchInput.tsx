'use client';

import { useState, FormEvent } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import CustomSheet from '../Modal';

export const SearchBar = () => {
  const [keywords, setKeywords] = useState<string>('');
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);
  const router = useRouter();

  const searchKeywords = (e: FormEvent) => {
    e.preventDefault();
    if (keywords) {
      router.push(`/search?q=${encodeURIComponent(keywords)}`);
      setIsSheetOpen(false);
    }
  };

  return (
    <>
      <Button onClick={() => setIsSheetOpen(true)}>
        <BiSearch size={20} />
      </Button>
      <CustomSheet isOpen={isSheetOpen} onOpenChange={setIsSheetOpen} className={'bg-[#fdfdfd39] dark:bg-[#19191a2d] backdrop-blur-[8px]'}>
        <form onSubmit={searchKeywords} className="relative w-full max-w-md mx-auto">
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="Search Products..."
            className="w-full rounded-[25px] px-6 py-4 text-sm border  outline-none bg-gray-50 dark:bg-[#000] focus:border-gray-500"
          />
          <button
            type="submit"
            className="absolute right-[20px] top-1/2 -translate-y-1/2 text-gray-600 hover:text-black"
            aria-label="Search"
          >
            <BiSearch size={20} />
          </button>
        </form>
      </CustomSheet>
    </>
  );
};
