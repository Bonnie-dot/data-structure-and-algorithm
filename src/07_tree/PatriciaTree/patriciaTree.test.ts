import { PatriciaTree } from './patriciaTree';

describe('patricia tree', () => {
    let patriciaTree: PatriciaTree;
    beforeAll(() => {
        patriciaTree = new PatriciaTree();
    });
    it('should insert successfully', () => {
        patriciaTree.insert('cat');
        patriciaTree.insert('ca');
        patriciaTree.printTree();
        const node = patriciaTree.search('cat');
        expect(node).toEqual(true);
        const node2 = patriciaTree.search('ca');
        expect(node2).toEqual(false);
    });
});
