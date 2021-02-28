export class Node {

    data:string;
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

    push(node:Node) {
        const lastNode = this.findLastNode();
        lastNode.next = node;
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
}
