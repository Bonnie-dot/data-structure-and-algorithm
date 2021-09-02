import Node from './Node';
const MAX_LEVEL = 10;
export class SkipList {
  totalLevel = 1;
  head = new Node(-1, 0);
  // so that index balance
  static randomLevel() {
    let level = 1;
    for (let i = 1; i < MAX_LEVEL; i++) {
      if (Math.random() < 0.5) {
        level++;
      }
    }
    return level;
  }

  find(value: number): number {
    let p = this.head;
    for (let i = this.totalLevel - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data <= value) {
        p = p.refer[i];
      }
    }
    if (p.refer[0] !== undefined) {
      return p.data;
    } else {
      return null;
    }
  }

  insert(value) {
    const randomLevel = SkipList.randomLevel();
    const newNode = new Node(value, randomLevel);
    // vertical direction array
    const update = new Array(randomLevel).fill(new Node(-1, 0));
    let p = this.head;
    // save next node refer
    for (let i = randomLevel - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      update[i] = p;
    }
    // assign refer
    for (let i = 0; i < randomLevel; i++) {
      newNode.refer[i] = update[i].refer[i];
      update[i].refer[i] = newNode;
    }
    if (this.totalLevel < randomLevel) {
      this.totalLevel = randomLevel;
    }
  }

  remove(value) {
    let p = this.head;
    const removeValue = [];
    for (let i = this.totalLevel - 1; i >= 0; i--) {
      while (p.refer[i] !== undefined && p.refer[i].data < value) {
        p = p.refer[i];
      }
      removeValue[i] = p;
    }
    for (let i = 0; i < p.level; i++) {
      removeValue[i].refer[i] = removeValue[i].refer[i].refer[i];
    }
  }

  printAll() {
    let p = this.head;
    const tempArr = [];
    while (p.refer[0] !== undefined) {
      tempArr.push(p.refer[0].data);
      p = p.refer[0];
    }
    return tempArr;
  }
}
