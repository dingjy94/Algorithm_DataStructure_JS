/**
 * Given an unsorted array of integers, find the length of longest increasing subsequence.
 * lc300(https://leetcode.com/problems/longest-increasing-subsequence/)
 * Input: [10,9,2,5,3,7,101,18]
 * Output: 4
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let sub = [];
  let result = 0;

  for (let num of nums) {
    let i = 0, j = result;
    while (i !== j) {
      const mid = Math.floor((i + j) / 2);
      if (sub[mid] < num) {
        i = mid + 1;
      } else {
        j = mid;
      }
    }
    sub[i] = num;
    if (i === result) result++;
  }
  return result
};
