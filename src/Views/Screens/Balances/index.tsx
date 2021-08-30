import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Balances from './Balances';

import {fetchTransactions} from '../../../Redux/Actions';

const mapStateToProps = ({
  requestTransactionsComplete,
  requestTransactionsFail,
  requestTransactionsSucess,
  requestingTransactions,
  processedTransactions,
}) => ({
  requestTransactionsComplete,
  requestTransactionsFail,
  requestTransactionsSucess,
  requestingTransactions,
  processedTransactions,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTransactions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Balances);
