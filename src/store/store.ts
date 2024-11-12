import { configureStore } from '@reduxjs/toolkit';

import CartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
