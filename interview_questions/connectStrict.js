/**
 * @param {number[]} sticks
 * @return {number}
 */
var connectSticks = function (sticks) {
  if (sticks.length === 1) {
    return 0;
  }

  sticks.sort((a, b) => a - b);

  let sum = [], result = 0;

  while (sticks.length || (sum.length > 1)) {
    let cur = 0;
    for (let i = 0; i < 2; i++) {
      if (sticks[0] && (sum[0] === undefined || (sticks[0] < sum[0]))) {
        cur += sticks[0];
        sticks.shift();
      } else {
        cur += sum[0];
        sum.shift();
      }
    }

    sum.push(cur);
    result += cur;
  }

  return result;
};
