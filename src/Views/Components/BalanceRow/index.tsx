import React from 'react';
import {Image} from 'react-native';
import {getCurrencyImgSource} from '../../../Utils';
import {Container, CurrencyText, styles} from './styles';

interface Props {
  currency: string;
  balance: string;
}

const BalanceRow = ({currency, balance}: Props) => (
  <Container>
    <Image
      source={getCurrencyImgSource(currency)}
      style={styles.image}
      resizeMode="contain"
    />
    <CurrencyText>{`${currency}: ${balance}`}</CurrencyText>
  </Container>
);

export default BalanceRow;
