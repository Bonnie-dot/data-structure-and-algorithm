enum Color {
    RED,
    BLACK,
}

class RBNode<T> {
    data: T;
    color: Color;
    left: RBNode<T> | null;
    right: RBNode<T> | null;
    parent: RBNode<T> | null;
    constructor(data: T, color: Color = Color.RED) {
        this.data = data;
        this.color = color;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

class RedBlackTree {
    root: RBNode<number>;
    NIL: RBNode<number>;
    constructor() {
        // NIL node is a sentinel node that is used to simplify the implementation.
        this.NIL = new RBNode<number>(null as any, Color.BLACK);
        this.root = this.NIL;
    }

    insert(data: number) {
        const node = new RBNode(data);
        node.left = this.NIL;
        node.right = this.NIL;
        let current: RBNode<number> | null = this.root;
        let parent: RBNode<number> | null = null;
        // 1. Find leaf node to insert the new node
        while (current !== this.NIL) {
            parent = current;
            if (data < current.data) {
                current = current.left ?? this.NIL;
            } else {
                current = current.right ?? this.NIL;
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
    }

    fixInsert(node: RBNode<number>) {
        // 1. If the uncle is red, we need to fix the tree
        while (node.parent?.color === Color.RED) {
            if (node.parent === node.parent.parent?.left) {
                const uncle = node.parent.parent.right;
                if (uncle?.color === Color.RED) {
                    // case1:
                    // Ancestor (R)                    Ancestor(R)
                    // /     \                         /     \
                    // Parent (B)  Uncle (B) ->       Parent (B)  Uncle (B)
                    // /                             /
                    // Node (R)                     Node (R)
                    node.parent.color = Color.BLACK;
                    uncle.color = Color.BLACK;
                    node.parent.parent.color = Color.RED;
                    node = node.parent.parent;
                } else {
                    // case2:
                    // Ancestor (A)                  Ancestor (R)                              Parent (B)
                    // /                              /                                         /    \
                    // Parent (R)      ->             Parent (B)    ---Rotate Right------>  Node (R)  Ancestor (R)
                    //  /                              /
                    // Node (R)                       Node (R)
                    if (node === node.parent.left) {
                        node.parent.color = Color.BLACK;
                        node.parent.parent.color = Color.RED;
                        this.rightRotate(node.parent.parent);
                    }
                }
            }
        }
    }
    rightRotate(node: RBNode<number>) {}
}
