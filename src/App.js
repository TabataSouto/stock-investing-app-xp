import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import store from './redux/store';
import GlobalStyles from './assets/styles/global';
import defaultTheme from './assets/themes/default';

function App() {
  return (
    <section>
      <Provider store={store}>
        <ThemeProvider theme={defaultTheme}>
          <Routes />
          <GlobalStyles />
        </ThemeProvider>
      </Provider>
    </section>
  );
}

export default App;
