import { PatriciaTree } from './PatriciaTree';

describe('patricia tree', () => {
    let patriciaTree: PatriciaTree;
    beforeAll(() => {
        patriciaTree = new PatriciaTree();
    });
    it.skip('should insert successfully', () => {
        patriciaTree.insert('cat');
        patriciaTree.insert('ca');
        patriciaTree.printTree();
        const node = patriciaTree.search('cat');
        expect(node?.value).toEqual('cat');
        const node2 = patriciaTree.search('ca');
        expect(node2?.value).toBeUndefined();
    });
});
