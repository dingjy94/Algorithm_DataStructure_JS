/**
 * lc416 (https://leetcode.com/problems/partition-equal-subset-sum/)
 * Given a non-empty array containing only positive integers,
 * find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, num) => acc + num, 0);
  if (sum % 2 === 1) {
    return false;
  }

  const half = sum / 2;

  const dp = [];
  for (let i = 0; i <= nums.length; i++) {
    dp[i] = [];
    dp[i][0] = true;
  }

  for (let j = 0; j <= half; j++) {
    dp[0][j] = false;
  }
  dp[0][0] = true;

  for (let i = 1; i <= nums.length; i++) {
    for (let j = 1; j <= half; j++) {
      dp[i][j] = dp[i - 1][j];
      if (nums[i - 1] <= j) {
        dp[i][j] = (dp[i - 1][j - nums[i - 1]] || dp[i][j]);
      }
    }
  }

  return dp[nums.length][half];
};
