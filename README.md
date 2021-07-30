### 数据结构和算法

本仓库主要用于记录数据结构和算法相关的心得和一些练习。

#### 技术

JavaScript+TypeScript+Jest

#### 目录

```
├── README.md
├── babel.config.js
├── images
│   ├── single-linked-list-cycle.png
│   └── single-linked-list.png
├── package-lock.json
├── package.json
└── src
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
    │   ├── Heap.test.ts
    │   └── Heap.ts
    ├── 09_graph
    │   ├── graph.test.ts
    │   └── graph.ts
    ├── 10_string_match
    │   ├── badCharacterRule
    │   │   ├── badCharacterRule.test.ts
    │   │   └── badCharacterRule.ts
    │   └── goodSuffixShift
    │       ├── goodSuffixShift.test.ts
    │       └── goodSuffixShift.ts
    └── common
        └── Node.ts

```

#### 用法

- npm install
- npm run test，可以看 UT

### 练习

- [单链表 CRUD、单链表反转、链表中环的检测、两个有序的链表合并、删除链表倒数第 n 个结点](/src/01_linkList)
- [栈的实现](/src/02_stack/)
- [队的实现](/src/03_queue)
- [排序包括冒泡排序、插入排序、归并排序、快排、计数排序](/src/04_sort)
- [二分查找](/src/05_binarySearch)
- [跳表](/src/06_skiplist)
- [二叉树](/src/07_binaryTree)
- [堆](/src/08_heap)
- [图](/src/09_graph)
- [字符串匹配](/src/10_string_match)
