import {Node, Stack} from "../base-link/Stack";

class BrowserForwardBack {

    private stack: Stack;
    private backStack: Stack;

    constructor() {
        this.stack = new Stack();
        this.backStack = new Stack();
    }

    forward(url: string) {
        this.stack.push(new Node(url));
        this.backStack.clearStack();
    }

    back() {
        const value = this.stack.pop();
        if (value !== -1) {
            this.backStack.push(value);
        } else {
            return -1;
        }

    }

    getValues(): string {
        return this.stack.getValues();
    }

    getBackValues(): string {
        return this.backStack.getValues();
    }
}

export default BrowserForwardBack
