/**
 * 生成最小权重树
 */
export class GraphAdjacencyList {
  vertexCount: number = 9;
  // 邻接表存储
  adjacencyMatrix: number[][] = new Array(this.vertexCount).fill([]).map(_ => new Array(this.vertexCount).fill(0));
  maxValue = Number.MAX_VALUE;

  addEdge (s: number, t: number, cost: number) {
    this.adjacencyMatrix[s][t] = cost;
    this.adjacencyMatrix[t][s] = cost;
  }

  initAdjacency () {
    this.addEdge(0, 1, 10);
    this.addEdge(0, 2, this.maxValue);
    this.addEdge(0, 3, this.maxValue);
    this.addEdge(0, 4, this.maxValue);
    this.addEdge(0, 5, 11);
    this.addEdge(0, 6, this.maxValue);
    this.addEdge(0, 7, this.maxValue);
    this.addEdge(0, 8, this.maxValue);
    this.addEdge(1, 2, 18);
    this.addEdge(1, 3, this.maxValue);
    this.addEdge(1, 4, this.maxValue);
    this.addEdge(1, 5, this.maxValue);
    this.addEdge(1, 6, 16);
    this.addEdge(1, 7, this.maxValue);
    this.addEdge(1, 8, 12);
    this.addEdge(2, 3, 22);
    this.addEdge(2, 4, this.maxValue);
    this.addEdge(2, 5, this.maxValue);
    this.addEdge(2, 6, this.maxValue);
    this.addEdge(2, 7, this.maxValue);
    this.addEdge(2, 8, 8);
    this.addEdge(3, 4, 20);
    this.addEdge(3, 5, this.maxValue);
    this.addEdge(3, 6, this.maxValue);
    this.addEdge(3, 7, 16);
    this.addEdge(3, 8, 21);
    this.addEdge(4, 5, 26);
    this.addEdge(4, 6, this.maxValue);
    this.addEdge(4, 7, 7);
    this.addEdge(4, 8, this.maxValue);
    this.addEdge(5, 6, 17);
    this.addEdge(5, 7, this.maxValue);
    this.addEdge(5, 8, this.maxValue);
    this.addEdge(6, 7, 19);
    this.addEdge(6, 8, this.maxValue);
    this.addEdge(7, 8, this.maxValue);
  }

  findMiniSpanTreeWithPrim () {
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
        if (lowCost[j] !== 0 && this.adjacencyMatrix[k][j] < lowCost[j]) {
          lowCost[j] = this.adjacencyMatrix[k][j];
          verTexs[j] = k;
        }
      }
    }
    return path;
  };

  isStop (array: number[]):boolean {
    return array.filter(item => item !== 0).length === 0;
  }
}
