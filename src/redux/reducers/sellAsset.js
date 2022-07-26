import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qtde: 0,
  calc: 0,
  inWallet: false,
  isBTC: false,
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
    saleInWallet: (state, action) => {
      state.inWallet = action.payload;
    },
    sellWithcBTC: (state, action) => {
      state.isBTC = action.payload;
    },
  },
});

export const {
  addQtde, calcPurchase, saleInWallet, sellWithcBTC,
} = sellAssetSlice.actions;

export default sellAssetSlice.reducer;
