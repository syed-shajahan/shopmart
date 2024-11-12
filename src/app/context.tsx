'use client';

import Header from '@/components/home/Header';
import { ThemeProvider } from 'next-themes';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
const ContextWraper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <Provider store={store}>
        <Header />

        <div className=" flex items-start container px-5 mx-auto">
          <div className="w-full">{children}</div>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export default ContextWraper;
