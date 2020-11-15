import Node from './Node';

export default class SingleLinked {

    head: Node

    constructor() {
        this.head = new Node('head');
    }

    private findLastNode(): Node {
        let currentValue: Node = this.head;
        while (currentValue.next !== null) {
            currentValue = currentValue.next;
        }
        return currentValue
    }

    display() {
        return JSON.stringify(this.head);
    }

    /**
     * append after the last node
     * @param node
     */
    append(node: Node) {
        const lastNode = this.findLastNode();
        lastNode.next = node;
    }

    findByValue(node: Node): Node {
        let currentValue = this.head.next;
        while (currentValue !== null && currentValue !== node) {
            currentValue = currentValue.next;
        }
        return currentValue === null ? null : currentValue;
    }

    /**
     * remove a given node
     * @param node
     */
    remove(node: Node) {
        const previousNode = this.findPreviousValue(node);
        if (previousNode) {
            previousNode.next = previousNode.next.next;
        } else {
            throw new Error(`not found ${node}`);
        }
    }

    private findPreviousValue(node: Node): Node {
        let currentValue = this.head;
        //  check first node
        if (this.head.next === node) {
            return currentValue;
        }
        while (currentValue.next !== null && currentValue.next.next !== node) {
            currentValue = currentValue.next;
        }
        return currentValue ? null : currentValue;
    }

    /**
     * insert a new node before a given node
     * @param newNode
     * @param node
     */
    insert(newNode: Node, node: Node) {
        const previousValue = this.findPreviousValue(node);
        if (previousValue) {
            newNode.next = previousValue.next;
            previousValue.next = newNode;
        } else {
            throw new Error('not found node');
        }
    }
}
