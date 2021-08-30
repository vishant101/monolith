import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {ProcessedTransactions} from '../../../Redux/Types';
import BalanceItem from '../../Components/BalanceItem';
import {Container, Seperator} from './styles';

interface Props {
  requestTransactionsComplete: boolean;
  requestTransactionsFail: boolean;
  requestTransactionsSucess: boolean;
  requestingTransactions: boolean;
  processedTransactions: ProcessedTransactions;
  fetchTransactions: Function;
}

function Balances({
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
    <BalanceItem
      user_id={item.user_id}
      balances={item.balances}
      timestamp={item.lastupdated}
    />
  );

  const renderSeparator = () => <Seperator />;

  if (requestingTransactions) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Loading</Text>
      </View>
    );
  }

  const data = Object.values(processedTransactions);

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.user_id}
        ItemSeparatorComponent={renderSeparator}
      />
    </Container>
  );
}

export default Balances;
