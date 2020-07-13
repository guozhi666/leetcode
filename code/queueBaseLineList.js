/**
 * 基于链表实现的队列
 */

class Node{
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class QueueBaseLineList{
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(val) {
    const node = new Node(val);
    if(this.head === null) {
      this.head = node;
      console.log('入队：', node.val);
    } else {
      let prev = this.head;
      while(prev.next !== null) {
        prev = prev.next;
      }
      prev.next = node;
      console.log('入队：', node.val);
    }
  }

  pop() {
    const nextNode = this.head;
    if(nextNode !== null) {
      this.head = nextNode.next;
      console.log('出队：',nextNode.val);
    } else {
      console.log('当前队列没有数据');
    }
  }

  display() {
    let prev = this.head;
    while(prev !== null) {
      console.log('队列数据：', prev.val);
      prev = prev.next;
    }
  }
}

function baseTest() {
  const queueBaseLineList = new QueueBaseLineList();

  queueBaseLineList.push(1);
  queueBaseLineList.push(2);
  queueBaseLineList.pop();
  queueBaseLineList.push(3);
  queueBaseLineList.push(4);
  queueBaseLineList.pop();
  
  queueBaseLineList.display();
}

baseTest();

