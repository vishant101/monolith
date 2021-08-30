import data from './data/transactions-large.json';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const getTransactions = async () => {
  await sleep(1000);
  return data;
};
