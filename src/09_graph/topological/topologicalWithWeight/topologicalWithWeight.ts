/**
 * 发现关键路径
 */
import { VertexNode } from '../VertexNode';
import { EdgeNode } from '../EdgeNode';

export class TopologicalWithWeight {
    adList: VertexNode[] = [];
    recordZeroInCountStack: Array<number> = [];
    recordSequencePopStack: Array<number> = [];
    earliestTimeOfVertex: Array<number>;
    latestTimeOfVertex: Array<number>;
    adListLength = 0;

    constructor() {
        this.initAdList();
        this.initRecordZeroInCountStack();
        this.earliestTimeOfVertex = new Array(this.adListLength).fill(0);
        this.latestTimeOfVertex = new Array(this.adListLength).fill(0);
        this.getEarliestTimeOfVertex();
        this.getLatestTimeOfVertex();
    }
    initAdList() {
        this.adList.push(
            new VertexNode(
                0,
                'v0',
                new EdgeNode('v2', new EdgeNode('v1', null, 3), 4),
            ),
        );
        this.adList.push(
            new VertexNode(
                1,
                'v1',
                new EdgeNode('v4', new EdgeNode('v3', null, 5), 6),
            ),
        );
        this.adList.push(
            new VertexNode(
                1,
                'v2',
                new EdgeNode('v5', new EdgeNode('v3', null, 8), 7),
            ),
        );
        this.adList.push(new VertexNode(2, 'v3', new EdgeNode('v4', null, 3)));
        this.adList.push(
            new VertexNode(
                2,
                'v4',
                new EdgeNode('v7', new EdgeNode('v6', null, 9), 4),
            ),
        );
        this.adList.push(new VertexNode(1, 'v5', new EdgeNode('v7', null, 6)));
        this.adList.push(new VertexNode(1, 'v6', new EdgeNode('v9', null, 2)));
        this.adList.push(new VertexNode(2, 'v7', new EdgeNode('v8', null, 5)));
        this.adList.push(new VertexNode(1, 'v8', new EdgeNode('v9', null, 3)));
        this.adList.push(new VertexNode(2, 'v9', null));
        this.adListLength = this.adList.length;
    }

    initRecordZeroInCountStack() {
        this.adList.forEach((item, index) => {
            if (!item.inCount) {
                this.recordZeroInCountStack.push(index);
            }
        });
    }

    getEarliestTimeOfVertex() {
        let popCount = 0;
        while (this.recordZeroInCountStack.length !== 0) {
            const vertexIndex = this.recordZeroInCountStack.pop();
            this.recordSequencePopStack.push(vertexIndex);
            popCount++;
            let edge = this.adList[vertexIndex].firstEdge;
            while (edge) {
                // iterate all related edge's inCount --
                const edgeIndex = this.adList.findIndex(
                    (item) => item.name === edge.name,
                );
                if (edgeIndex && --this.adList[edgeIndex].inCount === 0) {
                    this.recordZeroInCountStack.push(edgeIndex);
                }
                if (
                    this.earliestTimeOfVertex[vertexIndex] + edge.weight >
                    this.earliestTimeOfVertex[edgeIndex]
                ) {
                    this.earliestTimeOfVertex[edgeIndex] =
                        this.earliestTimeOfVertex[vertexIndex] + edge.weight;
                }
                edge = edge.next;
            }
        }
    }

    getLatestTimeOfVertex() {
        this.latestTimeOfVertex.fill(
            this.earliestTimeOfVertex[this.adListLength - 1],
        );
        let vertexIndex = this.recordSequencePopStack.pop();
        while (vertexIndex) {
            let edge = this.adList[vertexIndex].firstEdge;
            while (edge) {
                const edgeIndex = this.adList.findIndex(
                    (item) => item.name === edge.name,
                );
                if (
                    this.latestTimeOfVertex[edgeIndex] - edge.weight <
                    this.latestTimeOfVertex[vertexIndex]
                ) {
                    this.latestTimeOfVertex[vertexIndex] =
                        this.latestTimeOfVertex[edgeIndex] - edge.weight;
                }
                edge = edge.next;
            }
            vertexIndex = this.recordSequencePopStack.pop();
        }
    }

    findCriticalPath() {
        let earliestTimeOfEdge;
        let latestTimeOfEdge;
        let path = '';
        this.adList.forEach((item, index) => {
            let edge = item.firstEdge;
            earliestTimeOfEdge = this.earliestTimeOfVertex[index];
            while (edge) {
                const edgeIndex = this.adList.findIndex(
                    (item) => item.name == edge.name,
                );
                latestTimeOfEdge =
                    this.latestTimeOfVertex[edgeIndex] - edge.weight;
                if (latestTimeOfEdge === earliestTimeOfEdge) {
                    path = path.concat(`${item.name} `);
                }
                edge = edge.next;
            }
        });
        path = path.concat(this.adList[this.adListLength - 1].name);
        return path;
    }
}
