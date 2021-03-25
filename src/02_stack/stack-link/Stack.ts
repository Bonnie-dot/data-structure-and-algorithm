import Node from "../../common/Node";
import SingleLinked from "../../01_linkList/SingleLinked";

export class Stack {

    private singLink = new SingleLinked();

    constructor() {
    }

    push(node: Node) {
        const lastNode = this.singLink.findLastNode();
        lastNode.next = node;
    }

    pop() {
        const previousNode = this.singLink.findPreviousNode(this.singLink.findLastNode());
        if (previousNode) {
            const popValue = previousNode.next;
            previousNode.next = null;
            return popValue;
        } else {
            return -1;
        }
    }

    getData() {
        return this.singLink.getData();
    }

    clearStack (){
        this.singLink.clearLink();
    }
}
