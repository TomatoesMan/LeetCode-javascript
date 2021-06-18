/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  let l = new ListNode(0);
  l.next = head;
  p = l;
  for (let i = 0; i < left - 1; i++) {
      p = p.next;
  }
  let cur = p.next;
  for (let i = 0; i < right - left; i++) {
     const remove = cur.next;
     cur.next = cur.next.next;
     remove.next = p.next;
     p.next = remove;
  }
  return l.next;
};