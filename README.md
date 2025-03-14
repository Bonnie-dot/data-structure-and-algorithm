### 数据结构和算法

本仓库主要用于记录数据结构和算法相关的心得和一些练习。

#### 技术

JavaScript+TypeScript+Jest

#### 目录

```
    ├── 00_common
       │   └── Node.ts
       ├── 01_linkList
       │   ├── SingleLinked.ts
       │   ├── SingleLinkedList.test.ts
       │   └── linkedList.md
       ├── 02_stack
       │   ├── browser-forward-back
       │   │   ├── Browser-forward-back.test.ts
       │   │   └── Browser-forward-back.ts
       │   ├── stack-array
       │   │   ├── Stack.test.ts
       │   │   └── Stack.ts
       │   └── stack-link
       │       ├── Stack.test.ts
       │       └── Stack.ts
       ├── 03_queue
       │   ├── circle_queue_array
       │   │   ├── Queue.test.ts
       │   │   └── Queue.ts
       │   └── queue_link
       │       ├── Queue.test.ts
       │       └── Queue.ts
       ├── 04_sort
       │   ├── Sort.test.ts
       │   └── Sort.ts
       ├── 05_binarySearch
       │   ├── binarySearch.test.ts
       │   └── binarySearch.ts
       ├── 06_skiplist
       │   ├── Node.ts
       │   ├── skiplist.test.ts
       │   └── skiplist.ts
       ├── 07_binaryTree
       │   ├── Node.ts
       │   ├── SearchBinaryTree.test.ts
       │   └── SearchBinaryTree.ts
       ├── 08_heap
       │   ├── MaxHeap.test.ts
       │   └── Heap.ts
       ├── 09_graph
       │   ├── graph
       │   │   ├── graph.test.ts
       │   │   └── graph.ts
       │   ├── minSpanTree
       │   │   ├── Edge.ts
       │   │   ├── miniSpanTree.test.ts
       │   │   └── miniSpanTree.ts
       │   ├── shortestPath
       │   │   ├── shortestPath.test.ts
       │   │   └── shortestPath.ts
       │   └── topological
       │       ├── EdgeNode.ts
       │       ├── VertexNode.ts
       │       ├── topologicalSort
       │       │   ├── topologicalSort.test.ts
       │       │   └── topologicalSort.ts
       │       └── topologicalWithWeight
       │           ├── topologicalWithWeight.test.ts
       │           └── topologicalWithWeight.ts
       └── 10_string_match
           ├── AcTrie
           │   ├── trie.test.ts
           │   └── trie.ts
           ├── badCharacterRule
           │   ├── badCharacterRule.test.ts
           │   └── badCharacterRule.ts
           ├── goodSuffixShift
           │   ├── goodSuffixShift.test.ts
           │   └── goodSuffixShift.ts
           ├── kmp
           │   ├── kmp.test.ts
           │   └── kmp.ts
           ├── stringMatch.test.ts
           └── trie
               ├── trie.test.ts
               └── trie.ts

```

#### 用法

-   npm install
-   npm run test，可以看 UT

### 练习

-   [单链表 CRUD、单链表反转、链表中环的检测、两个有序的链表合并、删除链表倒数第 n 个结点](/src/01_linkList)
-   [栈的实现](/src/02_stack/)
-   [队的实现](/src/03_queue)
-   [排序包括冒泡排序、插入排序、归并排序、快排、计数排序](/src/04_sort)
-   [二分查找](/src/05_binarySearch)
-   [跳表](/src/06_skiplist)
-   [二叉树](/src/07_tree)
-   [堆](/src/08_heap)
-   [图](/src/09_graph)
-   [字符串匹配](/src/10_string_match)

### [图的广度优先和深度优先，Prim and Kruskal for Minimum Cost Spanning Tree,最短路径,拓扑排序、发现关键路径](/src/09_graph)

-   最小代价生成树图解
    ![minimunCostSpaningTree](https://user-images.githubusercontent.com/19220476/128635541-b8b8378a-8c87-4b05-a62b-0cc8383faf04.png)

### [字符串匹配 BM 和 KMP，前缀字符匹配 Trie](/src/10_string_match)

-   BM 图解
    ![bm](https://user-images.githubusercontent.com/19220476/128634454-5a3f21c7-1f57-480b-894c-a29022712924.png)
-   KMP 图解
    ![kmp](https://user-images.githubusercontent.com/19220476/128634444-1df452ef-6b81-40cd-9e73-9140e7fc4da3.png)
