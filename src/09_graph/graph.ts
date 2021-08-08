export class Graph {
    vertexCount: number;
    // 邻接表存储
    adjacencyMatrix: number[][] = [];
    // 最短路径
    path:string = '';

    constructor (vertexCount: number) {
      this.vertexCount = vertexCount;
      for (let i = 0; i < vertexCount; i++) {
        this.adjacencyMatrix[i] = [];
      }
    }

    addEdge (s: number, t: number) {
      this.adjacencyMatrix[s].push(t);
      this.adjacencyMatrix[t].push(s);
    }

    breadthFirstSearch (s:number, t:number) {
      if (s === t) {
        return false;
      }
      const visited:boolean[] = new Array(this.vertexCount);
      const queue: number[] = [];
      const prev = new Array(this.vertexCount).fill(-1);
      visited[s] = true;
      queue.push(s);
      while (queue.length !== 0) {
        const w = queue.shift();
        for (let i = 0; i < this.adjacencyMatrix[w].length; ++i) {
          const q = this.adjacencyMatrix[w][i];
          if (!visited[q]) {
            prev[q] = w;
            if (q === t) {
              this.print(prev, s, t);
              return;
            }
            visited[q] = true;
            queue.push(q);
          }
        }
      }
    }

    depthFirstSearch (s: number, t: number) {
      const visited:boolean[] = new Array(this.vertexCount);
      const prev = new Array(this.vertexCount).fill(-1);
      this.recurDfs(s, t, visited, prev);
      this.print(prev, s, t);
    }

    recurDfs (w: number, t: number, visited: boolean[], prev: number[]) {
      visited[w] = true;
      if (w === t) {
        return false;
      }
      for (let i = 0; i < this.adjacencyMatrix[w].length; i++) {
        const q = this.adjacencyMatrix[w][i];
        if (!visited[q]) {
          prev[q] = w;
          this.recurDfs(q, t, visited, prev);
        }
      }
    }

    /**
     * 生成最小权重树
     * 因为之前没有考虑权重，所以这里就是只有实现 没有测试
     */
    findMiniSpanTree () {
      let j = 1;
      let k = 0; // k记录是最小权重的顶点
      let min = Number.MAX_VALUE;
      let path:string;
      const verTexs = new Array(this.vertexCount).fill(0);
      const lowCost = this.adjacencyMatrix[0];
      for (let i = 0; i < this.vertexCount; i++) {
        while (j < this.vertexCount) {
          if (lowCost[j] !== 0 && this.vertexCount[j] < min) {
            min = this.vertexCount[j];
            k = j;
          }
          j++;
        }
        path.concat(verTexs[k]).concat(k.toString());

        for (j = 1; j < this.vertexCount; j++) {
          if (lowCost[j] !== 0 && this.adjacencyMatrix[k][j] < lowCost[j]) {
            lowCost[j] = this.adjacencyMatrix[k][j];
            verTexs[j] = k;
          }
        }
      }
      return path;
    }

    print (prev:number[], s:number, t:number) {
      if (prev[t] !== -1 && t !== s) {
        this.print(prev, s, prev[t]);
      }
      this.path += t.toString();
    }
}
