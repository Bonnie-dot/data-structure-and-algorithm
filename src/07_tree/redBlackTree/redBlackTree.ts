import { OrderType } from '../Node';

enum Color {
    RED = 'RED',
    BLACK = 'BLACK',
}

class RBNode<T> {
    data: T;
    color: Color;
    left: RBNode<T> | null;
    right: RBNode<T> | null;
    parent: RBNode<T> | null;
    printedData: T[] = [];
    constructor(data: T, color: Color = Color.RED) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

export class RedBlackTree<T> {
    root: RBNode<T> | null = null;
    NIL: null;
    printedData: string[] = [];
    constructor() {
        // NIL node is a sentinel node that is used to simplify the implementation.
        this.NIL = null;
        this.root = this.NIL;
    }

    insert(data: T) {
        const node = new RBNode(data);
        node.left = this.NIL;
        node.right = this.NIL;
        let current: RBNode<T> | null = this.root;
        let parent: RBNode<T> | null = null;
        // 1. Find leaf node to insert the new node
        while (current !== this.NIL) {
            parent = current;
            if (data < current!.data) {
                current = current!.left ?? this.NIL;
            } else {
                current = current!.right ?? this.NIL;
            }
        }
        // 2. Insert the new node
        node.parent = parent;
        if (parent === null) {
            this.root = node;
        } else if (data < parent.data) {
            parent.left = node;
        } else {
            parent.right = node;
        }
        this.fixInsert(node);
    }

    fixInsert(node: RBNode<T> | null) {
        while (node && node.parent && node.parent?.color === Color.RED) {
            const grandParent = node.parent.parent;
            if (grandParent === this.NIL) {
                break;
            }
            if (node.parent === grandParent?.left) {
                const uncle = grandParent?.right;
                // Case1: Node's uncle is red
                if (uncle?.color === Color.RED) {
                    /**
                     *       Ancestor (B)                                     Ancestor(R)
                     *         /     \                                          /     \
                     *  Parent (R)  Uncle (R)  --------Color--------------> Parent (B)  Uncle (B)
                     *                   /                                                  /
                     *                    Node (R)                                        Node (R)
                     */

                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandParent.color = Color.RED;
                    node = grandParent;
                } else {
                    /**
                     *   Ancestor (B)                                Ancestor (B)
                     *      /                                         /
                     *   Parent (R)    ---Rotate Left------>       Node (R)
                     *       \                                      /
                     *     Node (R)                              Parent (R)
                     */
                    if (node === node.parent.right) {
                        node = node.parent;
                        this.rotateLeft(node);
                    }
                    /**
                     *  Ancestor(B)                           Ancestor (R)
                     *     /                                     /
                     * Node(R)    --------Color------>     Node(B) ---------Rotate Right----------->  Node (B)
                     *    /                                    /                                    /        \
                     *  Parent(R)                           Parent(R)                           Parent(R)  Ancestor(R)
                     */

                    //Node refer to Parent
                    node.parent!.color = Color.BLACK;
                    grandParent!.color = Color.RED;
                    this.rotateRight(grandParent);
                }
            } else {
                const uncle = grandParent?.left;
                if (uncle?.color === Color.RED) {
                    /**
                     *       Ancestor (B)                                     Ancestor(R)
                     *         /     \                                          /     \
                     *  Uncle (R)  Parent (R)  --------Color--------------> Uncle (B)  Parent (B)
                     *               \                                                   \
                     *             Node(R)                                            Node(R)
                     */

                    node.parent!.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    grandParent!.color = Color.RED;
                    node = grandParent;
                } else {
                    /**
                     *   Ancestor (B)                           Ancestor (B)
                     *      \                                      \
                     *   Parent(R)    -----Rotate Right------>    Node (R)
                     *       /                                     \
                     *   Node (R)                              Parent (R)
                     */

                    if (node === node.parent.left) {
                        node = node.parent;
                        this.rotateRight(node);
                    }
                    /**
                     *   Ancestor (B)                    Ancestor (R)
                     *      \                               \
                     *   Node (R)   --------Color------>  Node (B)     --------Rotate Left--------->  Node (B)
                     *     \                                \                                         /  \
                     *  Parent (R)                      Parent (R)                         Ancestor(R)  Parent (R)
                     */

                    node.parent!.color = Color.BLACK;
                    grandParent!.color = Color.RED;
                    this.rotateLeft(grandParent!);
                }
            }
        }
        this.root!.color = Color.BLACK;
    }

    rotateRight(node: RBNode<T>) {
        /**
         *  Node (R)
         *     /
         *  Child1 (B) -------------rotate right---------->     Child1(B)
         *    /                                                   /   \
         *  Child2 (R)                                   Child2(R)    Node(R)
         */

        //1. Make left child's right child as the left child of the node
        const leftChild = node.left;
        if (leftChild === this.NIL) {
            return;
        }
        node.left = leftChild!.right;
        if (leftChild?.right !== this.NIL) {
            leftChild!.right!.parent = node;
        }
        //2. Make left child as the parent
        leftChild!.parent = node.parent;
        if (node.parent === null) {
            this.root = leftChild;
        } else if (node === node.parent.right) {
            node.parent.right = leftChild;
        } else {
            node.parent.left = leftChild;
        }

        //3. Make left child's right child as the node
        leftChild!.right = node;
        node.parent = leftChild;
    }

    rotateLeft(node: RBNode<T>) {
        /**
         *   Node (R)
         *      \
         *   Child1 (B)    --------Rotate Left------>   Child1(B)
         *       \                                     /        \
         *     Child2 (R)                            Node(R)  Child2(R)
         */

        //1. Find the right child's left child to be the right child of the node
        const rightChild = node.right;
        if (rightChild === this.NIL) {
            return;
        }
        node.right = rightChild!.left;
        if (rightChild?.left !== this.NIL) {
            rightChild!.left!.parent = node;
        }
        //2. Make right child as the parent
        rightChild!.parent = node.parent;
        if (node.parent === null) {
            this.root = rightChild;
        } else if (node === node.parent.left) {
            node.parent.left = rightChild;
        } else {
            node.parent.right = rightChild;
        }

        //3. Make node as the left child of the right child
        rightChild!.left = node;
        node.parent = rightChild;
    }

    traversalByOrderType(
        orderType: OrderType = OrderType.LEVEL_ORDER,
    ): Array<string> {
        this.printedData = [];
        this._traversalByOrderType(this.root, orderType);
        return this.printedData;
    }
    _traversalByOrderType(
        node: RBNode<T> | null,
        orderType: OrderType = OrderType.LEVEL_ORDER,
    ) {
        if (node === this.NIL) {
            return;
        }
        switch (orderType) {
            case OrderType.PRE_ORDER:
                this.printedData.push(`${node.data} (${node.color})`);
                this._traversalByOrderType(node.left, orderType);
                this._traversalByOrderType(node.right, orderType);
                break;
            case OrderType.IN_ORDER:
                this._traversalByOrderType(node.left, orderType);
                this.printedData.push(`${node.data} (${node.color})`);
                this._traversalByOrderType(node.right, orderType);
                break;
            case OrderType.POST_ORDER:
                this._traversalByOrderType(node.left, orderType);
                this._traversalByOrderType(node.right, orderType);
                this.printedData.push(`${node.data} (${node.color})`);
                break;
            case OrderType.LEVEL_ORDER:
                const queue: RBNode<T>[] = [node];
                while (queue.length > 0) {
                    const current = queue.shift();
                    this.printedData.push(
                        `${current!.data} (${current!.color})`,
                    );
                    if (current!.left !== this.NIL) {
                        queue.push(current!.left);
                    }
                    if (current!.right !== this.NIL) {
                        queue.push(current!.right);
                    }
                }
                break;
            default:
                throw new Error(`Invalid order type: ${orderType}`);
        }
    }

    find(value: T): RBNode<T> | null {
        let current = this.root;
        while (current !== this.NIL) {
            if (current.data === value) {
                return current;
            }
            current = value > current.data ? current.right : current.left;
        }
        return null;
    }

    findMinNode(node: RBNode<T> | null = this.root): RBNode<T> {
        let current = node || this.root;
        while (current?.left !== this.NIL) {
            current = current!.left;
        }
        return current;
    }

    findMaxNode(node: RBNode<T> | null = this.root): RBNode<T> {
        let current = node || this.root;
        while (current?.right !== this.NIL) {
            current = current!.right;
        }
        return current;
    }

    findParent(value: T): RBNode<T> | null {
        let current = this.root;
        let parent: RBNode<T> | null = null;
        while (current !== this.NIL) {
            if (current.data === value) {
                return parent;
            }
            parent = current;
            current = value > current.data ? current.right : current.left;
        }
        return null;
    }
    delete(value: T) {
        const node = this.find(value);
        if (!node) {
            return;
        }
        if (node.left !== this.NIL && node.right !== this.NIL) {
            this.deleteWithTwoChild(node);
        } else {
            this.deleteWithNoChildOrOneChild(node);
        }
    }

    deleteWithNoChildOrOneChild(node: RBNode<T>) {
        // 1. find the child node
        let child: RBNode<T> | null = this.NIL;
        if (node.left !== this.NIL) {
            child = node.left;
        } else if (node.right !== this.NIL) {
            child = node.right;
        } else {
            child = this.NIL;
        }
        const parentNode = node.parent;
        // 2. Replace the node with the child node
        if (node === parentNode?.left) {
            parentNode.left = child;
        } else {
            parentNode!.right = child;
        }

        /**
         * 3. Fix the color
         *
         * @remark If the node is black, the deletion will cause a double. But if the node is red,
         * the deletion will not cause a double black. So, we need to fix the color only when the node is black.
         */
        if (child) {
            if (child && node.color === Color.BLACK) {
                if (child?.color === Color.RED) {
                    child.color = Color.BLACK;
                } else {
                    this.fixInsert(child);
                }
            }
        } else {
            if (node.color === Color.BLACK) {
                console.log('here');
                this.fixDelete(node);
            }
        }
    }

    deleteWithTwoChild(node: RBNode<T>) {
        /**
         * There are two ways to delete a node from a red-black tree with two children:
         * 1. Find the maximum node in the left subtree of the node to be deleted,
         * and replace the node to be deleted with the maximum node in the left subtree.
         * 2. Find the minimum node in the right subtree of the node to be deleted,
         * and replace the node to be deleted with the minimum node in the right subtree.
         *
         * @remark `searchBinaryTree ` has use minimum node in the right subtree to replace the node to be deleted.
         * So, this case will use the maximum node in the left subtree to replace the node to be deleted.
         */
        const maxNode = this.findMaxNode(node.left);
        node.data = maxNode.data;
        const parentNode = this.findParent(maxNode.data);
        parentNode!.right = this.NIL;
        this.fixInsert(maxNode);
    }

    fixDelete(node: RBNode<T> | null) {
        console.log('fixDelete', node);
        /**
         * Only when the node is black, we need to fix the color.
         * If the node is red, we can directly delete it because deletion will not cause a double
         * black.
         */
        // while (node !== this.root && node?.color === Color.BLACK) {
        //     if (node === node.parent?.left) {
        //         let sibling = node.parent.right;
        //         //sibling is red
        //         if (sibling?.color === Color.RED) {
        //             sibling.color = Color.BLACK;
        //             node.parent.color = Color.RED;
        //             this.rotateLeft(node.parent);
        //             sibling = node.parent.right;
        //         } else {
        //             /**
        //              *            8 (BLACK)                                         8(BLACK)
        //              *              /     \                                         /      \
        //              *          7(BLACK)   10 (BLACK) Deleted -------------> 7(BLACK)      10 (BLACK)
        //              *                       \                                     /
        //              *                    14 (RED)                               10(RED)
        //              *
        //              *
        //              */
        //             console.log("-------------------");
        //             sibling!.color = node.parent.color;
        //             node.parent.color = Color.BLACK;
        //             sibling!.right!.color = Color.BLACK;
        //             // this.rotateLeft(node.parent);
        //             node = this.root;
        //         }
        //     }
        // }
    }
}
