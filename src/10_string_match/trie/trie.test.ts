import { Trie } from './trie';

describe('trie', () => {
    test('should find text correctly when call insert', function () {
        const trie = new Trie();
        trie.insert('hello');
        trie.insert('her');

        const result = trie.find('hello');
        expect(result).toBe(true);
    });
});
