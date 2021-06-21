/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
  let l = new ListNode(0);
  l.next = head;
  let p1 = l;
  let p2 = l;
  for (let i = 0; i <= n; i++) {
      p2 = p2.next;
  }
  while (p1 && p2) {
      p1 = p1.next;
      p2 = p2.next;
  }
  p1.next = p1.next.next;
  return l.next;
};