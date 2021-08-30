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

export const parseSignedFloat = (amount: string) => {
  const operator = amount.charAt(0);
  const numberComponent = amount.substring(1, amount.length);
  const amountInFloat = parseFloat(numberComponent);
  return operator === '-' ? 0 - amountInFloat : amountInFloat;
};

export const calculateBalance = (oldBalance: string, amount: string) => {
  const result = parseFloat(oldBalance) + parseSignedFloat(amount);
  return result.toFixed(2);
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
        const BalanceItem = processedTransactions[transaction.user_id];
        const currencyBalance = BalanceItem.balances[transaction.currency];
        if (currencyBalance) {
          BalanceItem.balances[transaction.currency] = calculateBalance(
            currencyBalance,
            transaction.amount,
          );
        } else {
          BalanceItem.balances[transaction.currency] = parseSignedFloat(
            transaction.amount,
          ).toFixed(2);
        }
        if (
          new Date(transaction.timestamp) > new Date(BalanceItem.lastupdated)
        ) {
          BalanceItem.lastupdated = transaction.timestamp;
        }
        BalanceItem.transactions.push(transaction);
      } else {
        const balances = {};
        balances[transaction.currency] = parseSignedFloat(transaction.amount);
        processedTransactions[transaction.user_id] = {
          user_id: transaction.user_id,
          balances: balances,
          transactions: [transaction],
          lastupdated: transaction.timestamp,
        };
      }
    }
  }

  return processedTransactions;
};
