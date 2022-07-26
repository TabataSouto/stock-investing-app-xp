import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  balance: 50.0,
  isLeveraged: false,
  leveradedValue: 0,
  rentValue: 0,
  bank: '',
  operationType: '',
  transitionValue: 0,
  notAllowed: false,
};

const accoutSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    incrementBalanceRent: (state, { payload }) => {
      state.rentValue += payload;
      // state.balance += payload.amount;
    },
    incrementBalance: (state, { payload }) => {
      state.balance += payload.amount;
      state.leveradedValue = state.balance;
    },
    decrementBalance: (state, { payload }) => {
      state.balance -= payload.amount;
      state.leveradedValue = state.balance;
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
    valueTransition: (state, action) => {
      state.transitionValue = +action.payload;
    },
    deposit: (state, action) => {
      state.balance += action.payload;
      state.leveradedValue = state.balance;
    },
    withdrawal: (state, action) => {
      state.balance -= action.payload;
    },
    notAllowed: (state, action) => {
      state.notAllowed = action.payload;
    },
    updateLeveradedValue: (state, action) => {
      state.leveradedValue = action.payload;
    },
  },
});

export const {
  incrementBalanceRent, incrementBalance, decrementBalance, isLeveraged,
  selectedBank, operationType, valueTransition, deposit, withdrawal,
  notAllowed, updateLeveradedValue,
} = accoutSlice.actions;

export default accoutSlice.reducer;
