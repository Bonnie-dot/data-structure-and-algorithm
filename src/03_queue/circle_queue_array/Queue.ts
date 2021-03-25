export default class Queue {

    protected array: Array<number>;
    private head = 0;
    private trail = 0;
    private length = 0

    constructor(length: number) {
        this.length = length;
        this.array = new Array(length);
    }

    enqueue(value: number): boolean {
        // Verify that the array is full
        const nextIndex = (this.trail + 1) % this.length;
        if (nextIndex === this.head) return false;
        this.array[this.trail] = value;
        this.trail = nextIndex;
        return true
    }

    dequeue(): boolean {
        // Verify that the array is empty
        if (this.trail === this.head) return false;
        this.array[this.head] = undefined;
        this.head = (this.head + 1) % this.length;
        return true;
    }

    get data() {
        return this.array;
    }
}
