import {
  isValidAmount,
  isValidCurrency,
  isValidTimestamp,
  isValidTransaction,
  isValidUserId,
  processTransactions,
} from '..';

describe('Utils', () => {
  it('should return the corrct value for isValidAmount', () => {
    expect(isValidAmount(0)).toBeFalsy();
    expect(isValidAmount('0')).toBeFalsy();
    expect(isValidAmount('A')).toBeFalsy();
    expect(isValidAmount('+A')).toBeFalsy();
    expect(isValidAmount('+A.000')).toBeFalsy();
    expect(isValidAmount('+0')).toBeTruthy();
    expect(isValidAmount('+1')).toBeTruthy();
    expect(isValidAmount('-12.00')).toBeTruthy();
    expect(isValidAmount('+12.00')).toBeTruthy();
    expect(isValidAmount('+100000.00000')).toBeTruthy();
    expect(isValidAmount('-886.69')).toBeTruthy();
  });

  it('should return the corrct value for isValidTimestamp', () => {
    expect(isValidTimestamp(0)).toBeFalsy();
    expect(isValidTimestamp('aaa')).toBeFalsy();
    expect(isValidTimestamp('1970-01-01T00:00:00.000Z')).toBeTruthy();
    expect(isValidTimestamp('2020-05-29T16:59:39Z')).toBeTruthy();
  });

  it('should return the corrct value for isValidCurrency', () => {
    expect(isValidCurrency(0)).toBeFalsy();
    expect(isValidCurrency('gbp')).toBeFalsy();
    expect(isValidCurrency('EURR')).toBeFalsy();
    expect(isValidCurrency('EUR')).toBeTruthy();
    expect(isValidCurrency('USD')).toBeTruthy();
    expect(isValidCurrency('GBP')).toBeTruthy();
  });

  it('should return the corrct value for isValidUserId', () => {
    expect(isValidUserId(0)).toBeFalsy();
    expect(isValidUserId('aaa')).toBeFalsy();
    expect(isValidUserId('faf4a6fe-c839-4ee3-ac11-ee3957ac6332')).toBeTruthy();
    expect(isValidUserId('b4521412-2eeb-43f3-a50d-be976b23189d')).toBeTruthy();
  });

  it('should return the corrct value for isValidTransaction', () => {
    const transaction = {
      amount: '-886.69',
      currency: 'GBP',
      timestamp: '2020-05-29T16:59:39Z',
      user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
    };
    expect(isValidTransaction(transaction)).toBeTruthy();
  });

  it('should return the corrct value for processTransactions', () => {
    const transactions = [
      {
        user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
        timestamp: '2020-05-29T16:59:39Z',
        currency: 'GBP',
        amount: '-10.50',
      },
      {
        user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
        timestamp: '2019-12-05T18:28:13Z',
        currency: 'GBP',
        amount: '+20.00',
      },
      {
        user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
        timestamp: '2020-06-10T17:14:25Z',
        currency: 'GBP',
        amount: '-0.50',
      },
      {
        user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
        timestamp: '2020-06-10T17:14:25Z',
        currency: 'EUR',
        amount: '-0.50',
      },
    ];

    const processedTransactions = {
      'b4521412-2eeb-43f3-a50d-be976b23189d': {
        balances: {
          GBP: '9.00',
          EUR: '-0.50',
        },
        lastupdated: '2020-06-10T17:14:25Z',
        transactions: [
          {
            user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
            timestamp: '2020-05-29T16:59:39Z',
            currency: 'GBP',
            amount: '-10.50',
          },
          {
            user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
            timestamp: '2019-12-05T18:28:13Z',
            currency: 'GBP',
            amount: '+20.00',
          },
          {
            user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
            timestamp: '2020-06-10T17:14:25Z',
            currency: 'GBP',
            amount: '-0.50',
          },
          {
            user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
            timestamp: '2020-06-10T17:14:25Z',
            currency: 'EUR',
            amount: '-0.50',
          },
        ],
        user_id: 'b4521412-2eeb-43f3-a50d-be976b23189d',
      },
    };

    expect(processTransactions(transactions)).toEqual(processedTransactions);
  });
});
