import React from 'react';
import {Text, Image} from 'react-native';

import {getCurrencyImgSource} from '../../../Utils';
import {
  Container,
  CurrencyContainer,
  AmountText,
  CurrencyText,
  styles,
} from './styles';
import {Props} from './types';

const TransactionItem = ({currency, amount, timestamp}: Props) => {
  return (
    <Container>
      <Text>{timestamp}</Text>
      <CurrencyContainer>
        <AmountText>{amount}</AmountText>
        <CurrencyText>{currency}</CurrencyText>
        <Image
          source={getCurrencyImgSource(currency)}
          style={styles.image}
          resizeMode="contain"
        />
      </CurrencyContainer>
    </Container>
  );
};

export default TransactionItem;
