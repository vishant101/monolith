import {getTransactions} from '../../Api/Transactions';
import {
  FETCH_TRANSACTIONS_COMPLETE,
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCESS,
} from '../Constants';

export const fetchTransactionsRequest = () => ({
  type: FETCH_TRANSACTIONS_REQUEST,
});

export const fetchTransactionsSuccess = processedTransactions => ({
  type: FETCH_TRANSACTIONS_SUCESS,
  payload: {
    processedTransactions,
  },
});

export const fetchTransactionsFail = error => ({
  type: FETCH_TRANSACTIONS_FAIL,
  payload: {
    error,
  },
});

export const fetchTransactionsComplete = () => ({
  type: FETCH_TRANSACTIONS_COMPLETE,
});

export const fetchTransactions = () => async dispatch => {
  dispatch(fetchTransactionsRequest());
  try {
    const transactions = await getTransactions();

    dispatch(fetchTransactionsSuccess(transactions));
  } catch (error) {
    dispatch(fetchTransactionsFail(error));
  }
  dispatch(fetchTransactionsComplete());
};
