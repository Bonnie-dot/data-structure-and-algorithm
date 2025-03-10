class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEndingChar: boolean;
}

export class Trie {
    root: TrieNode;
    constructor() {
        this.root = new TrieNode();
    }
    insert(text: string) {
        let currentTrie = this.root;
        for (let i = 0; i < text.length; i++) {
            if (!currentTrie.children.has(text[i])) {
                currentTrie.children.set(text[i], new TrieNode());
            }
            currentTrie = currentTrie.children.get(text[i])!;
        }
        if (currentTrie.children.size === 0) {
            currentTrie.isEndingChar = true;
        }
    }

    search(text: string) {
        let currentTrieChildren = this.root.children;
        for (let i = 0; i < text.length; i++) {
            if (!currentTrieChildren.has(text[i])) {
                return false;
            }
            currentTrieChildren = currentTrieChildren.get(text[i])!.children;
        }
        return true;
    }

    delete(text: string) {
        let currentTrieChildren = this.root.children;
        for (let i = 0; i < text.length; i++) {
            if (!currentTrieChildren.has(text[i])) {
                return false;
            }
            if (i < text.length - 1) {
                currentTrieChildren = currentTrieChildren.get(
                    text[i],
                )!.children;
            }
        }
        const lastNode = currentTrieChildren.get(text[text.length - 1]);
        if (lastNode?.isEndingChar) {
            lastNode.isEndingChar = false;
            lastNode.children.size === 0 &&
                currentTrieChildren.delete(text[text.length - 1]);
        }
    }
}
