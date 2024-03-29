import { OrderType, SearchBinaryTree } from './SearchBinaryTree';

describe('search binary tree', () => {
    test('should assign root when call insert', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(8);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([8]);
    });

    test('should assign left value when call insert', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(6);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([6, 8]);
    });

    test('should assign second level left value when call insert', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(6);
        searchBinaryTree.insert(4);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([4, 6, 8]);
    });

    test('should assign right value when call insert', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(6);
        searchBinaryTree.insert(9);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([6, 8, 9]);
    });

    test('should assign second level right value when call insert', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(6);
        searchBinaryTree.insert(9);
        searchBinaryTree.insert(10);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([6, 8, 9, 10]);
    });

    test('should assign multiple value value when call insert', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(10);
        searchBinaryTree.insert(20);
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(25);
        searchBinaryTree.insert(19);
        searchBinaryTree.insert(6);
        searchBinaryTree.insert(7);
        searchBinaryTree.insert(5);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([
            5, 6, 7, 8, 10, 19, 20, 25,
        ]);
    });

    test('should find value when call find', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(10);
        searchBinaryTree.insert(20);
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(25);

        const result = searchBinaryTree.find(8);

        expect(result.data).toEqual(8);
    });

    test('should delete value when call delete with root', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(10);
        searchBinaryTree.delete(10);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([]);
    });

    test('should delete value when call delete with having a child', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(10);
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(6);
        searchBinaryTree.delete(8);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([6, 10]);
    });

    test('should delete value when call delete with having no child', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(10);
        searchBinaryTree.insert(8);
        searchBinaryTree.insert(6);
        searchBinaryTree.delete(6);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([8, 10]);
    });

    test('should delete value when call delete with having two childs', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(33);
        searchBinaryTree.insert(16);
        searchBinaryTree.insert(18);
        searchBinaryTree.insert(17);
        searchBinaryTree.insert(25);
        searchBinaryTree.insert(19);
        searchBinaryTree.insert(27);
        searchBinaryTree.delete(18);

        searchBinaryTree.printByOrderType();

        expect(searchBinaryTree.printedData).toEqual([16, 17, 19, 25, 27, 33]);
    });

    test('should find max value when call findMaxNode with no right node', () => {
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

    test('should find max value when call findMaxNode with having right node', () => {
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

    test('should find min value when call findMinNode with having no left node', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(33);
        searchBinaryTree.insert(36);
        searchBinaryTree.insert(38);

        const result = searchBinaryTree.findMinNode();

        expect(result).toEqual(33);
    });

    test('should find min value when call findMinNode with having left node', () => {
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

    test('should print by pre order when call printByOrderType', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(33);
        searchBinaryTree.insert(36);
        searchBinaryTree.insert(32);
        searchBinaryTree.insert(26);
        searchBinaryTree.insert(25);
        searchBinaryTree.insert(27);
        searchBinaryTree.insert(38);

        searchBinaryTree.printByOrderType(OrderType.PREORDER);

        expect(searchBinaryTree.printedData).toEqual([
            33, 32, 26, 25, 27, 36, 38,
        ]);
    });

    test('should print by post order when call printByOrderType', () => {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(33);
        searchBinaryTree.insert(36);
        searchBinaryTree.insert(32);
        searchBinaryTree.insert(26);
        searchBinaryTree.insert(25);
        searchBinaryTree.insert(27);
        searchBinaryTree.insert(38);

        searchBinaryTree.printByOrderType(OrderType.POSTORDER);

        expect(searchBinaryTree.printedData).toEqual([
            25, 27, 26, 32, 38, 36, 33,
        ]);
    });
});
