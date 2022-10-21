import {StyleSheet} from 'react-native';
import {APP_COLORS} from '../../AppStyles';

export default StyleSheet.create({
  balancesTextStyle: {
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 30,
    justifyContent: 'center',
    flex: 1,
    textAlignVertical: 'center',
    color: APP_COLORS.primary,
  },
  transactionsTextStyle: {fontSize: 24, color: APP_COLORS.primary},
});
