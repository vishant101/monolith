import * as React from 'react';
import {Provider} from 'react-redux';
import Navigation from './src/Views/Navigation';
import Store from './src/Store';

function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;
