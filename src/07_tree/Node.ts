export class Node {
    data: number;
    left: Node | null;
    right: Node | null;
    constructor(data: number) {
        this.data = data;
    }
}
/**
 * Defines the traversal order types for a binary tree.
 * Example tree structure:
 *
 *     10
 *    /  \
 *   5    15
 *  / \  / \
 * 3   7 12 20
 */
export enum OrderType {
    /**
     * Pre-order traversal visits:
     * 1. Root node
     * 2. Left subtree
     * 3. Right subtree
     *
     * Example: [10, 5, 3, 7, 15, 12, 20]
     */
    PRE_ORDER,

    /**
     * In-order traversal visits:
     * 1. Left subtree
     * 2. Root node
     * 3. Right subtree
     *
     * Example: [3, 5, 7, 10, 12, 15, 20]
     * Note: For a BST, this produces nodes in ascending order
     */
    IN_ORDER,

    /**
     * Post-order traversal visits:
     * 1. Left subtree
     * 2. Right subtree
     * 3. Root node
     *
     * Example: [3, 7, 5, 12, 20, 15, 10]
     */
    POST_ORDER,
    /**
     * Level-order traversal visits:
     * 1. Root node
     * 2. Left subtree
     * 3. Right subtree
     *
     * Example: [10, 5, 15, 3, 7, 12, 20]
     */
    LEVEL_ORDER,
}
