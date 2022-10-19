import React, {useEffect} from 'react';
import {Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {APP_COLORS, APP_STRINGS} from '../../../AppStyles';
import {fetchTransactions} from '../../../Redux/Transactions';
import {RootState} from '../../../Store/types';
import BalanceItem from '../../Components/BalanceItem';
import {Seperator, ContentContainer} from './styles';

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

  const renderItem = ({item}) => (
    <BalanceItem
      user_id={item.user_id}
      balances={item.balances}
      timestamp={item.lastupdated}
    />
  );

  const renderSeparator = () => <Seperator />;

  const renderSpinner = () => (
    <ActivityIndicator size={'large'} color={APP_COLORS.primary} />
  );

  const renderError = () => <Text>{APP_STRINGS.ERROR_TEXT}</Text>;

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

  return <ContentContainer>{render()}</ContentContainer>;
}

export default Balances;
