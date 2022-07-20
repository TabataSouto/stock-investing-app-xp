import { configureStore } from '@reduxjs/toolkit';

import login from '../reducers/loginSlice';
// import orders from '../reducers/orders';
// import assets from '../reducers/assets';
// import negotiation from '../reducers/negotiation';
// import account from '../reducers/account';
// import buy from '../reducers/buyAsset';
// import sell from '../reducers/sellAsset';

const store = configureStore({
  reducer: {
    login,
    // orders,
    // assets,
    // negotiation,
    // account,
    // buy,
    // sell,
  },
});

export default store;
