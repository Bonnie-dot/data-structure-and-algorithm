import { OrderType, SearchBinaryTree } from './searchBinaryTree';

describe('search binary tree', () => {
    describe('insert', () => {
        test('should assign root when call insert', () => {
            /**
             *     8
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(8);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([8]);
        });

        test('should assign left value when call insert', () => {
            /**
             *     8
             *    /
             *   6
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(6);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([8, 6]);
        });

        test('should assign second level left value when call insert', () => {
            /**
             *     8
             *    /
             *   6
             *  /
             * 4
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(6);
            searchBinaryTree.insert(4);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([8, 6, 4]);
        });

        test('should assign right value when call insert', () => {
            /**
             *     8
             *    / \
             *   6   9
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(6);
            searchBinaryTree.insert(9);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([8, 6, 9]);
        });

        test('should assign second level right value when call insert', () => {
            /**
             *     8
             *    / \
             *   6   9
             *        \
             *         10
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(6);
            searchBinaryTree.insert(9);
            searchBinaryTree.insert(10);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([8, 6, 9, 10]);
        });

        test('should assign multiple values when call insert', () => {
            /**
             *        10
             *       /  \
             *      8    20
             *     /    / \
             *    6    19  25
             *   / \
             *  5   7
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(10);
            searchBinaryTree.insert(20);
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(25);
            searchBinaryTree.insert(19);
            searchBinaryTree.insert(6);
            searchBinaryTree.insert(7);
            searchBinaryTree.insert(5);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([10, 8, 20, 6, 19, 25, 5, 7]);
        });
    });

    test('should find value', () => {
        /**
         *     10
         *    /  \
         *   8    20
         *          \
         *           25
         *
         * Finding node: 8
         * Expected result: Node with data 8
         */
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(10);
        searchBinaryTree.insert(20);
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(25);

        const result = searchBinaryTree.find(8);

        expect(result?.data).toEqual(8);
    });

    describe('delete', () => {
        test('should delete value when call delete given with no child', () => {
            /**
             *     10    →    (empty)
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(10);
            searchBinaryTree.delete(10);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([]);
        });

        test('should delete value when call delete given a child', () => {
            /**
             *     10                   10
             *    /  \      →         /
             *   6    8              6
             *
             * Deleting node: 8
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(10);
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(6);
            searchBinaryTree.delete(8);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([10, 6]);
        });

        test('should delete value when call delete given two child', () => {
            /**
             *        33                      33
             *       /                       /
             *      16           →         16
             *        \                      \
             *         18                     19
             *        /  \                   /  \
             *      17    25               17    25
             *           /  \                     \
             *         19    27                   27
             *
             * Deleting node: 18
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(33);
            searchBinaryTree.insert(16);
            searchBinaryTree.insert(18);
            searchBinaryTree.insert(17);
            searchBinaryTree.insert(25);
            searchBinaryTree.insert(19);
            searchBinaryTree.insert(27);
            searchBinaryTree.delete(18);

            const result = searchBinaryTree.traversalByOrderType();

            expect(result).toEqual([33, 16, 19, 17, 25, 27]);
        });
    });

    describe('Max and Min', () => {
        test('should find max value when call findMaxNode given no right node', () => {
            /**
             *        33  ← max
             *       /
             *      16
             *        \
             *         18
             *        /  \
             *      17    25
             *           /  \
             *         19    27
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(33);
            searchBinaryTree.insert(16);
            searchBinaryTree.insert(18);
            searchBinaryTree.insert(17);
            searchBinaryTree.insert(25);
            searchBinaryTree.insert(19);
            searchBinaryTree.insert(27);

            const result = searchBinaryTree.findMaxNode();

            expect(result).toEqual(33);
        });

        test('should find max value when call findMaxNode given right node', () => {
            /**
             *        33
             *       /  \
             *      16   89
             *        \    \
             *         18   90  ← max
             *        /  \
             *      17    25
             *           /  \
             *         19    27
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(33);
            searchBinaryTree.insert(16);
            searchBinaryTree.insert(18);
            searchBinaryTree.insert(89);
            searchBinaryTree.insert(25);
            searchBinaryTree.insert(90);
            searchBinaryTree.insert(19);
            searchBinaryTree.insert(27);

            const result = searchBinaryTree.findMaxNode();

            expect(result).toEqual(90);
        });

        test('should find min value when call findMinNode given no left node', () => {
            /**
             *     33  ← min
             *       \
             *        36
             *          \
             *           38
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(33);
            searchBinaryTree.insert(36);
            searchBinaryTree.insert(38);

            const result = searchBinaryTree.findMinNode();

            expect(result).toEqual(33);
        });

        test('should find min value when call findMinNode given left node', () => {
            /**
             *        33
             *       /  \
             *      32   36
             *     /       \
             *    26        38
             *   /  \
             *  25   27
             *  ↑
             * min
             */
            const searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(33);
            searchBinaryTree.insert(36);
            searchBinaryTree.insert(32);
            searchBinaryTree.insert(26);
            searchBinaryTree.insert(25);
            searchBinaryTree.insert(27);
            searchBinaryTree.insert(38);

            const result = searchBinaryTree.findMinNode();

            expect(result).toEqual(25);
        });
    });
    describe('traversal', () => {
        let searchBinaryTree: SearchBinaryTree;

        beforeEach(() => {
            //set up data
            /**
             *     10
             *    /  \
             *   8    20
             *  / \     \
             * 6   9     25
             */
            searchBinaryTree = new SearchBinaryTree();
            searchBinaryTree.insert(10);
            searchBinaryTree.insert(8);
            searchBinaryTree.insert(6);
            searchBinaryTree.insert(9);
            searchBinaryTree.insert(20);
            searchBinaryTree.insert(25);
        });

        test('should traverse in-order', () => {
            const result = searchBinaryTree.traversalByOrderType(
                OrderType.IN_ORDER,
            );
            expect(result).toEqual([6, 8, 9, 10, 20, 25]);
        });

        test('should traverse pre-order', () => {
            const result = searchBinaryTree.traversalByOrderType(
                OrderType.PRE_ORDER,
            );
            expect(result).toEqual([10, 8, 6, 9, 20, 25]);
        });

        test('should traverse post-order', () => {
            const result = searchBinaryTree.traversalByOrderType(
                OrderType.POST_ORDER,
            );
            expect(result).toEqual([6, 9, 8, 25, 20, 10]);
        });

        test('should traverse level-order', () => {
            const result = searchBinaryTree.traversalByOrderType(
                OrderType.LEVEL_ORDER,
            );
            expect(result).toEqual([10, 8, 20, 6, 9, 25]);
        });
    });
});
