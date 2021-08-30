import React from 'react';
import {Text, Image} from 'react-native';
import {
  Container,
  CurrencyContainer,
  AmountText,
  CurrencyText,
  styles,
} from './styles';
import {ic_usd} from '../../../Assets/Img';
import {getCurrencyImgSource} from '../../../Utils';

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
