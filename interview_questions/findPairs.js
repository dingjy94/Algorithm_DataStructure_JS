/** 
 * https://leetcode.com/discuss/interview-question/373202
 * Given 2 lists a and b. Each element is a pair of integers where the first integer represents the unique id and the second integer represents a value. 
 * Your task is to find an element from a and an element form b such that the sum of their values is less or equal to target and as close to target as possible. 
 * Return a list of ids of selected elements. If no pair is possible, return an empty list.
 * Example:
 * Input:
 * a = [[1, 3], [2, 5], [3, 7], [4, 10]]
 * b = [[1, 2], [2, 3], [3, 4], [4, 5]]
 * target = 10
 *
 * Output: [[2, 4], [3, 2]]
 */
 
const sortPair = (a, b) => {
  return a[1] - b[1];
};

const getPairs = (a, b, target) => {
  a.sort(sortPair);
  b.sort(sortPair);
  let result = [];

  let max = Number.MIN_VALUE;
  let i = 0, j = b.length - 1;
  
  while (i < a.length && j >= 0) {
    let sum = a[i][1] + b[j][1];

    if (sum > target) {
      j -= 1;
      continue;
    }

    if (sum >= max) {
      if (sum > max) {
        result = [];
        max = sum;
      }

      result.push([a[i][0], b[j][0]]);

      let bLeft = j - 1;
      while (bLeft >= 0 && b[bLeft][1] === b[j][1]) {
        result.push([a[i][0], b[bLeft][0]]);
      }
    }

    i += 1;
  }

  return result;
}
