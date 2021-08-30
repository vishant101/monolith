import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import Transactions from './Transactions';
import {fetchTransactions} from '../../../Redux/Actions';
import {ReducerState} from '../../../Redux/Types';

const mapStateToProps = ({processedTransactions}: ReducerState) => ({
  processedTransactions,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchTransactions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
