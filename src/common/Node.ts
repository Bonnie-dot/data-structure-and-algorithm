export default class Node {

    data: string;
    next: Node;

    constructor(data: string) {
        this.data = data;
        this.next = null;
    }
}
