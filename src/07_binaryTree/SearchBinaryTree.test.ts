import { SearchBinaryTree } from "./SearchBinaryTree";

describe("search binary tree", () => {
  it("should assign root when call insert", function () {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([8]);
  });

  it("should assign left value when call insert", function () {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([6, 8]);
  });
});
