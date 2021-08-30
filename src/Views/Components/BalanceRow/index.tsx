import React from 'react';
import {Text} from 'react-native';
import {Container} from './styles';

interface Props {
  currency: string;
  balance: string;
}

const BalanceRow = ({currency, balance}: Props) => (
  <Container>
    <Text>{`${currency}: ${balance}`}</Text>
  </Container>
);

export default BalanceRow;
