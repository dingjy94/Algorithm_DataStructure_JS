/**
 * lc338 counting bits (https://leetcode.com/problems/counting-bits/)
 * Given a non negative integer number num.
 * For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation
 * and return them as an array.
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = [];
  result[0] = 0;
  let j = 1;
  // prefix, DP(x + b) = DP(x) + 1, b = 2^m > x
  while (j <= num) {
    let i = 0;
    while (i < j && i + j <= num) {
      result[i + j] = result[i] + 1;
      i += 1;
    }

    j *= 2;
  }

  return result;
};
