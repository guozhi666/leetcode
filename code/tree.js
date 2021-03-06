/**
 * 生成二叉树、遍历二叉树
 * 前序遍历  输出顺序：该节点、左子节点、右子节点
 * 中序遍历  输出顺序：左子节点、该节点、右子节点
 * 后序遍历  输出顺序：左子节点、右子节点、该节点
 */

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class SearchTree {
  constructor() {
    this.root = null;
  }

  insert(num) {
    const node = new Node(num);
    if(this.root === null) {
      this.root = node;
      return;
    }
    const prent = this.getPrev(num);
    if(num < prent.val) {
      prent.left = node;
    } else {
      prent.right = node;
    }
  }

  getPrev(num, find = false) {
    let point = this.root;
    let res = [];
    while(true) {
      if(point.left) {
        if(num < point.left.val || num < point.val) {
          point = point.left;
          continue;
        }
      }

      if(point.right) {
        if(num >= point.right.val || num >= point.val) {
          if(find && num === point.val) {
            res.push(point.val);
          }
          point = point.right;
          continue;
        }
      }
      if(find) {
        if(point.val === num) {
          res.push(point.val);
        }
        if(res.length === 0) {
          return null;
        }
        if(res.length === 1) {
          return res[0];
        }
        return res;
      }
      return point;
    }
  }

  find(num) {
    if(this.root === null) {
      this,root = node;
      return;
    }
    return this.getPrev(num, true)
  }

  remove(num) {
    let point = this.root;
    let prent = null;
    let tree = this;

    let res = null;
    while(true) {
      if(point.left) {
        if(num < point.left.val || num < point.val) {
          prent = point;
          point = point.left;
          continue;
        }
      }

      if(point.right) {
        if(num >= point.right.val || num >= point.val) {
          if(num === point.val) {
            delMethod(point, prent);
            if(prent === null) {
              point = this.root;
            } else {
              prent = prent;
              point = prent.right;
            }
            res = true;
            continue;
          }
          prent = point;
          point = point.right;
          continue;
        }
      }

      if(point.val === num) {
        res = true;
        delMethod(point, prent)
      }
      break;
    }
    return res;

    function delMethod(delNode, prent) {
      let p = delNode;
      let pp = prent;
      if(p.left !== null && p.right !== null) {
        let minP = p.right;
        let minPP = p;
        while(minP.left !== null) {
          minPP = minP;
          minP = minP.left;
        }
          
        p.val = minP.val;
        p = minP;
        pp = minPP;
      }

      let child;
      if(p.left !== null) child = p.left;
      else if(p.right !== null) child = p.right;
      else child = null;

      if(pp === null) tree.root = child;
      else if(pp.left === p) pp.left = child;
      else pp.right = child;
    }
  }

  print() {
    let point = this.root;

    //  前序遍历
    // if(point) {
    //   console.log(point.val, 'one');
    //   pointAll(point.left);
    //   pointAll(point.right);
    // }
    // function pointAll(val) {
    //   if(val === null) {
    //     return;
    //   }
    //   console.log(val.val, 'two');
    //   pointAll(val.left);
    //   pointAll(val.right);
    // }

    //  中序遍历
    if(point) {
      pointAll(point.left);
      console.log(point.val, 'one');
      pointAll(point.right);
    }
    function pointAll(val) {
      if(val === null) {
        return;
      }
      pointAll(val.left);
      console.log(val.val, 'two');
      pointAll(val.right);
    }

    //  后序遍历
    // if(point) {
    //   pointAll(point.left);
    //   pointAll(point.right);
    //   console.log(point.val, 'one');
    // }
    // function pointAll(val) {
    //   if(val === null) return;
    //   pointAll(val.left);
    //   pointAll(val.right);
    //   console.log(val.val, 'two');
    // }
  }
}

function baseTest() {
  const searchTree = new SearchTree();
  console.log('step:1-----------------------');
  searchTree.insert(40);
  searchTree.insert(11);
  searchTree.insert(2);
  searchTree.insert(30);
  searchTree.insert(46);
  searchTree.insert(12);
  searchTree.insert(5);
  searchTree.insert(13);
  searchTree.insert(30);

  searchTree.insert(4);
  searchTree.insert(1);
  searchTree.insert(2);
  searchTree.insert(5);

  // // searchTree.print();
  // console.log('find', searchTree.find(5));
  // console.log('find-proto', searchTree.find);
}

function delTest() {
  const searchTree = new SearchTree();
  console.log('step:2-----------------------');
  searchTree.insert(40);
  searchTree.insert(11);
  searchTree.insert(2);
  searchTree.insert(30);
  searchTree.insert(46);
  searchTree.insert(12);
  searchTree.insert(5);
  searchTree.insert(13);
  searchTree.insert(30);

  searchTree.print();
  searchTree.remove(30)
  console.log('----------------------------------------');
  searchTree.print();
}

// baseTest();
// delTest();