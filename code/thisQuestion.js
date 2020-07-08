
class ThisQuestion{
  constructor() {
    this.name = '李明';
  }
  test() {
    this.name = '小明'
    console.log('testThis', this.name)
    return this.name;
  }
}


ThisQuestion.prototype.name = 'zhangsan';
const question = new ThisQuestion();

console.log(question.test());
console.log(question.name);
console.log('------');
console.log(question.__proto__.name);
console.log(question.__proto__.test());
