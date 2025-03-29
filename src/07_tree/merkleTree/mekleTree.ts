import { createHash } from 'crypto';

export class MerkleTree {
    levels: string[][];
    merkleRoot: string;
    constructor(data) {
        this.levels = [data];
        this.buildTree(data);
        this.merkleRoot = this.levels[this.levels.length - 1][0];
    }

    hashData(data) {
        return createHash('sha256').update(data).digest('hex');
    }

    buildTree(blocks) {
        if (blocks.length === 1) return this.levels;
        const nextLevel: string[] = [];
        for (let i = 0; i < blocks.length; i += 2) {
            const left = blocks[i];
            const right = blocks[i + 1] || left;
            const combinedHash = this.hashData(
                left < right ? left + right : right + left,
            );
            nextLevel.push(combinedHash);
        }
        this.levels.push(nextLevel);
        return this.buildTree(nextLevel);
    }

    getPath(targetBlock) {
        if (!this.levels[0].includes(targetBlock)) {
            throw new Error('Target block not found in data blocks');
        }

        let path: string[] = [];
        let currentLevel = this.levels[0];
        let levelIndex = 0;
        while (currentLevel.length > 1) {
            const index = currentLevel.indexOf(targetBlock);
            const siblingIndex = index % 2 === 0 ? index + 1 : index - 1;
            // 添加兄弟节点的哈希值
            if (siblingIndex < currentLevel.length) {
                path.push(currentLevel[siblingIndex]);
            } else {
                path.push(currentLevel[index]); // 奇数节点时重复自身
            }
            currentLevel = this.levels[++levelIndex];
            targetBlock = this.hashData(
                targetBlock < path[path.length - 1]
                    ? targetBlock + path[path.length - 1]
                    : path[path.length - 1] + targetBlock,
            );
        }

        return path;
    }

    verifyPath(targetBlock, path) {
        let currentHash = targetBlock;
        for (const siblingHash of path) {
            currentHash = this.hashData(
                currentHash < siblingHash
                    ? currentHash + siblingHash
                    : siblingHash + currentHash,
            );
        }
        return currentHash === this.merkleRoot;
    }
}
