/**
 * 单链表插入、删除、查找工作
 * 反转链表
 * 验证是否是环链表
 */

 class Node{
   constructor(element) {
     this.element = element;
     this.next = null;
   }
 }

 class LinkList{
   constructor() {
     this.head = new Node('head');
   };

   // 向链表末尾添加节点
   append(newElement) {
    const newNode = new Node(newElement); // 生成新的节点
    let currentNode = this.head;            // 获取当前的head
    while(currentNode.next) {             
      currentNode = currentNode.next;       // 若head存在next指针，则继续往下寻找，直到找到next为null为止
    }
    currentNode.next = newNode;             // 把新节点添加到链表的末尾
   }

   // 遍历所有链表节点，并输出
   display() {
     let currentNode = this.head.next; // 忽略头节点的数据,因为头节点默认是head
     while(currentNode !== null) {
       console.log(currentNode.element);
       currentNode = currentNode.next;
     }
   }

   // 根据value查找节点
   findByValue(val) {
     let currentNode = this.head.next;
     while(currentNode !== null && currentNode.element !== val) {
       currentNode = currentNode.next;
     }
     console.log(currentNode);
     return currentNode === null ? -1 : currentNode;
   }

   // 根据index查找节点，下标从0开始
   findByIndex(index) {
     let currentNode = this.head.next;
     let pos = 0;
     while(currentNode !== null && pos !== index) {
       currentNode = currentNode.next;
       pos++;
     }
      console.log(currentNode)
      return currentNode === null ? -1 : currentNode  
   }

   // 在指定元素后插入新的节点；
   insert(newElement, element) {
     const currentNode = this.findByValue(element);
     if(currentNode === -1) {
        console.log('未找到插入位置');
        return;
     }
     const newNode = new Node(newElement);
     newNode.next = currentNode.next;
     currentNode.next = newNode;
   }

   // 查找指定元素前一个节点(为删除节点做铺垫)
   findBeforeVal(val) {
     let currentNode = this.head;
     while(currentNode.next !== null && currentNode.next.element !== val) {
       currentNode = currentNode.next;
     }
     if(currentNode.next !== null) {
       return currentNode;
     }
   }

   // 根据值删除指定节点
   remove(val) {
     let nodeVal = this.findBeforeVal(val);
     if(nodeVal !== -1) {
       nodeVal.next = nodeVal.next.next;
     } else {
       console('找不到指定元素');
       return;
     }
   }

   // 反转单链表， 尾插法
   reverseList() {
     const root = new Node('head');   // 获取链表头节点
     let currentNode = this.head.next;  // 头节点一般为空，所以寻找下一个节点
     while(currentNode !== null) {
       const next = currentNode.next;   // 保留当前节点的next指针指向
       currentNode.next = root.next;    // 把当前节点的next指针指向修改为前一个节点
       root.next = currentNode;     // 把修改好的节点添加到新的链表末尾
       currentNode = next;    // 把前面保留的下一个指针节点赋值给currentNode,继续判断
     }
     this.head = root;  // 当为null时，说明是当前节点是链表的最后一个节点，或者是该链表为空链表，所以置为null
   }

   /**
    * 验证是否是环链表
    * 借助快慢两个指针，当若非环形链表，则不会相同
    */
   checkCircle() {
     let fast = this.head.next;
     let slow = this.head;
     while(fast !== null && fast.next !== null) {
       fast = fast.next.next;
       slow = slow.next;
       if(fast === slow) {
         console.log(true);
         return true;
       }
     }
     console.log(false);
     return false;
   }

   /**
    * 删除倒数第n个节点
    * 1）先把链表反转，相当于删除正数第n个数据
    */
   removeByIndexFromEnd(index) {
     //务必先判断是否是 环链表
      if(this.checkCircle()) return false
      let pos = 1
      this.reverseList()
      let currentNode = this.head.next
      while (currentNode !== null && pos < index) {
        currentNode = currentNode.next
        pos++
      }
      if (currentNode === null) {
        console.log('无法删除最后一个节点或者该节点不存在')
        return false
      }
      this.remove(currentNode.element)
      this.reverseList()
    }

    // 求中间节点
    findMiddleNode() {
      let fast = this.head
      let slow = this.head
      while (fast.next !== null && fast.next.next !== null) {
        fast = fast.next.next
        slow = slow.next
      }
      console.log(slow)
      return slow
    }
 }

 const List = new LinkList();
 List.append('one');
 List.append('two');
 List.append('three');
//  List.findByValue('one');

 List.insert('create', 'two');
 List.display();
console.log('------item-------');
 List.remove('three');
 List.reverseList();
 List.display();
 List.checkCircle();

 List.findMiddleNode();
