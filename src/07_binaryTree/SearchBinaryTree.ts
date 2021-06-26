import { Node } from "./Node";

export class SearchBinaryTree {
  root = null;
  printedData: number[];

  insert(data: number) {
    const node = new Node(data);
    if (this.root === null) {
      this.root = node;
      return;
    }
    const findParent = this.findParentOrValue(data);
      findParent.data > data
          ? (findParent.left = node)
          : (findParent.right = node);
  }

    /**
     * find parent node or find equal value
     * @param data: value
     */
  findParentOrValue(data: number): Node {
      if (!this.root.left && !this.root.right ) {
          return this.root;
      }
    let current = this.root;
    while (current.left||current.right) {
      if (current.data > data) {
        current = current.left;
      } else if (current.data < data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return current;
  }

  /**
   * traversal in order
   */
  traversalInOrder(node: Node) {
      if (!node){
          return;
      }
    if (!node.left && !node.right) {
      this.printedData.push(node.data);
      return;
    }
    this.traversalInOrder(node.left);
    this.printedData.push(node.data);
    this.traversalInOrder(node.right);
  }

  print() {
    this.printedData = [];
    this.traversalInOrder(this.root);
  }
}
