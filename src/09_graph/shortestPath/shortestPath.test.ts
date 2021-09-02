import { GraphAdjacencyList } from './shortestPath';

test('should return the shortest path from V0 to Vn when call findShortestPath', function () {
    const graphAdjacencyList = new GraphAdjacencyList();
    const result = graphAdjacencyList.findShortestPath();

    expect(result.shortestPathsFromV0ToVn).toEqual([
        0, 1, 4, 7, 5, 8, 10, 12, 16,
    ]);
    expect(result.shortestPathsVertexs).toEqual([
        '0',
        '0-1',
        '0-1-2',
        '0-1-2-4-3',
        '0-1-2-4',
        '0-1-2-4-5',
        '0-1-2-4-3-6',
        '0-1-2-4-3-6-7',
        '0-1-2-4-3-6-7-8',
    ]);
});
