import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import Balances from './Balances';

import {fetchTransactions} from '../../../Redux/Actions';
import {ReducerState} from '../../../Redux/Types';

const mapStateToProps = ({
  requestTransactionsComplete,
  requestTransactionsFail,
  requestTransactionsSuccess,
  requestingTransactions,
  processedTransactions,
}: ReducerState) => ({
  requestTransactionsComplete,
  requestTransactionsFail,
  requestTransactionsSuccess,
  requestingTransactions,
  processedTransactions,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      fetchTransactions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Balances);
