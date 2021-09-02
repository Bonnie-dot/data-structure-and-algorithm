/**
 * 生成最小路径
 */

export class GraphAdjacencyList {
    vertexCount: number = 9;
    // 邻接表存储
    adjacencyMatrix: number[][] = new Array(this.vertexCount)
        .fill([])
        .map((_) => new Array(this.vertexCount).fill(0));
    maxValue = Number.MAX_VALUE;
    constructor() {
        this.initAdjacency();
    }

    addAdjacencyMatrix(s: number, t: number, cost: number) {
        this.adjacencyMatrix[s][t] = cost;
        this.adjacencyMatrix[t][s] = cost;
    }

    initAdjacency() {
        this.addAdjacencyMatrix(0, 1, 1);
        this.addAdjacencyMatrix(0, 2, 5);
        this.addAdjacencyMatrix(0, 3, this.maxValue);
        this.addAdjacencyMatrix(0, 4, this.maxValue);
        this.addAdjacencyMatrix(0, 5, this.maxValue);
        this.addAdjacencyMatrix(0, 6, this.maxValue);
        this.addAdjacencyMatrix(0, 7, this.maxValue);
        this.addAdjacencyMatrix(0, 8, this.maxValue);
        this.addAdjacencyMatrix(1, 2, 3);
        this.addAdjacencyMatrix(1, 3, 7);
        this.addAdjacencyMatrix(1, 4, 5);
        this.addAdjacencyMatrix(1, 5, this.maxValue);
        this.addAdjacencyMatrix(1, 6, this.maxValue);
        this.addAdjacencyMatrix(1, 7, this.maxValue);
        this.addAdjacencyMatrix(1, 8, this.maxValue);
        this.addAdjacencyMatrix(2, 3, this.maxValue);
        this.addAdjacencyMatrix(2, 4, 1);
        this.addAdjacencyMatrix(2, 5, 7);
        this.addAdjacencyMatrix(2, 6, this.maxValue);
        this.addAdjacencyMatrix(2, 7, this.maxValue);
        this.addAdjacencyMatrix(2, 8, this.maxValue);
        this.addAdjacencyMatrix(3, 4, 2);
        this.addAdjacencyMatrix(3, 5, this.maxValue);
        this.addAdjacencyMatrix(3, 6, 3);
        this.addAdjacencyMatrix(3, 7, this.maxValue);
        this.addAdjacencyMatrix(3, 8, this.maxValue);
        this.addAdjacencyMatrix(4, 5, 3);
        this.addAdjacencyMatrix(4, 6, 6);
        this.addAdjacencyMatrix(4, 7, 9);
        this.addAdjacencyMatrix(4, 8, this.maxValue);
        this.addAdjacencyMatrix(5, 6, this.maxValue);
        this.addAdjacencyMatrix(5, 7, 5);
        this.addAdjacencyMatrix(5, 8, this.maxValue);
        this.addAdjacencyMatrix(6, 7, 2);
        this.addAdjacencyMatrix(6, 8, 7);
        this.addAdjacencyMatrix(7, 8, 4);
    }

    findShortestPath() {
        // 记录V0-Vn的最短路径
        const shortestPathsFromV0ToVn = new Array(this.vertexCount).fill(0);
        // 初始化维护一个最短路径的集合
        const recordPaths = this.adjacencyMatrix[0];
        // 记录最短路径的顶点集合
        const shortestPathsVertexs = new Array(this.vertexCount).fill(0);
        const markedFoundShortestPath = new Array(this.vertexCount).fill(0);
        markedFoundShortestPath[0] = 1;
        let currentMinPathIndex = 0;
        for (let i = 1; i < this.vertexCount; i++) {
            let min = this.maxValue;
            for (let j = 0; j < this.vertexCount; j++) {
                if (!markedFoundShortestPath[j] && recordPaths[j] < min) {
                    min = recordPaths[j];
                    currentMinPathIndex = j;
                }
            }
            shortestPathsFromV0ToVn[currentMinPathIndex] = min;
            markedFoundShortestPath[currentMinPathIndex] = 1;
            // 更新最短路径集合
            for (let j = 0; j < this.vertexCount; j++) {
                if (
                    !markedFoundShortestPath[j] &&
                    this.adjacencyMatrix[currentMinPathIndex][j] <
                        recordPaths[j]
                ) {
                    recordPaths[j] =
                        min + this.adjacencyMatrix[currentMinPathIndex][j];
                    shortestPathsVertexs[j] = currentMinPathIndex;
                }
            }
        }
        return {
            shortestPathsFromV0ToVn,
            shortestPathsVertexs: this.concatShortestPath(shortestPathsVertexs),
        };
    }

    concatShortestPath(shortestPathsVertexs: number[]) {
        const shortestPaths = [];
        shortestPathsVertexs.forEach((item, index) => {
            if (index >= 1) {
                let previousVertexs = shortestPaths[item];
                const currentPreviousIndex = item;
                const historyVertex = this.findFinalHasHistoryVertex(
                    previousVertexs,
                    currentPreviousIndex,
                    shortestPathsVertexs,
                    shortestPaths,
                );
                const noRecordHistoryVertexs =
                    historyVertex.noRecordHistoryVertexs;
                previousVertexs = historyVertex.previousVertexs;

                if (noRecordHistoryVertexs.length > 0) {
                    shortestPaths.push(
                        `${previousVertexs}-${noRecordHistoryVertexs.join(
                            '-',
                        )}-${index}`,
                    );
                } else {
                    shortestPaths.push(`${previousVertexs}-${index}`);
                }
            } else {
                shortestPaths.push('0');
            }
        });
        return shortestPaths;
    }

    private findFinalHasHistoryVertex(
        previousVertexs,
        currentPreviousIndex: number,
        shortestPathsVertexs: number[],
        shortestPaths: any[],
    ) {
        const noRecordHistoryVertexs = [];
        while (previousVertexs === undefined) {
            noRecordHistoryVertexs.push(currentPreviousIndex);
            const previousIndex = shortestPathsVertexs[currentPreviousIndex];
            currentPreviousIndex = previousIndex;
            previousVertexs = shortestPaths[previousIndex];
        }
        return { noRecordHistoryVertexs, previousVertexs };
    }
}
