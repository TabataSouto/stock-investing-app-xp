import React from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './redux/store';

function App() {
  return (
    <section>
      <Provider store={store}>
        <Routes />
      </Provider>
    </section>
  );
}

export default App;
