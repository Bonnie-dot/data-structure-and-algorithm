export default class Node {

    data: unknown;
    next: Node

    constructor(data: unknown) {
        this.data = data;
        this.next = null;
    }
}