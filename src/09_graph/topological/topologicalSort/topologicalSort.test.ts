import { TopologicalSort } from './topologicalSort';

describe('topological', () => {
    test('should sort topological when call sort', () => {
        const topological = new TopologicalSort();
        const path = topological.sort();

        expect(path).toEqual('v3 v1 v2 v6 v9 v10 v13 v0 v4 v5 v8 v7 v12 v11 ');
    });
});
