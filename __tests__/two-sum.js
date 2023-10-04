const { twoSum, threeSum } = require('../problems/two-sum.js');

describe('twoSum test', () => {
  let arr;

  it('should return arr of index of two numbers that sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 10)).toStrictEqual([1, 2]);
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 16)).toStrictEqual([1, 3]);
    arr = [1, 4, 7, 2, 9, 0];
    expect(twoSum(arr, 7)).toStrictEqual([2, 5]);
  });

  it('should work with negative numbers', () => {
    arr = [-1, 4, 6, 12, 9];
    expect(twoSum(arr, 8)).toStrictEqual([0, 4]);
    arr = [-1, -1, -2, -4, -5];
    expect(twoSum(arr, -2)).toStrictEqual([0, 1]);
  });

  it('should return undefined if two numbers DO NOT sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 2)).toBe(undefined);
    arr = [1, 4, 6, 12, 9];
    expect(twoSum(arr, 45)).toBe(undefined);
    arr = [1, 4, 7, 2, 9, 0];
    expect(twoSum(arr, 17)).toBe(undefined);
  });
});

xdescribe('threeSum test', () => {
  let arr;

  it('should return true if three numbers sum to n', () => {
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 18)).toBe(true);
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 22)).toBe(true);
    arr = [2, 5, 11, 15];
    expect(threeSum(arr, 31)).toBe(true);
  });

  it('should work with negative numbers', () => {
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 22)).toBe(true);
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 9)).toBe(true);
    arr = [-1, 4, 6, 12, 9];
    expect(threeSum(arr, 20)).toBe(true);
    arr = [-1, -4, 5, 12, 9];
    expect(threeSum(arr, 0)).toBe(true);
    arr = [-1, -1, -2, -4, -5];
    expect(threeSum(arr, -4)).toBe(true);
  });

  it('should return false if three numbers DO NOT sum to n', () => {
    arr = [1, 4, 6, 12, 9];
    expect(threeSum(arr, 2)).toBe(false);
    arr = [1, 4, 6, 12, 9];
    expect(threeSum(arr, 45)).toBe(false);
    arr = [1, 4, 7, 2, 9, 0];
    expect(threeSum(arr, 19)).toBe(false);
  });
});
