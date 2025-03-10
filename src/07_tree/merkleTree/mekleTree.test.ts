import { MerkleTree } from './mekleTree';

describe('merkleTree', () => {
    it('should build tree correctly', () => {
        const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const tree = new MerkleTree(data);
        expect(tree.merkleRoot).toBe(
            '99ab81c843172f110d3b48ffcb1a950d150ff65ace856b8a24859dda573d4f68',
        );
    });

    it('should get path correctly', () => {
        const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const rootHash = new MerkleTree(data);
        const path = rootHash.getPath('a');
        expect(path).toEqual([
            'b',
            '21e721c35a5823fdb452fa2f9f0a612c74fb952e06927489c6b27a43b817bed4',
            '568a301ab7df10a2aa916d2edc73ff7660409b8223d72b8e6b3259ea551b3326',
        ]);
    });

    it('should verify path correctly', () => {
        const data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        const rootHash = new MerkleTree(data);
        const path = rootHash.getPath('a');
        const result = rootHash.verifyPath('a', path);
        expect(result).toBe(true);
    });
});
