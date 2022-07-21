import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 50.0,
  isLeveraged: false,
};

const accoutSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementBalance: (state, action) => {
      state.balance += action.payload;
    },
    decrementBalance: (state, action) => {
      state.balance -= action.payload;
    },
    isLeveraged: (state, action) => {
      state.isLeveraged = action.payload >= state.balance;
    },
  },
});

export const { incrementBalance, decrementBalance, isLeveraged } = accoutSlice.actions;

export default accoutSlice.reducer;
