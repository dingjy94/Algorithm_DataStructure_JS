class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  isEmpty() {
    return !this.tail;
  }

  peek() {
    return this.head.val;
  }

  add(val) {
    const newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }
  }

  remove() {
    if (this.isEmpty()) {
      throw new Error('The queue is empty!');
    }

    const headVal = this.head.val;
    this.head = this.head.next;

    if (!this.head) {
      this.tail = null;
    }

    return headVal;
  }
}
