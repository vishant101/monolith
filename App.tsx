import * as React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './src/Views/Screens';
import rootReducer from './src/Redux/Reducer';

const Stack = createNativeStackNavigator();
const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
