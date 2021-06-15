export default class Stack {
  array: Array<unknown>;
  size: number;
  count: number = -1;

  constructor(size: number) {
    this.size = size;
    this.array = new Array(size);
  }

  push(value: unknown) {
    this.count++;
    if (this.size <= this.count) {
      throw new Error(`stack overflow error`);
    }
    this.array[this.count] = value;
  }

  getValues() {
    return this.array;
  }

  pop() {
    if (this.count === -1) {
      throw new Error("stack is empty");
    }
    delete this.array[this.count];
  }
}
