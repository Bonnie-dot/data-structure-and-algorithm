import { Stack } from '../stack-link/Stack';
import Node from '../../common/Node';

class BrowserForwardBack {
  private stack: Stack;
  private backStack: Stack;

  constructor () {
    this.stack = new Stack();
    this.backStack = new Stack();
  }

  forward (url: string) {
    this.stack.push(new Node(url));
    this.backStack.clearStack();
  }

  back () {
    const value = this.stack.pop();
    if (value !== -1) {
      this.backStack.push(value);
    } else {
      return -1;
    }
  }

  getValues (): string {
    return this.stack.getData();
  }

  getBackValues (): string {
    return this.backStack.getData();
  }
}

export default BrowserForwardBack;
