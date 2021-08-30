import React from 'react';
import {View, Text} from 'react-native';

function Home({
  requestTransactionsComplete,
  requestTransactionsFail,
  requestTransactionsSucess,
  requestingTransactions,
  processedTransactions,
  fetchTransactions,
}) {
  if (!requestingTransactions && !requestTransactionsComplete) {
    fetchTransactions();
  }

  if (requestingTransactions) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default Home;
