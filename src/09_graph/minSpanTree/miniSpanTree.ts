/**
 * 生成最小权重树
 */
import { Edge } from './Edge';

export class GraphAdjacencyList {
    vertexCount: number = 9;
    // 邻接表存储
    adjacencyMatrix: number[][] = new Array(this.vertexCount)
        .fill([])
        .map((_) => new Array(this.vertexCount).fill(0));
    maxValue = Number.MAX_VALUE;
    edges: Edge[] = [];
    addAdjacencyMatrix(s: number, t: number, cost: number) {
        this.adjacencyMatrix[s][t] = cost;
        this.adjacencyMatrix[t][s] = cost;
    }

    initAdjacency() {
        this.addAdjacencyMatrix(0, 1, 10);
        this.addAdjacencyMatrix(0, 2, this.maxValue);
        this.addAdjacencyMatrix(0, 3, this.maxValue);
        this.addAdjacencyMatrix(0, 4, this.maxValue);
        this.addAdjacencyMatrix(0, 5, 11);
        this.addAdjacencyMatrix(0, 6, this.maxValue);
        this.addAdjacencyMatrix(0, 7, this.maxValue);
        this.addAdjacencyMatrix(0, 8, this.maxValue);
        this.addAdjacencyMatrix(1, 2, 18);
        this.addAdjacencyMatrix(1, 3, this.maxValue);
        this.addAdjacencyMatrix(1, 4, this.maxValue);
        this.addAdjacencyMatrix(1, 5, this.maxValue);
        this.addAdjacencyMatrix(1, 6, 16);
        this.addAdjacencyMatrix(1, 7, this.maxValue);
        this.addAdjacencyMatrix(1, 8, 12);
        this.addAdjacencyMatrix(2, 3, 22);
        this.addAdjacencyMatrix(2, 4, this.maxValue);
        this.addAdjacencyMatrix(2, 5, this.maxValue);
        this.addAdjacencyMatrix(2, 6, this.maxValue);
        this.addAdjacencyMatrix(2, 7, this.maxValue);
        this.addAdjacencyMatrix(2, 8, 8);
        this.addAdjacencyMatrix(3, 4, 20);
        this.addAdjacencyMatrix(3, 5, this.maxValue);
        this.addAdjacencyMatrix(3, 6, this.maxValue);
        this.addAdjacencyMatrix(3, 7, 16);
        this.addAdjacencyMatrix(3, 8, 21);
        this.addAdjacencyMatrix(4, 5, 26);
        this.addAdjacencyMatrix(4, 6, this.maxValue);
        this.addAdjacencyMatrix(4, 7, 7);
        this.addAdjacencyMatrix(4, 8, this.maxValue);
        this.addAdjacencyMatrix(5, 6, 17);
        this.addAdjacencyMatrix(5, 7, this.maxValue);
        this.addAdjacencyMatrix(5, 8, this.maxValue);
        this.addAdjacencyMatrix(6, 7, 19);
        this.addAdjacencyMatrix(6, 8, this.maxValue);
        this.addAdjacencyMatrix(7, 8, this.maxValue);
    }

    initEdges() {
        this.edges.push(new Edge(4, 7, 7));
        this.edges.push(new Edge(2, 8, 8));
        this.edges.push(new Edge(0, 1, 10));
        this.edges.push(new Edge(0, 5, 11));
        this.edges.push(new Edge(1, 8, 12));
        this.edges.push(new Edge(3, 7, 16));
        this.edges.push(new Edge(1, 6, 16));
        this.edges.push(new Edge(5, 6, 17));
        this.edges.push(new Edge(1, 2, 18));
        this.edges.push(new Edge(6, 7, 19));
        this.edges.push(new Edge(3, 4, 20));
        this.edges.push(new Edge(3, 8, 21));
        this.edges.push(new Edge(2, 3, 22));
        this.edges.push(new Edge(3, 6, 24));
        this.edges.push(new Edge(4, 5, 26));
    }

    /**
     * Prim(普里母算法)
     */
    findMiniSpanTreeWithPrim() {
        let k = 0; // k记录是最小权重的顶点
        let path = String(); // 最短路径
        const verTexs = new Array(this.vertexCount).fill(0); // 跟lowCost一一对应
        const lowCost = this.adjacencyMatrix[0];
        for (let i = 0; i < this.vertexCount; i++) {
            if (this.isStop(lowCost)) {
                break;
            }
            let min = this.maxValue;
            let j = 1;
            while (j < this.vertexCount) {
                if (lowCost[j] !== 0 && lowCost[j] < min) {
                    min = lowCost[j];
                    k = j;
                }
                j++;
            }
            path = path.concat(verTexs[k].toString()).concat(k.toString());
            lowCost[k] = 0;
            for (j = 1; j < this.vertexCount; j++) {
                if (
                    lowCost[j] !== 0 &&
                    this.adjacencyMatrix[k][j] < lowCost[j]
                ) {
                    lowCost[j] = this.adjacencyMatrix[k][j];
                    verTexs[j] = k;
                }
            }
        }
        return path;
    }

    /**
     *Kruskal(克鲁斯卡尔)算法
     */
    findMiniSpanTreeWithKruskal() {
        const parent = new Array(this.vertexCount).fill(0);
        let path = '';
        for (let i = 0; i < this.edges.length; i++) {
            const start = this.find(parent, this.edges[i].begin);
            const end = this.find(parent, this.edges[i].end);
            if (start !== end) {
                parent[start] = end;
                path = path.concat(start).concat(end);
            }
        }
        return path;
    }

    find(parent, vertex) {
        while (parent[vertex] !== 0) {
            vertex = parent[vertex];
        }
        return vertex;
    }

    isStop(array: number[]): boolean {
        return array.filter((item) => item !== 0).length === 0;
    }
}
