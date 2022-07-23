import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/themes/default';

import login from '../../redux/reducers/loginSlice';
import assets from '../../redux/reducers/assets';
import orders from '../../redux/reducers/orders';
import account from '../../redux/reducers/account';
import buy from '../../redux/reducers/buyAsset';
import sell from '../../redux/reducers/sellAsset';
import negotiation from '../../redux/reducers/negotiation';

// const createMockStore = (initialState) => (
//   createStore(combineReducers({ reducer }),
// initialState, applyMiddleware(thunk))
// );

const combineReducers = {
  reducer:
    {
      login, assets, orders, account, buy, sell, negotiation,
    },
};

const createMockStore = (initialState) => (
  configureStore(combineReducers, initialState));

const renderWithRedux = (
  component,
  initialState,
) => (
  {
    ...render(
      <Provider store={createMockStore(initialState)}>
        <ThemeProvider theme={defaultTheme}>
          {component}
          <GlobalStyles />
        </ThemeProvider>
      </Provider>,
    ),
  }
);

export default renderWithRedux;
