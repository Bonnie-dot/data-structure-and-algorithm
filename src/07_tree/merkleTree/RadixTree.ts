class RadixTreeNode {
    children: Map<string, RadixTreeNode>;
    isEndOfWord: boolean;
    value: string; // 存储当前节点的字符串片段

    constructor(value: string = '') {
        this.children = new Map();
        this.isEndOfWord = false;
        this.value = value;
    }
}

class PatriciaTreew {
    private root: RadixTreeNode;

    constructor() {
        this.root = new RadixTreeNode();
    }

    // 插入一个单词
    insert(word: string): void {
        this._insert(this.root, word);
    }

    private _insert(node: RadixTreeNode, word: string): void {
        if (!word) {
            node.isEndOfWord = true;
            return;
        }

        // 查找与当前字符匹配的子节点
        for (const [childKey, childNode] of node.children) {
            const commonPrefix = this._getCommonPrefix(childKey, word);

            if (commonPrefix) {
                if (commonPrefix.length < childKey.length) {
                    // 如果公共前缀小于当前子节点的值，需要分裂子节点
                    const splitNode = new RadixTreeNode(commonPrefix);
                    node.children.delete(childKey);
                    node.children.set(commonPrefix, splitNode);

                    // 更新原有子节点的值
                    const remainingKey = childKey.slice(commonPrefix.length);
                    childNode.value = remainingKey;
                    splitNode.children.set(remainingKey, childNode);

                    // 插入剩余部分
                    const remainingWord = word.slice(commonPrefix.length);
                    if (remainingWord) {
                        this._insert(splitNode, remainingWord);
                    } else {
                        splitNode.isEndOfWord = true;
                    }
                } else {
                    // 如果公共前缀等于子节点的值，递归插入剩余部分
                    const remainingWord = word.slice(commonPrefix.length);
                    this._insert(childNode, remainingWord);
                }
                return;
            }
        }

        // 如果没有匹配的子节点，直接插入新节点
        node.children.set(word, new RadixTreeNode(word));
        node.children.get(word)!.isEndOfWord = true;
    }

    // 查找一个单词
    search(word: string): boolean {
        return this._search(this.root, word);
    }

    private _search(node: RadixTreeNode, word: string): boolean {
        if (!word) {
            return node.isEndOfWord;
        }

        for (const [childKey, childNode] of node.children) {
            const commonPrefix = this._getCommonPrefix(childKey, word);

            if (commonPrefix) {
                if (commonPrefix.length < childKey.length) {
                    // 如果公共前缀小于子节点的值，说明不匹配
                    return false;
                }
                // 递归查找剩余部分
                const remainingWord = word.slice(commonPrefix.length);
                return this._search(childNode, remainingWord);
            }
        }

        return false;
    }

    // 删除一个单词
    delete(word: string): boolean {
        return this._delete(this.root, word);
    }

    private _delete(node: RadixTreeNode, word: string): boolean {
        if (!word) {
            if (!node.isEndOfWord) {
                return false;
            }
            node.isEndOfWord = false;
            return node.children.size === 0;
        }

        for (const [childKey, childNode] of node.children) {
            const commonPrefix = this._getCommonPrefix(childKey, word);

            if (commonPrefix) {
                if (commonPrefix.length < childKey.length) {
                    // 如果公共前缀小于子节点的值，说明不匹配
                    return false;
                }
                // 递归删除剩余部分
                const remainingWord = word.slice(commonPrefix.length);
                const shouldDeleteChild = this._delete(
                    childNode,
                    remainingWord,
                );

                if (shouldDeleteChild) {
                    node.children.delete(childKey);
                    if (node.children.size === 0 && !node.isEndOfWord) {
                        return true;
                    }
                }
                return false;
            }
        }

        return false;
    }

    // 检查是否存在以给定前缀开头的单词
    startsWith(prefix: string): boolean {
        return this._startsWith(this.root, prefix);
    }

    private _startsWith(node: RadixTreeNode, prefix: string): boolean {
        if (!prefix) {
            return true;
        }

        for (const [childKey, childNode] of node.children) {
            const commonPrefix = this._getCommonPrefix(childKey, prefix);

            if (commonPrefix) {
                if (commonPrefix.length < childKey.length) {
                    // 如果公共前缀小于子节点的值，说明前缀匹配
                    return true;
                }
                // 递归检查剩余部分
                const remainingPrefix = prefix.slice(commonPrefix.length);
                return this._startsWith(childNode, remainingPrefix);
            }
        }

        return false;
    }

    // 获取两个字符串的公共前缀
    private _getCommonPrefix(a: string, b: string): string {
        let commonPrefix = '';
        const minLength = Math.min(a.length, b.length);
        for (let i = 0; i < minLength; i++) {
            if (a[i] === b[i]) {
                commonPrefix += a[i];
            } else {
                break;
            }
        }
        return commonPrefix;
    }
}

// 使用示例
const radixTree = new PatriciaTree();
radixTree.insert('apple');
radixTree.insert('app');
radixTree.insert('application');
