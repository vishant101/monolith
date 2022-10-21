import data from './data/transactions-large.json';
import axios from 'axios';

const TRANSACTIONS_URL = 'https://api.jsonbin.io/v3/b/63530a9965b57a31e69e43a6';

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// export const getTransactions = async () => {
//   await sleep(1000);
//   return data;
// };

export const getTransactions = axios
  .get(TRANSACTIONS_URL)
  .then(function (response) {
    console.log('response', response.data.record.transactions);
    return response.data.record.transactions;
  })
  .catch(function (error) {
    console.log(error);
  });
