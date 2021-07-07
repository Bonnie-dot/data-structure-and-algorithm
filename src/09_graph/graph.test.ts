import { Graph } from './graph';

describe('graph', () => {
  it('should add edge correctly when call addEdge', () => {
    const graph = new Graph(8);
    graph.addEdge(0, 1);

    expect(graph.adjacencyMatrix[0]).toEqual([1]);
    expect(graph.adjacencyMatrix[1]).toEqual([0]);
  });

  it('should breadth first search when call breadthFirstSearch ', function () {
    const graph = new Graph(8);
    graph.addEdge(0, 1);
    graph.addEdge(0, 3);
    graph.addEdge(1, 2);
    graph.addEdge(1, 4);
    graph.addEdge(2, 5);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(4, 6);
    graph.addEdge(5, 7);
    graph.addEdge(6, 7);
    graph.breadthFirstSearch(0, 6);

    expect(graph.path).toEqual('0146');
  });
});
