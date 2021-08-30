import {getTransactions} from '../../Api/Transactions';
import {processTransactions} from '../../Utils';
import {
  FETCH_TRANSACTIONS_COMPLETE,
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCESS,
} from '../Constants';
import {ProcessedTransactions} from '../Types';

export const fetchTransactionsRequest = () => ({
  type: FETCH_TRANSACTIONS_REQUEST,
});

export const fetchTransactionsSuccess = (
  processedTransactions: ProcessedTransactions,
) => ({
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
    const processedTransactions = await processTransactions(transactions);
    console.log(`--- processedTransactions`, processedTransactions);

    dispatch(fetchTransactionsSuccess(processedTransactions));
  } catch (error) {
    dispatch(fetchTransactionsFail(error));
  }
  dispatch(fetchTransactionsComplete());
};
