import Node from '../common/Node';

export default class SingleLinked {

    head: Node

    constructor() {
        this.head = new Node('head');
    }

     findLastNode(): Node {
        let currentValue: Node = this.head;
        while (currentValue.next !== null) {
            currentValue = currentValue.next;
        }
        return currentValue
    }

    removeFirstNode() {
        const firstValue = this.head.next;
        this.head.next = firstValue.next;
    }

    getData() {
        let currentNode = this.head.next;
        if (currentNode===null){
            return null;
        }
        const tempArray =[];
        while (currentNode.next!==null){
            tempArray.push(currentNode.data);
            currentNode = currentNode.next;
        }
        tempArray.push(currentNode.data);
        return tempArray.join(',');
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
        return currentValue ? currentValue : null;
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

    reverse() {
        //哨兵节点
        let root = new Node('head');
        let currentValue = this.head.next;
        while (currentValue !== null) {
            const next = currentValue.next;
            currentValue.next = root.next;
            root.next = currentValue;
            currentValue = next;
        }
        this.head = root;
    }

    // 参考（https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/）
    checkCycleStart() {
        let fast = this.head;
        let slow = this.head;
        while (fast !== null && fast.next !== null) {
            slow = slow.next;
            fast = fast.next.next;
            if (slow === fast) {
                break;
            }
        }
        fast = this.head;
        while (fast != slow) {
            fast = fast.next;
            slow = slow.next;
        }
        return fast.data;
    }


    mergeSortedList(list1: SingleLinked, list2: SingleLinked) {
        if (!list1) {
            return list2;
        }
        if (!list2) {
            return list1;
        }
        let root = new Node('head');
        let currentList1 = list1.head.next;
        let currentList2 = list2.head.next;
        let currentRoot = root;
        while (currentList1 !== null && currentList2 !== null) {
            if (currentList1.data <= currentList2.data) {
                currentRoot.next = currentList1;
                currentList1 = currentList1.next;
            } else if (currentList1.data > currentList2.data) {
                currentRoot.next = currentList2;
                currentList2 = currentList2.next;
            }
            currentRoot = currentRoot.next;
        }
        if (currentList1 == null) {
            currentRoot.next = currentList2
        } else {
            currentRoot.next = currentList1;
        }
        return root;
    }

    deleteByLastIndex(index: number) {
        this.reverse();
        let currentValue = this.head.next;
        let pos = 1;
        while (currentValue !== null && pos < index) {
            currentValue = currentValue.next;
            pos++;
        }
        const findValue = this.findByValue(currentValue);
        const previousValue = this.findPreviousValue(currentValue);
        previousValue.next = findValue.next;
        this.reverse();
    }
    // 参考：https://leetcode-cn.com/problems/middle-of-the-linked-list/solution/lian-biao-de-zhong-jian-jie-dian-by-leetcode-solut/
    findMiddleValue() {
        let fast = this.head;
        let slow = this.head;
        while (fast.next !== null) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
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

    clearLink() {
        this.head.next = null;
    }
}
