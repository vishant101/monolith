import {Balances} from '../../../Redux/Transactions/types';

export interface Props {
  user_id: string;
  balances: Balances;
  timestamp: string;
  onPress: () => void;
}
