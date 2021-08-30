import React from 'react';
import {View, Text} from 'react-native';
import {Balances, ProcessedTransactionProps} from '../../../Redux/Types';

interface Props {
  user_id: string;
  balances: Balances;
}

const BalanceRow = ({currency, balance}) => (
  <Text>{`${currency}: ${balance}`}</Text>
);

const BalanceItem = ({user_id, balances}: Props) => {
  return (
    <View
      style={{
        height: 100,
        backgroundColor: 'white',
      }}>
      <Text>{user_id}</Text>
      {Object.entries(balances).map(entry => (
        <BalanceRow currency={entry[0]} balance={entry[1]} />
      ))}
    </View>
  );
};

export default BalanceItem;
