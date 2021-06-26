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
    let current = this.root;
    while (current){
        if (current.data > data){
            if (!current.left) {
                current.left = node;
                return;
            }
            current = current.left;
        }else {
            if (!current.right) {
                current.right = node;
                return;
            }
            current = current.right
        }
    }
  }

  find(data: number): Node {
      let current = this.root;
      while (current) {
          if (current.data>data){
              current = current.left;
          }else if(current.data < data) {
              current = current.right;
          }else {
              return current.data;
          }
      }
      return null;
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
