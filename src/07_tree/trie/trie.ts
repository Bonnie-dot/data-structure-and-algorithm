class TrieNode {
    data: any;
    children: TrieNode[] = new Array(26).fill(null);
    isEndingChar: boolean;
    constructor(data) {
        this.data = data;
    }
}

export class Trie {
    root = new TrieNode('/');

    insert(text: string) {
        let currentTrie = this.root;
        for (let i = 0; i < text.length; i++) {
            const index = text[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (currentTrie.children[index] === null) {
                currentTrie.children[index] = new TrieNode(text[i]);
            }
            currentTrie = currentTrie.children[index];
        }
        if (!this.isChildrenValue(currentTrie.children)) {
            currentTrie.isEndingChar = true;
        }
    }

    isChildrenValue(children: TrieNode[]) {
        const trieNodes = children.filter((item) => item !== null);
        return trieNodes.length > 0;
    }

    find(text: string) {
        let currentTrieChildren = this.root.children;
        for (let i = 0; i < text.length; i++) {
            const index = text[i].charCodeAt(0) - 'a'.charCodeAt(0);
            if (!currentTrieChildren[index]) {
                return false;
            }

            currentTrieChildren = currentTrieChildren[index].children;
        }
        return true;
    }
}
