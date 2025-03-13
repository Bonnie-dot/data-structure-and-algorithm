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
            // 3 (BLACK)
            //  /
            // 1 (RED)
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
        expect(tree.find(2)).toBeTruthy();
        expect(tree.find(6)).toBeFalsy();
    });
});
