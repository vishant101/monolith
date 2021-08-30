import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  justify-content: space-between;
  flex-direction: row;
  padding: 15px 20px;
  background-color: white;
`;

export const CurrencyContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const AmountText = styled.Text`
  padding: 0px 10px;
`;

export const CurrencyText = styled.Text`
  padding: 0px 10px;
`;

export const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});
