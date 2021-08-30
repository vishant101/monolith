import {
  FETCH_TRANSACTIONS_COMPLETE,
  FETCH_TRANSACTIONS_FAIL,
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCESS,
} from '../Constants';

export interface Transaction {
  user_id: string;
  timestamp: string;
  currency: string;
  amount: string;
}

export interface Transactions extends Array<Transaction> {}

export interface Balances {
  [currency: string]: string;
}

export interface ProcessedTransactionProps {
  user_id: string;
  lastupdated: string;
  transactions: Transactions;
  balances?: Balances;
}

export interface ProcessedTransactions {
  [user_id: string]: ProcessedTransactionProps;
}

export interface ProcessedTransactionsPayload {
  processedTransactions: ProcessedTransactions;
}

export interface ErrorPayload {
  error: any;
}

interface FetchTransactionRequest {
  type: typeof FETCH_TRANSACTIONS_REQUEST;
}

interface FetchTransactionsComplete {
  type: typeof FETCH_TRANSACTIONS_COMPLETE;
}

interface FetchTransactionsSuccess {
  type: typeof FETCH_TRANSACTIONS_SUCESS;
  payload: ProcessedTransactionsPayload;
}

interface FetchTransactionsFail {
  type: typeof FETCH_TRANSACTIONS_FAIL;
  payload: ErrorPayload;
}

export type ActionTypes =
  | FetchTransactionRequest
  | FetchTransactionsComplete
  | FetchTransactionsSuccess
  | FetchTransactionsFail;
