class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class linkedList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  /**
   * add node to end of linked list
   * @param {Node} node
   * @return {linkedList} - return the whole linked list
   */

  add(node) {
    if (!this.head) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }

      cur.next = node;
    }

    this.size += 1;

    return this;
  }

  /**
   * insert node into specific position
   * @param {Node} node
   * @param {Number} index
   * @return {linkedList} - return the whole linked list
   */
  insertAt(node, index) {
    if (index > 0 && index > this.size) {
      return null;
    }

    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let cur = this.head;
      let prev = null;
      let count = 0;

      while (count < index) {
        count++;
        prev = cur;
        cur = cur.next;
      }

      prev.next = node;
      node.next = cur;
    }

    size += 1;
    return this;
  }

  /**
   * remove the last node of linked list
   * @return {Node} - return the removed node
   */
  remove() {
    if (!this.size) {
      return null;
    }

    if (this.size === 1) {
      const tail = this.head;
      this.head = null;

      return tail;
    }

    let cur = this.head;
    let prev = null;

    while (cur.next) {
      prev = cur;
      cur = cur.next;
    }

    prev.next = null;
    this.size -= 1;
    return cur;
  }

  /**
   * delete the first node whose value equals to given value
   * @param {*} val
   * @return {Node} - return the deleted node
   */
  delete(val) {
    if (!this.size) {
      return null;
    }

    if (this.head.val === val) {
      const tmp = this.head;
      this.head = this.head.next;
      return tmp;
    }

    let cur = this.head;
    let prev = null;

    while (cur) {
      if (cur.val === val) {
        prev.next = cur.next;
        return cur;
      }

      prev = cur;
      cur = cur.next;
    }

    return null;
  }

  isEmpty() {
    return !this.size;
  }

  length() {
    return this.size();
  }

  toString() {
    let cur = this.head;
    let str = '';

    while (cur) {
      if (!str) {
        str += cur.val;
      } else {
        str += ` -> ${cur.val}`;
      }

      cur = cur.next;
    }

    return str;
  }
}
