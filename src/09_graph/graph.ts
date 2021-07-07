export class Graph {
    vertexCount: number;
    adjacencyMatrix: number[][] = [];

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
}
