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
 var swapPairs = function(head) {
  let l = new ListNode(0);
  l.next = head;
  let p1 = l;
  while(p1.next && p1.next.next) {
      const temp = p1.next;
      const temp2 = p1.next.next;
      p1.next = temp2;
      temp.next = temp2.next;
      temp2.next = temp;
      p1 = temp;
  }
  return l.next;
};