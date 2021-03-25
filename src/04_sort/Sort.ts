export default class Sort {
    array: Array<number>;
    length: number;

    constructor(array: Array<number>) {
        this.array = array;
        this.length = array.length;
    }

    bubbleSort() {
        if (this.length == 0) {
            return null;
        }
        for (let i = 0; i < this.length - 1; i++) {
            let isExchange = false;
            for (let j = 0; j < this.length - i; j++) {
                if (this.array[j] > this.array[j + 1]) {
                    let temp = this.array[j];
                    this.array[j] = this.array[j + 1];
                    this.array[j + 1] = temp;
                    isExchange = true;
                }
            }
            if (!isExchange) {
                return this.array;
            }
        }
        return this.array;
    }

    insertionSort() {
        if (this.length <= 1) {
            return null;
        }

        for (let i = 1; i < this.length; i++) {
            let j = i - 1;
            let value = this.array[i];
            for (; j >= 0; j--) {
                if (this.array[j] > value) {
                    this.array[j + 1] = this.array[j];
                } else {
                    break;
                }
            }
            this.array[j + 1] = value;
        }
        return this.array;
    }

}
