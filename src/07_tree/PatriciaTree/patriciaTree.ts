class PatriciaTreeNode {
    children: Map<string, PatriciaTreeNode>;
    isEndOfWord: boolean;
    value: string;

    constructor(value: string = '') {
        this.children = new Map();
        this.isEndOfWord = false;
        this.value = value;
    }
}

export class PatriciaTree {
    private root: PatriciaTreeNode;

    constructor() {
        this.root = new PatriciaTreeNode('');
    }

    insert(word: string) {
        this._insert(this.root, word);
    }

    private _insert(node: PatriciaTreeNode, word: string) {
        for (const [key, childNode] of node.children) {
            const commonPrefix = this.getCommonPrefix(word, key);
            if (commonPrefix.length > 0) {
                // If common prefix is less than key, need to delete previous value and set new value.
                const splitNode = new PatriciaTreeNode(commonPrefix);
                if (commonPrefix < key) {
                    node.children.delete(key);
                    node.children.set(commonPrefix, splitNode);

                    // If reminding key is not empty, it will be the new value of the child node.
                    const remindingKey = key.slice(commonPrefix.length);
                    if (remindingKey) {
                        childNode.value = remindingKey;
                        splitNode.children.set(remindingKey, childNode);
                    }
                } else {
                    const remindingWord = key.slice(commonPrefix.length);
                    if (remindingWord) {
                        this._insert(splitNode, remindingWord);
                    } else {
                        splitNode.isEndOfWord = true;
                    }
                }
                return;
            }
        }
        //If don't match child node, it will directly insert under the node.
        const newNode = new PatriciaTreeNode(word);
        newNode.isEndOfWord = true;
        node.children.set(word, newNode);
    }

    search(word: string): boolean {
        return this._search(this.root, word);
    }

    private _search(node: PatriciaTreeNode, word: string): boolean {
        if (!word) {
            return node.isEndOfWord;
        }
        for (const [key, childNode] of node.children) {
            const commonPrefix = this.getCommonPrefix(word, key);
            if (commonPrefix.length > 0) {
                if (commonPrefix < key) {
                    return false;
                } else {
                    return this._search(
                        childNode,
                        word.slice(commonPrefix.length),
                    );
                }
            }
        }
        return false;
    }
    private getCommonPrefix(word: string, key: string) {
        let common = '';
        const minText = word.length < key.length ? word : key;
        for (let i = 0; i < minText.length; i++) {
            if (word[i] === key[i]) {
                common += word[i];
            }
        }
        return common;
    }

    printTree() {
        this._printTree(this.root, '');
    }

    private _printTree(node: PatriciaTreeNode, prefix: string) {
        for (const [key, childNode] of node.children) {
            const newPrefix = prefix + key;
            if (!childNode.isEndOfWord) {
                this._printTree(childNode, newPrefix);
            }
        }
    }
}
