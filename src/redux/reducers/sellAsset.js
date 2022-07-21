import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qtde: 0,
  calc: 0,
  isRent: false,
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
      state.isRent = action.payload === false && true;
    },
  },
});

export const { addQtde, calcPurchase, saleWithRent } = sellAssetSlice.actions;

export default sellAssetSlice.reducer;
