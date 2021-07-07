import { Graph } from './graph';

describe('graph', () => {
  it('should add edge correctly when call addEdge', () => {
    const graph = new Graph(8);
    graph.addEdge(0, 1);

    expect(graph.adjacencyMatrix[0]).toEqual([1]);
    expect(graph.adjacencyMatrix[1]).toEqual([0]);
  });
});
