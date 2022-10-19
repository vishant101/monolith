import {useRoute} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';

import {ProcessedTransactions} from '../../../Redux/Types';
import TransactionItem from '../../Components/TransactionItem';
import {Container, Seperator} from './styles';
import {Transaction} from '../../../Redux/Types';
import {useSelector} from 'react-redux';
import {RootState} from '../../../Store/types';

interface Props {
  processedTransactions: ProcessedTransactions;
}

interface RenderItemProp {
  item: Transaction;
}

function Transactions() {
  const {processedTransactions} = useSelector(
    (state: RootState) => state.transactionState,
  );
  const route = useRoute();
  const data = processedTransactions[route.params?.user_id].transactions;

  const renderItem = ({item}: RenderItemProp) => (
    <TransactionItem
      currency={item.currency}
      timestamp={item.timestamp}
      amount={item.amount}
    />
  );

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.timestamp}
        ItemSeparatorComponent={() => <Seperator />}
      />
    </Container>
  );
}

export default Transactions;
