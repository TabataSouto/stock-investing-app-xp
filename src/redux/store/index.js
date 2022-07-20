import { configureStore } from '@reduxjs/toolkit';

// import user from '../reducers/user';
// import orders from '../reducers/orders';
// import assets from '../reducers/assets';
// import negotiation from '../reducers/negotiation';
// import account from '../reducers/account';
// import buy from '../reducers/buyAsset';
// import sell from '../reducers/sellAsset';

const store = configureStore({
  reducer: {
    // user,
    // orders,
    // assets,
    // negotiation,
    // account,
    // buy,
    // sell,
  },
});

export default store;
