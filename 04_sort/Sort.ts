export default class Sort {
    array: Array<number>;

    constructor(array: Array<number>) {
        this.array = array;
    }

    bubbleSort() {
        let length = this.array.length;
        if (length == 0) {
            return null;
        }
        for (let i = 0; i < length - 1; i++) {
            let isExchange = false;
            for (let j = 0; j < length - i; j++) {
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
        let length = this.array.length;
        if (length <= 1) {
            return null;
        }

        for (let i = 1; i < length; i++) {
            let j = i - 1;
            let value = this.array[i];
            for (; j >= 0; j--) {
                if (this.array[j] > value) {
                    this.array[j + 1] = this.array[j];
                } else {
                    break;
                }
            }
            this.array[j+1] = value;
        }
        return this.array;
    }
}
