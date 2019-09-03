/**
 * lc148 Sort list (https://leetcode.com/problems/sort-list/)
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const merge = (head1, head2) => {
  let fake = new ListNode(null), head = fake;

  while (head1 !== null && head2 !== null) {
    if (head1.val < head2.val) {
      head.next = head1;
      head1 = head1.next;
    } else {
      head.next = head2;
      head2 = head2.next;
    }
    head = head.next;
  }

  if (head1 !== null) {
    head.next = head1;
  }

  if (head2 !== null) {
    head.next = head2;
  }

  return fake.next;
};

var sortList = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head, fast = head, prev = null;
  while (fast !== null && fast.next !== null) {
    prev = slow
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next = null;

  const l1 = sortList(head);
  const l2 = sortList(slow);

  return merge(l1, l2);
};

