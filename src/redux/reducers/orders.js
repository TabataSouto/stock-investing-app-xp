import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  executedOrders: [],
  historyOrders: [],
};

const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addExecutedOrder: (state, { payload }) => {
      // verifica se o item já existe em carteira;
      const item = state.executedOrders.find((o) => o.paper === payload.paper);
      if (item) {
        item.isBuy = payload.isBuy;
        item.isSell = payload.isSell;
        if (item.isSell && item.isRent) {
          item.quantity += (payload.quantity);
          item.amount += (payload.amount);
        }
        if (item.isSell) {
          item.quantity -= payload.quantity;
          item.amount -= payload.amount;
        }
        if (item.isBuy) {
          item.quantity += payload.quantity;
          item.amount += (payload.amount);
        }
      } else {
        state.executedOrders.push(payload);
      }
    },
    updateExecutedOrder: (state, { payload }) => {
      state.executedOrders = payload;
    },
    historicOrders: (state, action) => {
      state.historyOrders.push(action.payload);
    },
  },
});

export const { addExecutedOrder, updateExecutedOrder, historicOrders } = orderSlice.actions;

export default orderSlice.reducer;

// item.isBuy && item.quantity < 0
