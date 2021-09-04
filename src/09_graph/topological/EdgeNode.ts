/**
 * 边表节点
 */
export class EdgeNode {
    name: string;
    next: EdgeNode;
    weight: number;

    constructor(name:string,next:EdgeNode,weight?: number) {
        this.name = name;
        this.next = next;
        this.weight = weight
    }
}
