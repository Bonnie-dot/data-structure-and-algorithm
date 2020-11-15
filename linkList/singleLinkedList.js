/**
 * 单链表 CRUD
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SingleLinkedList {

    constructor() {
        this.head = new Node('head');
    }

    findByValue(node) {
        let currentValue = this.head.next;
        while (currentValue !== null && currentValue !== node) {
            currentValue = currentValue.next;
        }
        return currentValue ? currentValue : -1;
    }

    /**
     * append after the last node
     * @param node
     */
    append(node) {
        let currentValue = this.head;
        while (currentValue.next) {
            currentValue = currentValue.next;
        }
        currentValue.next = node;
    }

    /**
     * insert after the new node
     * @param newNode
     * @param node
     */
    insert(newNode, node) {
        let value = this.findByValue(node);
        if (value === -1) {
            return -1;
        } else {
            newNode.next = value.next;
            value.next = newNode;
        }
    }

    remove(node) {
        const previousValue = this.findPreviousByValue(node);
        if (previousValue !== -1) {
            previousValue.next = node.next.next;
        }

    }

    findPreviousByValue(node) {
        let currentValue = this.head.next;
        if (currentValue.next !== null && currentValue.next.data !== node) {
            currentValue = currentValue.next;
        }
        return currentValue.next === null ? -1 : currentValue;
    }
}

//test
const singleLinkedList = new SingleLinkedList();
singleLinkedList.append(new Node(1));
let node = new Node(2);
singleLinkedList.append(node);

singleLinkedList.insert(new Node(3), node);
singleLinkedList.remove(node);
console.log(JSON.stringify(singleLinkedList.head));
