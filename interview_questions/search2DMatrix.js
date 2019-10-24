/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {

  const searchHelper = (left, right, up, down) => {
    if (left > right || up > down) {
      return false;
    }

    if (target < matrix[up][left] || target > matrix[down][right]) {
      return false;
    }

    let mid = (left + Math.floor((right - left) / 2));

    let row = up;

    while (row <= down && matrix[row][mid] <= target) {
      if (matrix[row][mid] === target) {
        return true;
      }

      row += 1;
    }

    return searchHelper(left, mid - 1, row, down) || searchHelper(mid + 1, right, up, row - 1);
  };

  if (matrix === null || matrix.length === 0) {
    return false;
  }

  return searchHelper(0, matrix[0].length - 1, 0, matrix.length - 1);
};
