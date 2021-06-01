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
            for (let j = this.length-1; j>=i; j--) {
                if (this.array[j-1] > this.array[j]) {
                    let temp = this.array[j-1];
                    this.array[j-1] = this.array[j];
                    this.array[j] = temp;
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

    mergeSort(array): number[] {
        if (array.length <= 1) return array;
        const mediumNumber = Math.floor(array.length / 2);
        return Sort.merge(this.mergeSort(array.slice(0, mediumNumber)), this.mergeSort(array.slice(mediumNumber)));
    }

    private static merge(array1: number[], array2: number[]): number[] {
        let i = 0, j = 0;
        let temp = [];
        while (i <= array1.length - 1 && j <= array2.length - 1) {
            if (array1[i] < array2[j]) {
                temp.push(array1[i]);
                i++;
            } else {
                temp.push(array2[j]);
                j++;
            }
        }
        return temp.concat(array1.slice(i)).concat(array2.slice(j));
    }

    quickSort() {
        this.quickSortByPivot(this.array, 0, this.length - 1)
    }

    private quickSortByPivot(array: Array<number>, startIndex: number, endIndex: number) {
        if (startIndex >= endIndex) {
            return;
        }
        const pivot = this.partition(array, startIndex, endIndex);
        this.quickSortByPivot(array, startIndex, pivot - 1);
        this.quickSortByPivot(array, pivot + 1, array.length - 1);
    }

    private partition(array: Array<number>, startIndex: number, endIndex: number) {
        const pivot = array[endIndex];
        let left = startIndex;
        for (let j = startIndex; j < endIndex; j++) {
            if (array[j] < pivot) {
                this.swap(array, left, j);
                left++;
            }
        }
        this.swap(array, left, endIndex);
        return left;

    }

    private swap(array: Array<number>, index1: number, index2: number) {
        const temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
    }

    countingSort() {
        // 1.find maxValue and minValue
        const maxValue = this.findMaxValue();

        //2.apply for a array for counting
        let countingArray = this.sumTotalCountForEveryValue(maxValue);

        // 3. in turn ,accumulative
        countingArray= this.accumulative(countingArray);

        //3.create a new array, according to countingArray sorting
        const tempArray = new Array(this.length);
        this.array.forEach(value => {
            let index = countingArray[value] - 1;
            tempArray[index] = value;
            countingArray[value]--;
        });

        this.array= tempArray;
    }

    radixSort(){
        const counter = [];
        let mod = 10;
        let dev = 1;
        let count = this.findMaxValue().toString().length;
        for (let i = 0; i < count; i++, dev *= 10, mod *= 10) {
            for(let j = 0; j < this.array.length; j++) {
                let bucket = ((this.array[j] % mod) / dev).toFixed(0);
                if(counter[bucket]==null) {
                    counter[bucket] = [];
                }
                counter[bucket].push(this.array[j]);
            }
            let pos = 0;
            for(let j = 0; j < counter.length; j++) {
                let value = null;
                if(counter[j]!=null) {
                    while ((value = counter[j].shift()) != null) {
                        this.array[pos++] = value;
                    }
                }
            }
        }
    }

    private sumTotalCountForEveryValue(maxValue: number) {
        const countingArray = new Array(maxValue + 1).fill(0);
        this.array.forEach(value => {
            countingArray[value]++;
        });
        return countingArray;
    }

    private findMaxValue() {
        let maxValue = this.array[1];
        this.array.forEach(value => {
            if (value > maxValue) {
                maxValue = value;
            }
        });
        return maxValue;
    }

    private accumulative(countingArray: any[]) {
        for (let i = 1; i < countingArray.length; i++) {
            countingArray[i] = countingArray[i] + countingArray[i - 1];
        }
        return countingArray;
    }
}
