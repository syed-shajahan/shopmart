import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  qty?: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
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
