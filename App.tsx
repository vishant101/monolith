import * as React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/Store/configureStore';
import Navigation from './src/Views/Navigation';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
