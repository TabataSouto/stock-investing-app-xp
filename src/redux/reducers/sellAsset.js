import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qtde: 0,
  calc: 0,
  isRent: false,
  stillRent: false,
};

const sellAssetSlice = createSlice({
  name: 'sell',
  initialState,
  reducers: {
    addQtde: (state, action) => {
      state.qtde = action.payload.qtde;
    },
    calcPurchase: (state, action) => {
      state.calc = action.payload.qtde * action.payload.value;
    },
    saleWithRent: (state, action) => {
      state.stillRent = false;
      state.isRent = action.payload;
    },
    saleStillWithRent: (state, action) => {
      state.stillRent = action.payload;
    },
  },
});

export const {
  addQtde, calcPurchase, saleWithRent, saleStillWithRent,
} = sellAssetSlice.actions;

export default sellAssetSlice.reducer;
