import { configureStore } from '@reduxjs/toolkit';

import login from '../reducers/loginSlice';
import assets from '../reducers/assets';
import orders from '../reducers/orders';
import account from '../reducers/account';
import buy from '../reducers/buyAsset';
import sell from '../reducers/sellAsset';
// import negotiation from '../reducers/negotiation';

const store = configureStore({
  reducer: {
    login,
    assets,
    orders,
    account,
    buy,
    sell,
    // negotiation,
  },
});

export default store;
