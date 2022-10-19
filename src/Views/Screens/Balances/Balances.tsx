import React, {useEffect} from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
import {ProcessedTransactions} from '../../../Redux/Types';
import BalanceItem from '../../Components/BalanceItem';
import {Container, Seperator, ContentContainer} from './styles';

interface Props {
  requestTransactionsComplete: boolean;
  requestTransactionsFail: boolean;
  requestTransactionsSuccess: boolean;
  requestingTransactions: boolean;
  processedTransactions: ProcessedTransactions;
  fetchTransactions: Function;
}

function Balances({
  requestTransactionsFail,
  requestTransactionsSuccess,
  requestingTransactions,
  processedTransactions,
  fetchTransactions,
}: Props) {
  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]);

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
      <ContentContainer>
        <ActivityIndicator color={'blue'} size="large" />
      </ContentContainer>
    );
  }

  if (requestTransactionsFail) {
    return (
      <Container>
        <Text>Something went wrong, please try again later</Text>
      </Container>
    );
  }

  if (requestTransactionsSuccess) {
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

  return (
    <ContentContainer>
      <Text>Welcome to Monolith</Text>
    </ContentContainer>
  );
}

export default Balances;
