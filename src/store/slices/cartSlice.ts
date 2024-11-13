import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartItem {
  id: number;
  title: string;
  price: number;
  qty?: number;
  thumbnail?: string;
  description?: string;
  stock?: string;
}

export interface ICartStateProps {
  items: CartItem[];
}

const initialState: ICartStateProps = {
  items: [],
};

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addCart } = CartSlice.actions;

export default CartSlice.reducer;
