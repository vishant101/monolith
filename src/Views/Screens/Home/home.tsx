import React from 'react';
import {View, Text} from 'react-native';

function Home({state, fetchTransactions}) {
  // fetchTransactions();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;
