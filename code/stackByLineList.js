/**
 * 基于链表实现的栈
 */

class Node{
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class StackByLineList{
  constructor() {
    this.top = null;
  }

  push(val) {
    const node = new Node(val);
    if(this.top === null) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }
  }

  pop() {
    if(this.top === null) {
      return -1;
    }
    const val = this.top.element;
    this.top = this.top.next;
    return val;
  }

  //  下面是为了实现浏览器前进后退效果
  clear() {
    this.top = null;
  }

  display() {
    if(this.top !== null) {
      let temp = this.top;
      while(temp!== null) {
        console.log(temp.element);
        temp = temp.next
      }
    }
  }
}

function baseTest() {
  const stackByLineList = new StackByLineList();
  stackByLineList.push(1);
  stackByLineList.push(2);
  stackByLineList.push(3);
  stackByLineList.push(4);
  
  // stackByLineList.display();
  
  let res = 0;
  while(res !== -1) {
    res = stackByLineList.pop();
    console.log(res);
  }
}

// baseTest();


exports.createdStrck = StackByLineList;