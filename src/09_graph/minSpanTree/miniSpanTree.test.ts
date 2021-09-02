import { GraphAdjacencyList } from './miniSpanTree';

describe('minSpanTree', () => {
    test('should find min span tree when call findMinSpanTreeWithPrim', function () {
        const graphAdjacencyList = new GraphAdjacencyList();
        graphAdjacencyList.initAdjacency();
        const path = graphAdjacencyList.findMiniSpanTreeWithPrim();

        expect(path).toBe('0105188216677473');
    });

    test('should find min span tree when call findMiniSpanTreeWithKruskal', function () {
        const graphAdjacencyList = new GraphAdjacencyList();
        graphAdjacencyList.initEdges();
        const path = graphAdjacencyList.findMiniSpanTreeWithKruskal();

        expect(path).toBe('4728011558378667');
    });
});
