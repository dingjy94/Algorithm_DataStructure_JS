/**
 * Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle and the last position is connected back to the first position to make a circle.
 * It is also called "Ring Buffer".
 * lc622 Design Circle Queue (https://leetcode.com/problems/design-circular-queue/)
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function (k) {
  this.arr = new Array(k).fill(-1);
  this.start = -1;
  this.tail = -1;
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.start === -1 && this.tail === -1) {
    this.start = 0;
    this.tail = 0;
    this.arr[0] = value;
    return true;
  }

  if ((this.tail + 1) % this.arr.length === this.start) {
    return false;
  } else {
    this.tail = (this.tail + 1) % this.arr.length;
    this.arr[this.tail] = value;
    return true;
  }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  if (this.start === -1 && this.tail === -1) {
    return false;
  }

  if (this.start === this.tail) {
    this.arr[this.start] = -1;
    this.start = -1;
    this.tail = -1;
    return true;
  } else {
    this.arr[this.start] = -1;
    this.start = (this.start + 1) % this.arr.length;
    return true;
  }
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.start === -1) {
    return -1;
  } else {
    return this.arr[this.start];
  }
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.tail === -1) {
    return -1;
  } else {
    return this.arr[this.tail];
  }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.start === -1 && this.tail === -1;
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return (this.tail + 1) % this.arr.length === this.start;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
