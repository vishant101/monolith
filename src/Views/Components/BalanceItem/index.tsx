import React from 'react';
import {Text} from 'react-native';
import {Balances} from '../../../Redux/Transactions/types';
import {Container, ElementContantainer, HeadingText} from './styles';
import BalanceRow from '../BalanceRow';
import {BALANCES, LAST_ACTIVITY, USER_ID} from './consts';
import PressableScale from '../PressableScale';

interface Props {
  user_id: string;
  balances: Balances;
  timestamp: string;
  onPress: () => void;
}

const BalanceItem = ({user_id, balances, timestamp, onPress}: Props) => {
  const renderElement = (heading: string, value: string) => (
    <ElementContantainer>
      <HeadingText>{`${heading}:`}</HeadingText>
      <Text>{value}</Text>
    </ElementContantainer>
  );

  const renderBalances = () => (
    <ElementContantainer>
      <HeadingText>{`${BALANCES}:`}</HeadingText>
      {Object.entries(balances).map(entry => (
        <BalanceRow key={entry[0]} currency={entry[0]} balance={entry[1]} />
      ))}
    </ElementContantainer>
  );

  return (
    <PressableScale onPress={onPress} scaleTo={0.95}>
      <Container>
        {renderElement(USER_ID, user_id)}
        {renderElement(LAST_ACTIVITY, timestamp)}
        {renderBalances()}
      </Container>
    </PressableScale>
  );
};

export default BalanceItem;
