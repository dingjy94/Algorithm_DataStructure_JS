/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (head === null) {
    return null;
  }

  let cur = head;
  while (cur !== null) {
    const newNode = new Node(cur.val);
    newNode.next = cur.next;
    cur.next = newNode;
    cur = newNode.next;
  }

  cur = head;

  while (cur !== null) {
    cur.next.random = (cur.random !== null) ? cur.random.next : null;
    cur = cur.next.next;
  }

  const newHead = head.next;
  let oldPointer = head;
  let newPointer = head.next;
  while (oldPointer !== null) {
    oldPointer.next = oldPointer.next.next;
    newPointer.next = newPointer.next ? newPointer.next.next : null;
    oldPointer = oldPointer.next;
    newPointer = newPointer.next;
  }

  return newHead;
};
