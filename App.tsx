import * as React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Balances} from './src/Views/Screens';
import configureStore from './src/Store/configureStore';

const Stack = createNativeStackNavigator();

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Balances" component={Balances} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
