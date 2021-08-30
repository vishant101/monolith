import React from 'react';
import {Text} from 'react-native';
import {Container, CurrencyContainer} from './styles';

export interface Props {
  currency: string;
  amount: string;
  timestamp: string;
}

const TransactionItem = ({currency, amount, timestamp}: Props) => {
  return (
    <Container>
      <Text>{timestamp}</Text>
      <CurrencyContainer>
        <Text>{amount}</Text>
        <Text>{currency}</Text>
      </CurrencyContainer>
    </Container>
  );
};

export default TransactionItem;
