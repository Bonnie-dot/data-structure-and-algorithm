export default class Queue {

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
