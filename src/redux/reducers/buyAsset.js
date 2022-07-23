import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  qtde: 0,
  calc: 0,
  isLeveraged: false,
};

const buyAssetSlice = createSlice({
  name: 'buy',
  initialState,
  reducers: {
    addQtde: (state, action) => {
      state.qtde = action.payload.qtde;
    },
    calcPurchase: (state, action) => {
      state.calc = (action.payload.qtde * action.payload.value).toFixed(2);
    },
  },
});

export const { addQtde, calcPurchase } = buyAssetSlice.actions;

export default buyAssetSlice.reducer;
