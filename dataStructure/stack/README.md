# Stack
Stack is a LIFO (last-in-first-out) data structure. Which means for one element, every element added after this element must be removed before this element can be removed. (Think tissues in tissue box, we need to get the tissue on the top first).

## Implement
- [my implement](stack.js).
- Time complexity: `push` and `pop` both O(1).
- We can use JavaScript array to simulate stack, use `push` to push and `pop` to pop.
- This only simulate the 'behavior' (FIFO), JS array is in fact an object, which is just like a hashmap. The time complexity of `pop` and `push` are both O(n), but sometimes need to resize the hashmap, which means O(n).

## Questions
- [ Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [Largest Rectangle in Histogram](https://leetcode.com/problems/largest-rectangle-in-histogram/)[\(my solution\)](/questions/largestRectangleArea.js)

## Resource
- [Data Structures: Stacks and Queues (Youtube)](https://www.youtube.com/watch?v=wjI1WNcIntg)

