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

    print (prev:number[], s:number, t:number) {
      if (prev[t] !== -1 && t !== s) {
        this.print(prev, s, prev[t]);
      }
      this.path += t.toString();
    }
}
