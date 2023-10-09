const { romanToInt } = require('../problems/roman-to-int.js');

describe('romanToInt test', () => {
  let romanNum;

  it('should return int value of roman numeral', () => {
    romanNum = 'IX';
    expect(romanToInt(romanNum)).toStrictEqual(9);
    romanNum = 'XXXIV';
    expect(romanToInt(romanNum)).toStrictEqual(34);
    romanNum = 'MCMXCIX';
    expect(romanToInt(romanNum)).toStrictEqual(1999);
  });
});
