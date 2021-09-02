const MAX_LEVEL = 10;
export default class Node {
    // save value
    data: number;
    // vertical index of value
    level: number;
    // record horizontal index
    refer = new Array(MAX_LEVEL);

    constructor(value: number, level: number) {
        this.data = value;
        this.level = level;
    }
}
