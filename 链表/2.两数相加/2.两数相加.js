/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
  let l = new ListNode(0);
  let p1 = l1;
  let p2 = l2;
  let p = l;
  let decade = 0;
  while (p1 || p2) {
      let v1 = p1 ? p1.val : 0;
      let v2 = p2 ? p2.val : 0;
      let sum = v1 + v2 + decade;
      decade = Math.floor(sum / 10);
      p.next = new ListNode(sum % 10);
      if (p1) p1 = p1.next;
      if (p2) p2 = p2.next;
      p = p.next;
  }   
  if (decade) {p.next = new ListNode(decade)}
  return l.next;
};