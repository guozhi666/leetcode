/**
 * 最近本的散列表（哈希表）
 */

class HashTable{
  constructor() {
    this.table = [];
  }

  loseHashCode(key) {
    let hash = 0;
    for(let i = 0; i < key.length; i++) {
      hash+=key.charCodeAt(i);
    }
    return hash%37;
  }

  //  添加新项
  put(key, val) {
    let position = this.loseHashCode(key);
    console.log(position+'-'+key, val);
    this.table[position] = val;
  }

  //  根据key删除
  remove(key) {
    this.table[this.loseHashCode(key)] = undefined;
  }

  //  根据key查找制定的值
  find(key) {
    console.log(this.table[this.loseHashCode(key)]);
  }

  //  遍历散列表
  prent() {
    const { table } = this;
    console.log('tableLength:', table.length);
    for(let i = 0; i < table.length; i++) {
      if(table[i] !== undefined) {
        console.log(i+':'+table[i]);
      }
    }
  }
}

function baseTest() {
  const hashTable = new HashTable();
  hashTable.put('Gandalf', 'gandalf@email.com');
  hashTable.put('Ganalf', 'ganalf@email.com');
  hashTable.put('John', 'johnsnow@email.com');
  hashTable.put('Tyrion', 'tyrion@email.com');
  console.log('=====================')
  hashTable.prent()
}

baseTest();