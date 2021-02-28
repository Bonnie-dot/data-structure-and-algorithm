export default class Stack {
    array = [];

    push(value: unknown) {
        this.array.unshift(value);
    }

    getValues() {
        return this.array;
    }


}
