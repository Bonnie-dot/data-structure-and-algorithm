export class Node {

    data: string;
    next: Node;

    constructor(data: string) {
        this.data = data;
        this.next = null;
    }
}

export class Stack {

    head = new Node('head');

    constructor() {
    }

    push(node: Node) {
        const lastNode = this.findLastNode();
        lastNode.next = node;
    }

    pop() {
        const previousNode = this.findPreviousNode(this.findLastNode());
        if (previousNode) {
            const popValue = previousNode.next;
            previousNode.next = null;
            return popValue;
        } else {
            return -1;
        }
    }

    getValues() {
        return JSON.stringify(this.head);
    }

    findLastNode() {
        let currentNode = this.head;
        while (currentNode.next !== null) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    findPreviousNode(node: Node) {
        let currentValue = this.head;
        let nextValue = currentValue.next;
        if (nextValue === node) {
            return currentValue;
        }
        while (currentValue.next !== null && nextValue !== node) {
            currentValue = currentValue.next;
            nextValue = currentValue.next;
        }

        if (currentValue.next !== null) {
            return currentValue;
        } else {
            return null;
        }
    }
}
