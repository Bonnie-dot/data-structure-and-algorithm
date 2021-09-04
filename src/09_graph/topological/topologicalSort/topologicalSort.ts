/**
 * 拓扑排序
 */
import { VertexNode } from '../VertexNode';
import { EdgeNode } from '../EdgeNode';

export class TopologicalSort {
    adList: VertexNode[] = [];
    stack: Array<number> = [];
    constructor() {
        this.initAdList();
        this.initStack();
    }
    initAdList() {
        this.adList.push(
            new VertexNode(
                0,
                'v0',
                new EdgeNode(
                    'v11',
                    new EdgeNode('v5', new EdgeNode('v4', null)),
                ),
            ),
        );
        this.adList.push(
            new VertexNode(
                0,
                'v1',
                new EdgeNode(
                    'v8',
                    new EdgeNode('v4', new EdgeNode('v2', null)),
                ),
            ),
        );
        this.adList.push(
            new VertexNode(
                2,
                'v2',
                new EdgeNode(
                    'v9',
                    new EdgeNode('v6', new EdgeNode('v5', null)),
                ),
            ),
        );
        this.adList.push(
            new VertexNode(
                0,
                'v3',
                new EdgeNode('v13', new EdgeNode('v2', null)),
            ),
        );
        this.adList.push(new VertexNode(2, 'v4', new EdgeNode('v7', null)));
        this.adList.push(
            new VertexNode(
                3,
                'v5',
                new EdgeNode('v12', new EdgeNode('v8', null)),
            ),
        );
        this.adList.push(new VertexNode(1, 'v6', new EdgeNode('v5', null)));
        this.adList.push(new VertexNode(2, 'v7', null));
        this.adList.push(new VertexNode(2, 'v8', new EdgeNode('v7', null)));
        this.adList.push(
            new VertexNode(
                1,
                'v9',
                new EdgeNode('v11', new EdgeNode('v10', null)),
            ),
        );
        this.adList.push(new VertexNode(1, 'v10', new EdgeNode('v13', null)));
        this.adList.push(new VertexNode(2, 'v11', null));
        this.adList.push(new VertexNode(1, 'v12', new EdgeNode('v9', null)));
        this.adList.push(new VertexNode(2, 'v13', null));
    }
    initStack() {
        this.adList.forEach((item, index) => {
            if (!item.inCount) {
                this.stack.push(index);
            }
        });
    }
    sort() {
        let popCount = 0;
        let path = '';
        while (this.stack.length !== 0) {
            const vertexIndex = this.stack.pop();
            path = path.concat(`${this.adList[vertexIndex].name} `);
            popCount++;
            let edge = this.adList[vertexIndex].firstEdge;
            while (edge) {
                // iterate all related edge's inCount --
                const index = this.adList.findIndex(
                    (item) => item.name === edge.name,
                );
                if (index && --this.adList[index].inCount === 0) {
                    this.stack.push(index);
                }
                edge = edge.next;
            }
        }
        return path;
    }
}
