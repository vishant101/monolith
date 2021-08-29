import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Home from './home';

import {fetchTransactions} from '../../../Redux/Actions';

const mapStateToProps = state => {
  console.log(state);
  return state;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchTransactions,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
