/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let p = head;
  let p1 = null;
  while (p) {
     const temp = p.next;
     p.next = p1;
     p1 = p;
     p = temp;
  }
  return p1;
};