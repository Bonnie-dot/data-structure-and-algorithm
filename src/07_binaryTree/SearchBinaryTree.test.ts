import { SearchBinaryTree } from "./SearchBinaryTree";

describe("search binary tree", () => {
  it("should assign root when call insert", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([8]);
  });

  it("should assign left value when call insert", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([6, 8]);
  });

  it("should assign second level left value when call insert", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.insert(4);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([4, 6, 8]);
  });

  it("should assign right value when call insert", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.insert(9);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([6, 8, 9]);
  });

  it("should assign second level right value when call insert", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.insert(9);
    searchBinaryTree.insert(10);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([6, 8, 9, 10]);
  });

  it("should assign multiple value value when call insert", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(10);
    searchBinaryTree.insert(20);
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(25);
    searchBinaryTree.insert(19);
    searchBinaryTree.insert(6);
    searchBinaryTree.insert(7);
    searchBinaryTree.insert(5);
    searchBinaryTree.print();

    expect(searchBinaryTree.printedData).toEqual([5, 6, 7, 8, 10, 19, 20, 25]);
  });

  it("should find value when call find", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(10);
    searchBinaryTree.insert(20);
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(25);
    const result = searchBinaryTree.find(8);

    expect(result.data).toEqual(8);
  });

  it("should delete value when call delete with root", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(10);
    searchBinaryTree.delete(10);
    searchBinaryTree.print();
    expect(searchBinaryTree.printedData).toEqual([]);
  });

  it("should delete value when call delete with having a child", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(10);
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.delete(8);
    searchBinaryTree.print();
    expect(searchBinaryTree.printedData).toEqual([6, 10]);
  });

  it("should delete value when call delete with having no child", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(10);
    searchBinaryTree.insert(8);
    searchBinaryTree.insert(6);
    searchBinaryTree.delete(6);
    searchBinaryTree.print();
    expect(searchBinaryTree.printedData).toEqual([8, 10]);
  });

  it("should delete value when call delete with having two childs", () => {
    const searchBinaryTree = new SearchBinaryTree();
    searchBinaryTree.insert(33);
    searchBinaryTree.insert(16);
    searchBinaryTree.insert(18);
    searchBinaryTree.insert(17);
    searchBinaryTree.insert(25);
    searchBinaryTree.insert(19);
    searchBinaryTree.insert(27);
    searchBinaryTree.delete(18);
    searchBinaryTree.print();
    expect(searchBinaryTree.printedData).toEqual([16, 17, 19, 25, 27, 33]);
  });
});
