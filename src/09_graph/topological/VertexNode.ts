import { EdgeNode } from './EdgeNode';

/**
 * 顶点表结构
 */
export class VertexNode {
    inCount: number; //入度
    name: string;
    firstEdge: EdgeNode;
    constructor(inCount: number, name: string, firstEdge: EdgeNode) {
        this.name = name;
        this.inCount = inCount;
        this.firstEdge = firstEdge;
    }
}
