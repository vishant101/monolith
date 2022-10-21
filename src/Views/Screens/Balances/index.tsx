import React, {useEffect} from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {APP_COLORS, APP_STRINGS} from '../../../AppStyles';
import {fetchTransactions} from '../../../Redux/Transactions';
import {RootState} from '../../../Store/types';
import BalanceItem from '../../Components/BalanceItem';
import {Seperator, ContentContainer, Container} from './styles';
import {ProcessedTransactionProps} from '../../../Redux/Transactions/types';

interface RenderItemProp {
  item: ProcessedTransactionProps;
}

function Balances() {
  const dispatch = useDispatch();
  const {processedTransactions, status: transactionLoadStatus} = useSelector(
    (state: RootState) => state.transactionState,
  );

  useEffect(() => {
    if (transactionLoadStatus === 'idle') {
      dispatch(fetchTransactions());
    }
  }, [transactionLoadStatus, dispatch]);

  const renderItem = ({item}: RenderItemProp) => (
    <BalanceItem
      user_id={item.user_id}
      balances={item.balances}
      timestamp={item.lastupdated}
    />
  );

  const renderSeparator = () => <Seperator />;

  const renderSpinner = () => (
    <ContentContainer>
      <ActivityIndicator size={'large'} color={APP_COLORS.primary} />
    </ContentContainer>
  );

  const renderError = () => (
    <ContentContainer>
      <Text>{APP_STRINGS.ERROR_TEXT}</Text>
    </ContentContainer>
  );

  const renderTransactions = () => {
    const data = Object.values(processedTransactions);
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.user_id}
        ItemSeparatorComponent={renderSeparator}
      />
    );
  };

  const render = () => {
    switch (transactionLoadStatus) {
      case 'succeeded':
        return renderTransactions();
      case 'failed':
        return renderError();
      case 'idle':
      case 'loading':
      default:
        return renderSpinner();
    }
  };

  return <Container>{render()}</Container>;
}

export default Balances;
