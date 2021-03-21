import SingleLinked from "../../01_linkList/SingleLinked";
import Node from '../../common/Node'

export default class Queue {
    singleLink: SingleLinked;

    constructor() {
        this.singleLink = new SingleLinked();
    }

    push(value: string) {
        this.singleLink.append(new Node(value));
    }

    pop(){
    }
}
