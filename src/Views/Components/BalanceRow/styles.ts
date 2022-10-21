import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  padding: 4px 0px;
  align-items: center;
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
