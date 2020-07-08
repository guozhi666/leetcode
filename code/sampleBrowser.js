/**
 * 使用前后栈实现浏览器的前进后退
 */

const stack = require('./stackByLineList');

class SampleBrowser{
  constructor() {
    this.normalStack = new stack.createdStrck();
    this.backStack = new stack.createdStrck();
  }

  pushNormal(val) {
    this.normalStack.push(val);
    this.backStack.clear();
    this.displayAllStack();
  }

  back() {
    //  后退时，从前进栈中取出最顶部，然后放在回退栈内
    const val = this.normalStack.pop();
    if(val !== -1) {
      this.backStack.push(val);
      this.displayAllStack();
    } else {
      console.log('无法后退');
    }
  }

  frount() {
    //  前进时，从后退栈内取出最顶部放在前进栈内
    const val = this.backStack.pop();
    if(val !== -1) {
      this.normalStack.push(val);
      this.displayAllStack();
    } else {
      console.log('无法前进')
    }
  }

  displayAllStack() {
    console.log('-----后退页面-----')
    this.backStack.display();
    console.log('-----浏览页面-----')
    this.normalStack.display();
  }
}

const sampleBrowser = new SampleBrowser();
sampleBrowser.pushNormal(1);
sampleBrowser.pushNormal(2);
sampleBrowser.pushNormal(3);
sampleBrowser.pushNormal(4);

sampleBrowser.back();
sampleBrowser.pushNormal(5);
sampleBrowser.back();
sampleBrowser.frount();
