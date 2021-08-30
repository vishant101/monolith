import moment from 'moment';
import {ProcessedTransactions, Transaction, Transactions} from '../Redux/Types';

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
  return moment(timestamp, moment.ISO_8601, true).isValid();
};

export const isValidCurrency = (currency: string) => {
  if (!currency) return false;
  return /(USD|EUR|GBP)\b/.test(currency);
};

export const isValidUserId = (user_id: string) => {
  if (!user_id) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    user_id,
  );
};

export const isValidTransaction = (transaction: Transaction) => {
  if (!isValidUserId(transaction.user_id)) return false;
  if (!isValidCurrency(transaction.currency)) return false;
  if (!isValidAmount(transaction.amount)) return false;
  if (!isValidTimestamp(transaction.timestamp)) return false;
  return true;
};

export const processTransactions = (transactions: Transactions) => {
  const processedTransactions: ProcessedTransactions = {};
  if (!transactions || transactions.length === 0) {
    return processedTransactions;
  }

  for (let i = 0; i < transactions.length; i++) {
    const transaction = transactions[i];
    if (isValidTransaction(transaction)) {
      if (processedTransactions[transaction.user_id]) {
        processedTransactions[transaction.user_id].transactions.push(
          transaction,
        );
      } else {
        processedTransactions[transaction.user_id] = {
          user_id: transaction.user_id,
          gbp_balance: 0,
          usd_balance: 0,
          eur_balance: 0,
          transactions: [transaction],
          lastupdated: transaction.timestamp,
        };
      }
    }
  }

  return processedTransactions;
};
