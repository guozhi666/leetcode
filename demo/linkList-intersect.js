/**
 * 链表相交
 * 
 * 给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，而不是基于节点的值。
 * 换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。
 * 
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
 * 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 */

const getIntersectionNode = function(headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while(nodeA != nodeB) {
      nodeA = nodeA ? nodeA.next : headB;
      nodeB = nodeB ? nodeB.next : headA;
  }

  return nodeA;
};


//  反转链表
function reverseList(head) {
  const current = head.next;
  const prev = null;
  while(current.next !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
}