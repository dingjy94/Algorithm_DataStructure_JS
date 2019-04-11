/**
 * Given n non-negative integers representing the histogram's bar height
 * where the width of each bar is 1,
 * find the area of largest rectangle in the histogram.
 * https://leetcode.com/problems/largest-rectangle-in-histogram/
 *
 * @param {number[]} heights
 * @return {number}
 */

/**
 * 1. We need to caculate areas when each bar is the smallest bar;
 * 2. This means to find the last left bar smaller than current bar,
 *    and first right bar smaller than current bar.
 * 3. right is simple. In order to find the left, maintain a stack,
 *    in which the smaller bar in bottom.
 * 4. loop through bars (from left to right),
 *    if cur bar larger than the one in top of the stack, just push in.
 * 5. If cur bar smaller than top, cur bar is the right bar of the top bar.
 *    The bar under top is the left one.
 */
const largestRectangleArea = function largestRectangleArea(heights) {
  const stack = [];
  let i = 0;
  let maxArea = 0;

  while (i < heights.length) {
    if (!stack.length || heights[i] >= heights[stack[stack.length - 1]]) {
      stack.push(i);
      i += 1;
    } else {
      const top = stack.pop();
      const curArea = heights[top] * (stack.length ? i - stack[stack.length - 1] - 1 : i);
      maxArea = Math.max(maxArea, curArea);
    }
  }

  while (stack.length) {
    const top = stack.pop();
    const curArea = heights[top] * (stack.length ? i - stack[stack.length - 1] - 1 : i);
    maxArea = Math.max(maxArea, curArea);
  }

  return maxArea;
};

export default largestRectangleArea;
