import { Node, OrderType } from '../Node';

export class SearchBinaryTree {
    root: Node | null;
    printedData: number[] = [];

    insert(data: number) {
        const node = new Node(data);
        let parent: Node | null = null;
        let current = this.root;
        // 1. Find the parent node
        while (current) {
            parent = current;
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        // 2. Insert the node
        if (!parent) {
            this.root = node;
        } else if (data < parent.data) {
            parent.left = node;
        } else {
            parent.right = node;
        }
    }

    find(data: number): Node | undefined {
        let current = this.root;
        while (current) {
            if (current.data > data) {
                current = current.left;
            } else if (current.data < data) {
                current = current.right;
            } else {
                return current;
            }
        }
        return;
    }

    findParent(data: number): Node | undefined {
        let current: Node | null = this.root;
        if (!current?.left && !current?.right) {
            return;
        }
        let parent: Node = current;
        while (current) {
            if (current.data > data) {
                parent = current;
                current = current.left;
            } else if (current.data < data) {
                parent = current;
                current = current.right;
            } else {
                return parent;
            }
        }
        return;
    }

    delete(value: number) {
        const parentNode = this.findParent(value);
        if (!parentNode) {
            if (this.root?.data === value) {
                this.root = null;
            }
            return;
        }
        const findNode =
            parentNode?.left?.data === value
                ? parentNode.left!
                : parentNode.right!;
        // If the node has no child or one child, delete it directly.
        if (!findNode.left || !findNode.right) {
            this.deleteWithNoChildOrOneChild(parentNode, findNode);
        } else {
            // If the node has two child nodes, delete it with the minimum node from right subtree.
            this.deleteWithTwoChild(findNode);
        }
    }

    deleteWithNoChildOrOneChild(parentNode: Node, node: Node) {
        let child: Node | null;
        if (node.left) {
            child = node.left;
        } else if (node.right) {
            child = node.right;
        } else {
            child = null;
        }
        if (parentNode.left === node) {
            parentNode.left = child;
        } else {
            parentNode.right = child;
        }
    }
    /**
     * Delete a node that has two child nodes
     * Why choose the minimum node from right subtree (or maximum node from left subtree)?
     * Minimum node from right subtree:
     * It's the leftmost node in the right subtree
     *  Its value is greater than all nodes in left subtree but smaller than other nodes in right subtree
     *  Replacing the deleted node with this value maintains BST properties
     * Maximum node from left subtree:
     * It's the rightmost node in the left subtree
     * Its value is smaller than all nodes in right subtree but greater than other nodes in left subtree
     * Replacing the deleted node with this value also maintains BST properties
     * We typically choose the minimum node from right subtree because implementation is simpler
     * (just need to traverse left continuously)
     * Here we choose the minimum node from right subtree.
     * @param node
     */
    deleteWithTwoChild(node: Node) {
        let current = node.right;
        let leftParent;
        while (current?.left) {
            leftParent = current;
            current = current.left;
        }
        // Because node has two child nodes, so current is not null.
        node.data = current!.data;
        leftParent!.left = null;
    }
    /**
     * Find the maximum value in the binary search tree
     * In a BST, the maximum value is always found by following the rightmost path
     */
    findMaxNode(): number {
        let current = this.root;
        if (!current?.right) {
            return current!.data;
        }
        while (current?.right) {
            current = current.right;
        }
        return current.data;
    }
    /**
     * Find the minimum value in the binary search tree
     * In a BST, the minimum value is always found by following the leftmost path
     */
    findMinNode(): number {
        let current = this.root;
        if (!current?.left) {
            return current!.data;
        }
        while (current?.left) {
            current = current.left;
        }
        return current!.data;
    }
    /**
     * Traverse the binary search tree by order type
     * Default order type is @see OrderType.LEVEL_ORDER
     */
    traversalByOrderType(orderType: OrderType = OrderType.LEVEL_ORDER) {
        this.printedData = [];
        this._traversalByOrderType(this.root, orderType);
        return this.printedData;
    }
    _traversalByOrderType(
        node: Node | null,
        orderType: OrderType = OrderType.IN_ORDER,
    ) {
        if (!node) {
            return;
        }
        if (!node.left && !node.right) {
            this.printedData.push(node.data);
            return;
        }

        switch (orderType) {
            case OrderType.PRE_ORDER:
                this.printedData.push(node.data);
                this._traversalByOrderType(node.left, OrderType.PRE_ORDER);
                this._traversalByOrderType(node.right, OrderType.PRE_ORDER);
                break;
            case OrderType.IN_ORDER:
                this._traversalByOrderType(node.left, OrderType.IN_ORDER);
                this.printedData.push(node.data);
                this._traversalByOrderType(node.right, OrderType.IN_ORDER);
                break;
            case OrderType.POST_ORDER:
                this._traversalByOrderType(node.left, OrderType.POST_ORDER);
                this._traversalByOrderType(node.right, OrderType.POST_ORDER);
                this.printedData.push(node.data);
                break;
            case OrderType.LEVEL_ORDER:
                const queue: Node[] = [node];
                while (queue.length > 0) {
                    const current = queue.shift();
                    this.printedData.push(current!.data);
                    if (current!.left) {
                        queue.push(current!.left);
                    }
                    if (current!.right) {
                        queue.push(current!.right);
                    }
                }
                break;
        }
    }
}
