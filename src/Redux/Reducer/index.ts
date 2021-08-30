import {
  FETCH_TRANSACTIONS_COMPLETE,
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCESS,
} from '../Constants';
import {ActionTypes, ReducerState} from '../Types';

const initialState: ReducerState = {
  requestingTransactions: false,
  requestTransactionsSuccess: false,
  requestTransactionsFail: false,
  requestTransactionsComplete: false,
  processedTransactions: {},
};

function rootReducer(state = initialState, action: ActionTypes) {
  switch (action.type) {
    case FETCH_TRANSACTIONS_REQUEST: {
      return {
        ...state,
        requestingTransactions: true,
        requestTransactionsSuccess: false,
        requestTransactionsFail: false,
        requestTransactionsComplete: false,
      };
    }
    case FETCH_TRANSACTIONS_SUCESS: {
      const {processedTransactions} = action.payload;

      return {
        ...state,
        requestingTransactions: false,
        requestTransactionsSuccess: true,
        processedTransactions: processedTransactions,
      };
    }
    case FETCH_TRANSACTIONS_FAIL: {
      return {
        ...state,
        requestingTransactions: false,
        requestTransactionsFail: true,
      };
    }
    case FETCH_TRANSACTIONS_COMPLETE: {
      return {
        ...state,
        requestingTransactions: false,
        requestTransactionsComplete: true,
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
