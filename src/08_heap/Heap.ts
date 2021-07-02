export class Heap {
  private array: number[] = [null];

  insert (value: number) {
    this.array.push(value);
    let i = this.array.length - 1;
    const parent = Math.floor(i / 2);
    while (parent > 0 && this.array[i] > this.array[parent]) {
      this.swap(i, parent);
      i = parent;
    }
  }

  deleteHeapTop () {
    const count = this.array.length - 1;
    this.array[1] = this.array[count];
    this.array.splice(count, 1);
    let i = 1;
    const child = Math.floor(i * 2);
    while (i < count && this.array[i] < this.array[child]) {
      this.swap(i, child);
      i = child;
    }
  }

  sort (): number[] {
    const i = 1;
    const temp = [];
    while (i < this.array.length) {
      temp.push(this.array[i]);
      this.deleteHeapTop();
    }
    return temp;
  }

  print () {
    return this.array.slice(1);
  }

  swap (number1: number, number2: number) {
    const temp = this.array[number1];
    this.array[number1] = this.array[number2];
    this.array[number2] = temp;
  }
}
