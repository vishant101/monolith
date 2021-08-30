import React from 'react';
import {View, Text} from 'react-native';
import {Balances} from '../../../Redux/Types';
import {Container, ElementContantainer, HeadingText} from './styles';
import BalanceRow from '../BalanceRow';
import {BALANCES, LAST_ACTIVITY, USER_ID} from './consts';

interface Props {
  user_id: string;
  balances: Balances;
  timestamp: string;
}

const renderElement = (heading: string, value: string) => (
  <ElementContantainer>
    <HeadingText>{`${heading}:`}</HeadingText>
    <Text>{value}</Text>
  </ElementContantainer>
);

const renderBalances = (balances: Balances) => (
  <ElementContantainer>
    <HeadingText>{`${BALANCES}:`}</HeadingText>
    {Object.entries(balances).map(entry => (
      <BalanceRow key={entry[0]} currency={entry[0]} balance={entry[1]} />
    ))}
  </ElementContantainer>
);

const BalanceItem = ({user_id, balances, timestamp}: Props) => {
  return (
    <Container>
      <View>
        {renderElement(USER_ID, user_id)}
        {renderElement(LAST_ACTIVITY, timestamp)}
        {renderBalances(balances)}
      </View>
    </Container>
  );
};

export default BalanceItem;
