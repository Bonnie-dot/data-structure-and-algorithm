export class MaxHeap {
    private array: number[] = [null];

    insert(value: number) {
        this.array.push(value);
        this.shiftUp();
    }

    shiftUp() {
        let index = this.array.length - 1;
        // Math.floor(index / 2) is equal to index>>>1
        let parent = index >>> 1;
        while (parent > 0 && this.array[index] > this.array[parent]) {
            this.swap(index, parent);
            index = parent;
            parent = index >>> 1;
        }
    }

    deleteHeapTop() {
        const count = this.array.length - 1;
        this.array[1] = this.array[count];
        this.array.splice(count, 1);
        let i = 1;
        // Math.floor(i * 2) is equal to i<<1
        const child = i << 1;
        while (i < count && this.array[i] < this.array[child]) {
            this.swap(i, child);
            i = child;
        }
    }

    sort(): number[] {
        const index = 1;
        const temp = [];
        while (index < this.array.length) {
            temp.push(this.array[index]);
            this.deleteHeapTop();
        }
        return temp;
    }

    print() {
        return this.array.slice(1);
    }

    swap(number1: number, number2: number) {
        const temp = this.array[number1];
        this.array[number1] = this.array[number2];
        this.array[number2] = temp;
    }

    peek() {
        return this.array.length === 0 ? null : this.array[1];
    }

    pop() {
        const top = this.array[1];
        this.deleteHeapTop();
        return top;
    }
}
