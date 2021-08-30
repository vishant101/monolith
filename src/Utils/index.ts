import {Transaction, Transactions} from '../Redux/Types';

export const isValidAmount = (amount: string) => {
  if (!amount) return false;
  if (amount.length < 2) return false;
  const operator = amount.charAt(0);
  if (!(operator === '-' || operator === '+')) return false;
  const numberComponent = amount.substring(1, amount.length);
  const isValidNumber =
    /^\d+\.\d+$/.test(numberComponent) || /^\d+$/.test(numberComponent);
  if (!isValidNumber) return false;
  return true;
};

export const isValidTimestamp = (timestamp: string) => {
  if (!timestamp) return false;
  if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(timestamp)) {
    return false;
  }
  const d = new Date(timestamp);
  return d.toISOString() === timestamp;
};

export const isValidTransaction = (transaction: Transaction) => {
  if (!isValidAmount(transaction.amount)) return false;
  if (!isValidTimestamp(transaction.timestamp)) return false;
  return true;
};

export const processTransactions = (transactions: Transactions) => {
  const processedTransactions = {};
  if (!transactions || transactions.length === 0) {
    return processedTransactions;
  }

  for (let i = 0; i < transactions.length; i++) {
    if (isValidTransaction(transactions[i])) {
    }
  }

  return processedTransactions;
};
