export interface Transaction {
  user_id: string;
  timestamp: string;
  currency: string;
  amount: string;
}

export interface Transactions extends Array<Transaction> {}

export interface Balances {
  [currency: string]: number;
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
