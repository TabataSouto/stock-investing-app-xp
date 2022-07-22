import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import reducer from '../../redux/store';

const navigate = useNavigate();

export const makeStore = () => configureStore({ reducer });

const wrapComponent = (Component, store = null) => (
  <Provider store={store || makeStore()}>
    <BrowserRouter history={navigate}>
      <Component />
    </BrowserRouter>
  </Provider>
);

export default wrapComponent;
