class Node {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

export default class Stack {
  constructor () {
    this.top = null;
  }

  isEmpty() {
    return !this.top;
  }

  peek() {
    return this.top.val;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.top) {
      newNode.next = this.top;
    }
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('The stack is empty');
    }

    const curVal = this.top.val;
    this.top = this.top.next;
    return curVal;
  }
}
