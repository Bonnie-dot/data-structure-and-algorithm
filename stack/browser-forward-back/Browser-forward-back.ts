import {Node, Stack} from "../base-link/Stack";

class BrowserForwardBack {

    stack: Stack;
    backStack :Stack;

    constructor() {
        this.stack = new Stack();
    }

    forward(url: string) {
        this.stack.push(new Node(url));
    }

    back(){
        this.stack.pop();
        this.backStack.push()
    }

    getValues(): string {
        return this.stack.getValues();
    }

    getBackValues() :string {
        return this.backStack.getValues();
    }

}
export default  BrowserForwardBack
