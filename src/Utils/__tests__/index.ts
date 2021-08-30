import {isValidAmount, isValidTimestamp} from '..';

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
  });

  it('should return the corrct value for isValidTimestamp', () => {
    expect(isValidTimestamp(0)).toBeFalsy();
    expect(isValidTimestamp('0')).toBeFalsy();
    expect(isValidTimestamp('1970-01-01T00:00:00.000Z')).toBeTruthy();
  });
});
