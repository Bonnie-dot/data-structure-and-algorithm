export class Heap {
  private array: number[] = [null];

  insert(value: number) {
    this.array.push(value);
    let i = this.array.length - 1;
    let parent = Math.floor(i / 2);
    while (parent > 0 && this.array[i] > this.array[parent]) {
      this.swap(i, parent);
      i = parent;
    }
  }

  print() {
    return this.array.slice(1);
  }

  swap(number1: number, number2: number) {
    const temp = this.array[number1];
    this.array[number1] = this.array[number2];
    this.array[number2] = temp;
  }
}
