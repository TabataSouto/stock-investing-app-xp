import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 50.0,
  isLeveraged: false,
  leveradedValue: 0.00,
  rentValue: 0.00,
  bank: '',
  operationType: '',
};

const accoutSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementBalanceRent: (state, { payload }) => {
      state.rentValue += payload.amount;
      state.balance += payload.amount;
    },
    incrementBalance: (state, { payload }) => {
      state.balance += payload.amount;
    },
    decrementBalance: (state, { payload }) => {
      state.balance -= payload.amount;
      if (state.balance < 0) {
        state.leveradedValue += state.balance;
      }
    },
    isLeveraged: (state, action) => {
      state.isLeveraged = action.payload >= state.balance;
    },
    selectedBank: (state, action) => {
      state.bank = action.payload;
    },
    operationType: (state, action) => {
      state.operationType = action.payload;
    },
  },
});

export const {
  incrementBalanceRent, incrementBalance, decrementBalance, isLeveraged,
  selectedBank, operationType,
} = accoutSlice.actions;

export default accoutSlice.reducer;
