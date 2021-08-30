export interface Transaction {
  user_id: string;
  timestamp: string;
  currency: string;
  amount: string;
}

export interface Transactions extends Array<Transaction> {}

export interface ProcessedTransactionProps {
  user_id: string;
  lastupdated: string;
  transactions: Transactions;
  gbp_balance: number;
  usd_balance: number;
  eur_balance: number;
}

export interface ProcessedTransactions {
  [user_id: string]: ProcessedTransactionProps;
}
