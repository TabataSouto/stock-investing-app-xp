import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/themes/default';
import store from '../../redux/store';

const renderWithRedux = (
  component,
) => (
  {
    ...render(
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          {component}
          <GlobalStyles />
        </ThemeProvider>
      </Provider>,
    ),
  }
);

export default renderWithRedux;
