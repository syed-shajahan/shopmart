import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<CartItem>) => {
      const ifItemExist = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!ifItemExist) {
        state.items.push(action.payload);
        state.items.reverse();
      }
    },
    deleteCartItems: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementQty: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, qty: (item.qty || 0) + 1 }
          : item
      );
    },

    decreaseQty: (state, action) => {
      state.items = state.items.map((item) =>
        item.id === action.payload
          ? { ...item, qty: (item.qty || 0) - 1 }
          : item
      );
    },
  },
});

export const { addCart, deleteCartItems, incrementQty, decreaseQty } =
  CartSlice.actions;

export default CartSlice.reducer;
