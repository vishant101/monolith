import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackParamList} from './types';
import {Balances, Transactions} from '../Screens';
import styles from './styles';

const Navigation = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Balances'}
          component={Balances}
          options={{
            title: 'Balances',
            headerTitleStyle: styles.homeTextStyle,
          }}
        />
        <Stack.Screen
          name={'Transactions'}
          component={Transactions}
          options={{
            title: 'Transactions',
            headerTitleStyle: styles.questionsTextStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
