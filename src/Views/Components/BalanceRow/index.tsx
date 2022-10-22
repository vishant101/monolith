import React from 'react';
import {Image} from 'react-native';
import {getCurrencyImgSource} from '../../../Utils';
import {Container, CurrencyText, styles} from './styles';
import {Props} from './types';

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
