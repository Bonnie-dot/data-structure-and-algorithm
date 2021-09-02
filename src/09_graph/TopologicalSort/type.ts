/**
 * 顶点表结构
 */
export interface Type {
    in: number; //入度
    name: string;
    firstEdge: EdgeNode;
}

/**
 * 边表节点
 */
export interface EdgeNode {
    name: string;
    next: EdgeNode;
}
