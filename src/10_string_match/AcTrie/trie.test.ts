import { Trie } from './trie';

describe('trie', () => {
    test('should insert text correctly when call insert', function () {
        const trie = new Trie();
        trie.insert('hello');
        // trie.insert('her');

        const result = trie.search('hello');
        expect(result).toBe(true);
    });
    test('should not find text when search given text is not existed', function () {
        const trie = new Trie();
        trie.insert('hello');
        trie.insert('her');

        const result = trie.search('world');
        expect(result).toBe(false);
    });

    test('should delete text correctly when call delete', function () {
        const trie = new Trie();
        trie.insert('hello');
        trie.insert('her');

        trie.delete('hello');
        const result = trie.search('hello');
        expect(result).toBe(false);
    });
});
