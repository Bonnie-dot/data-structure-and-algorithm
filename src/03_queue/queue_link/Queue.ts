import SingleLinked from '../../01_linkList/SingleLinked';
import Node from '../../00_common/Node';

export default class Queue {
  private singleLink: SingleLinked;

  constructor() {
    this.singleLink = new SingleLinked();
  }

  push(value: string) {
    this.singleLink.append(new Node(value));
  }

  pop() {
    this.singleLink.removeFirstNode();
  }

  getData() {
    return this.singleLink.getData();
  }
}
