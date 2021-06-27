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
    while (current) {
      if (current.data > data) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data: number): Node {
    let current = this.root;
    while (current) {
      if (current.data > data) {
        current = current.left;
      } else if (current.data < data) {
        current = current.right;
      } else {
        return current;
      }
    }
    return null;
  }

  findParent(data: number): Node {
    let current = this.root;
    if (!current.left && !current.right) {
      return null;
    }
    let parent: Node;
    while (current) {
      if (current.data > data) {
        parent = current;
        current = current.left;
      } else if (current.data < data) {
        parent = current;
        current = current.right;
      } else {
        return parent;
      }
    }
  }

  delete(value: number) {
    const parentNode = this.findParent(value);
    if (!parentNode) {
      this.root = null;
      return;
    }
    const findNode =
      parentNode?.left?.data === value ? parentNode.left : parentNode.right;
    if (!findNode.left || !parentNode.right) {
      this.deleteWithNoChildOrOneChild(parentNode, findNode);
    } else {
      this.deleteWithTwoChild(findNode);
    }
  }

  deleteWithNoChildOrOneChild(parentNode: Node, node: Node) {
    let child: Node;
    if (node.left) {
      child = node.left;
    } else if (node.right) {
      child = node.right;
    } else {
      child = null;
    }
    if (parentNode.left === node) {
      parentNode.left = child;
    } else {
      parentNode.right = child;
    }
  }

  deleteWithTwoChild(node: Node) {
    let current = node.right;
    let leftParent;
    while (current.left) {
      leftParent = current;
      current = current.left;
    }
    node.data = current.data;
    leftParent.left = null;
  }

  findMaxNode(): number {
      let current = this.root;
      if (!current.right){
          return current.data;
      }
      while (current){
          current = current.right;
      }
      return current.data;
  }
  /**
   * traversal in order
   */
  traversalInOrder(node: Node) {
    if (!node) {
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
