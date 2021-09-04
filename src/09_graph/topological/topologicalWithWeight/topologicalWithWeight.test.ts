import { TopologicalWithWeight } from './topologicalWithWeight';

test('find critical path', () => {
    const topologicalWithWeight = new TopologicalWithWeight();
    const result = topologicalWithWeight.findCriticalPath();

    expect(result).toBe('v0 v2 v3 v4 v7 v8 v9');
});
