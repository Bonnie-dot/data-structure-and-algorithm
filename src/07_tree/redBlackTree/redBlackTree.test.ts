import { RedBlackTree } from './redBlackTree';

describe('RedBlackTree', () => {
    describe('insert', () => {
        it('should be able to insert a node', () => {
            const tree = new RedBlackTree<number>();
            tree.insert(1);
            expect(tree.traversalByOrderType()).toEqual(['1 (BLACK)']);
        });
        it('should be able to insert two nodes with right child', () => {
            /**
             *     1 (BLACK)
             *      \
             *       2 (RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(1);
            tree.insert(2);
            expect(tree.traversalByOrderType()).toEqual([
                '1 (BLACK)',
                '2 (RED)',
            ]);
        });
        it('should be able to insert two nodes with left child', () => {
            /**
             * 3 (BLACK)
             *  /
             * 1 (RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(3);
            tree.insert(1);
            expect(tree.traversalByOrderType()).toEqual([
                '3 (BLACK)',
                '1 (RED)',
            ]);
        });
        it('should be able to insert three nodes with right child', () => {
            /**
             *            2 (BLACK)
             *              / \
             *      1(RED)   3 (RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(1);
            tree.insert(2);
            tree.insert(3);
            expect(tree.traversalByOrderType()).toEqual([
                '2 (BLACK)',
                '1 (RED)',
                '3 (RED)',
            ]);
        });
        it('should be able to insert three nodes with left child', () => {
            /**
             *          5 (BLACK)                       4(BLACK)
             *            /                              /     \
             *         4(RED) -----------> 3(BLACK) 4 (BLACK)
             *        /
             *       3 (RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(5);
            tree.insert(4);
            tree.insert(3);
            expect(tree.traversalByOrderType()).toEqual([
                '4 (BLACK)',
                '3 (RED)',
                '5 (RED)',
            ]);
        });
        it('should be able to insert multiple nodes', () => {
            /**
             *            8 (BLACK)                                  8(BLACK)
             *              /     \                                /      \
             *          7(BLACK)   10 (BLACK) -------------> 7(BLACK)      14 (BLACK)
             *          /            \                         /          /     \
             *     0 (RED)          14 (RED)                 0(RED)   10(RED)    15(RED)
             *                        \
             *                         15 (RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(8);
            tree.insert(7);
            tree.insert(10);
            tree.insert(0);
            tree.insert(14);
            tree.insert(15);
            expect(tree.traversalByOrderType()).toEqual([
                '8 (BLACK)',
                '7 (BLACK)',
                '14 (BLACK)',
                '0 (RED)',
                '10 (RED)',
                '15 (RED)',
            ]);
        });
    });

    it('should be able to search a node', () => {
        /**
         *            2 (BLACK)
         *              / \
         *      1(RED)   3 (RED)
         */
        const tree = new RedBlackTree<number>();
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
        expect(tree.find(2)?.data).toEqual(2);
        expect(tree.find(6)?.data).toBeUndefined();
    });

    it('should find the min node', () => {
        const tree = new RedBlackTree<number>();
        tree.insert(8);
        tree.insert(7);
        tree.insert(10);
        tree.insert(0);
        tree.insert(14);
        tree.insert(15);

        expect(tree.findMinNode().data).toEqual(0);
    });

    it('should find the max node', () => {
        const tree = new RedBlackTree<number>();
        tree.insert(8);
        tree.insert(7);
        tree.insert(10);
        tree.insert(0);
        tree.insert(14);
        tree.insert(15);

        expect(tree.findMaxNode().data).toEqual(15);
    });

    it("should find parent's node", () => {
        const tree = new RedBlackTree<number>();
        tree.insert(8);
        tree.insert(7);
        tree.insert(10);
        tree.insert(0);
        tree.insert(14);
        tree.insert(15);

        expect(tree.findParent(0)?.data).toEqual(7);
        expect(tree.findParent(15)?.data).toEqual(14);
        expect(tree.findParent(12)).toBeNull();
    });

    describe('delete', () => {
        it('should delete a node of red with no children', () => {
            /**
             *            8 (BLACK)                                  8(BLACK)
             *              /     \                                /      \
             *          7(BLACK)   10 (BLACK) -------------> 7(BLACK)      14 (BLACK)
             *          /            \                         /          /
             *     0 (RED)          14 (RED)                 0(RED)   10(RED)
             *                        \
             *                         15 (RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(8);
            tree.insert(7);
            tree.insert(10);
            tree.insert(0);
            tree.insert(14);
            tree.insert(15);

            tree.delete(15);
            expect(tree.traversalByOrderType()).toEqual([
                '8 (BLACK)',
                '7 (BLACK)',
                '14 (BLACK)',
                '0 (RED)',
                '10 (RED)',
            ]);
        });

        it("should delete a node of black with one child's node", () => {
            /**
             *            8 (BLACK)                                  8(BLACK)
             *              /     \                                /      \
             *          7(BLACK)   10 (BLACK) -------------> 7(BLACK)      10 (BLACK)
             *                       \                                     /
             *                    14 (RED)                               14(RED)
             */
            const tree = new RedBlackTree<number>();
            tree.insert(8);
            tree.insert(7);
            tree.insert(10);
            tree.insert(14);

            // tree.delete(7);

            expect(tree.traversalByOrderType()).toEqual([
                '8 (BLACK)',
                '7 (BLACK)',
                '10 (BLACK)',
                '14 (RED)',
            ]);
        });
    });
});
