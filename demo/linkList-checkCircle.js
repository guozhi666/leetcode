/**
 * 面试题 02.08. 环路检测
 * 
 * 给定一个有环链表，实现一个算法返回环路的开头节点。
 * 有环链表的定义：在链表中某个节点的next元素指向在它前面出现过的节点，则表明该链表存在环路。
 * 
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
var detectCycle = function(head) {
  if(head.next === null) return false; 
  let fast = head.next;
  let slow = head;
  while(fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if(fast === slow) {
          return fast;
      }
  }
  return -1  
};