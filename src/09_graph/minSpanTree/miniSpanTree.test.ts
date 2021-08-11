import { GraphAdjacencyList } from './miniSpanTree';

describe('minSpanTree', () => {
  it('should find min span tree when call findMinSpanTreeWithPrim', function () {
    const graphAdjacencyList = new GraphAdjacencyList();
    graphAdjacencyList.initAdjacency();
    const path = graphAdjacencyList.findMiniSpanTreeWithPrim();

    expect(path).toBe('0105188216677473');
  });
});
