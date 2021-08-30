import React from 'react';
import {View, Text} from 'react-native';
import {Balances} from '../../../Redux/Types';
import {Container, ElementContantainer, HeadingText} from './styles';
import BalanceRow from '../BalanceRow';

interface Props {
  user_id: string;
  balances: Balances;
  timestamp: string;
}

const renderUserID = (user_id: string) => (
  <ElementContantainer>
    <HeadingText>USER ID:</HeadingText>
    <Text>{user_id}</Text>
  </ElementContantainer>
);

const renderLastActivity = (timestamp: string) => (
  <ElementContantainer>
    <HeadingText>LAST ACTIVITY:</HeadingText>
    <Text>{timestamp}</Text>
  </ElementContantainer>
);

const renderBalances = (balances: Balances) => (
  <ElementContantainer>
    <HeadingText>BALANCES</HeadingText>
    {Object.entries(balances).map(entry => (
      <BalanceRow currency={entry[0]} balance={entry[1]} />
    ))}
  </ElementContantainer>
);

const BalanceItem = ({user_id, balances, timestamp}: Props) => {
  return (
    <Container>
      <View>
        {renderUserID(user_id)}
        {renderLastActivity(timestamp)}
        {renderBalances(balances)}
      </View>
    </Container>
  );
};

export default BalanceItem;
