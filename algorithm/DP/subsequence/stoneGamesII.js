// lc1140 stone games II (https://leetcode.com/problems/stone-game-ii/)
// Alex and Lee continue their games with piles of stones.There are a number of piles arranged in a row, and each pile has a positive integer number of stones piles[i].The objective of the game is to end with the most stones.
// Alex and Lee take turns, with Alex starting first.Initially, M = 1.
// On each player's turn, that player can take all the stones in the first X remaining piles, where 1 <= X <= 2M.  Then, we set M = max(M, X).
// The game continues until all the stones have been taken.
// Assuming Alex and Lee play optimally, return the maximum number of stones Alex can get.

/**
 * Basic idea: suffix, store M
 * @param {number[]} piles
 * @return {number}
 */
const dp = (piles, i, M, memo) => {

  if (memo[i] === undefined) {
    memo[i] = new Map();
  }

  if (memo[i].has(M)) {
    return memo[i].get(M);
  }

  let sum = 0;
  for (let n = i; n < piles.length; n++) {
    sum += piles[n];
  }

  if (piles.length - i <= 2 * M) {
    return sum;
  }

  let min = Number.MAX_VALUE;
  for (let x = 1; x <= 2 * M; x++) {
    min = Math.min(min, dp(piles, i + x, Math.max(x, M), memo));
  }

  memo[i].set(M, sum - min);

  return sum - min;
};

var stoneGameII = function (piles) {
  return dp(piles, 0, 1, []);
};
