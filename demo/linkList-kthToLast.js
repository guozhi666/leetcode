/**
 * 实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
 */

 /**
  * 方案一：双指针
  * 1.借用左右指针，右指针先向右走k个节点
  * 2.然后左右指针一起向右走，当右指针到达尾节点时，左指针就是倒数第k个节点
  */

 function kthToLast(head, k) {
  let left = head;
  let right = head;
  while(k > 0) {
      right = right.next;
      k--;
  }

  while(right !== null) {
      left = left.next;
      right = right.next;
  }
  return left.val
};

/**
 * 方案二：
 * 1.先反转链表，
 * 2.其次再从左到右查找第k个节点的值
 */

// function kthToLastTwo(head, k) {
//   let current = head.next;
//   let prev = null;
//   while(current.next !== null) {
//     const nextNode = current.next;
//     current.next = prev;
//     prev = current;
//     current = nextNode;
//   }

//   let count = 1;
//   while(urrent.next !== null && count < k) {

//   }
// }
