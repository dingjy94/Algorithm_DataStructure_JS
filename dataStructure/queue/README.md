# Queue
Queue is a FIFO (First-In-First-Out) data structure, just like a real world queue. This means for one element, every elements added to queue before it have to be removed before that element can be removed.

## Implement
- [my implement](queue.js)
- Performance: add O(1), remove O(1)
- In JavaScript, we can use array to simulate queue, use `shift` to remove and `push` to add new element.
- This only simulate the 'behavior' (FIFO), JS array is in fact an object, which is just like a hashmap. The time complexity of `shift` is O(n)(remodify indexes every time) and `push` is O(1) (sometime need to resize the hashtable, which means O(n)). However, in most JS enginee, these methods have been optimized, so they may even run faster.

- [circle queue](circleQueue.js): One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

## Questions

## Resource
- [Data Structures: Stacks and Queues (Youtube)](https://www.youtube.com/watch?v=wjI1WNcIntg)

