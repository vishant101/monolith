import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  ProcessedTransactionProps,
  ProcessedTransactions,
} from '../../../Redux/Types';
import BalanceItem from '../../Components/BalanceItem';

interface Props {
  requestTransactionsComplete: boolean;
  requestTransactionsFail: boolean;
  requestTransactionsSucess: boolean;
  requestingTransactions: boolean;
  processedTransactions: ProcessedTransactions;
  fetchTransactions: Function;
}

function Home({
  requestTransactionsComplete,
  requestTransactionsFail,
  requestTransactionsSucess,
  requestingTransactions,
  processedTransactions,
  fetchTransactions,
}: Props) {
  useEffect(() => {
    fetchTransactions();
  }, []);

  const renderItem = ({item}) => (
    <BalanceItem user_id={item.user_id} balances={item.balances} />
  );

  if (requestingTransactions) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }

  const data = Object.values(processedTransactions);
  console.log('data :>> ', data);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
      }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.user_id}
      />
    </View>
  );
}

export default Home;
