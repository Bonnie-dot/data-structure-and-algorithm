import {SearchBinaryTree} from "./SearchBinaryTree";

describe('search binary tree',()=>{
    it('should assign root when call insert', function () {
        const searchBinaryTree = new SearchBinaryTree();
        searchBinaryTree.insert(8);
        searchBinaryTree.print()

        expect(searchBinaryTree.printedData).toEqual([8]);
    });
});
