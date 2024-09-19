import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type Tshop = {
  _id: string;
  name: string;
  price: number;
  category: string;
  brand: string;
  rating: number;
  description: string;
  quantity: number;
  url: string;
};
type TInitialState = {
  shop: Tshop[];
};
const initialState: TInitialState = {
  shop: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Tshop>) => {
      state.shop.push(action.payload);
    },
  },
});

export const { addProduct } = shopSlice.actions;

export default shopSlice.reducer;
