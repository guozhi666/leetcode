/**
 * 联系第二遍，加深印象
 * 1.首先创建一个类来生成每个node节点；
 * 2.通过不断遍历每个节点以及节点的next来进行增删改查
 */

class Node{
  constructor(element){
    this.element = element;
    this.next = null;
  }
}

class lineList{
  //  默认链表第一个节点都是head
  constructor() {
    this.head = new Node('head');
  }

  /**
   * 在末尾添加新的链表节点
   * @param {*} newElement 需要添加的节点内容
   * 首先通过while来遍历链表找到最后一个节点，即 next=null
   * 然后把最后一个节点的next指向新的节点
   */
  append(newElement) {
    const newNode = new Node(newElement);
    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  /**
   * 遍历链表所有的节点
   * 首先判断跟节点head是否有子节点，有的话就输出该节点内容，然后继续遍历下一个节点
   */
  display() {
    let currentNode = this.head.next;
    while(currentNode) {
      console.log(currentNode.element);
      currentNode = currentNode.next
    }
  }

  /**
   * 删除最后一个节点
   */
  deleteEnd() {
    let currentNode = this.head;
    while(currentNode.next !== null && currentNode.next.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
  }
}

const List = new lineList();

List.append('chijie');
List.append('baimeng');
List.append('shuyue');
List.append('Fruit');
List.append('lili');

List.display();
List.deleteEnd();
console.log('----------------------------');
List.display();
