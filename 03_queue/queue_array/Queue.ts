export default class Queue {

    // In javascript, we can init array without size.
    // If you have fixed array, you can consider totally move
    // array data when array length is size and the start is empty.
    private array: Array<number> = [];

    push(value: number) {
        this.array.push(value);
    }

    shift(): number {
        return this.array.shift();
    }

    get data() {
        return this.array;
    }
}
