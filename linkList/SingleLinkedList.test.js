import SingleLinked from "./SingleLinked";
import {describe, test} from "@jest/globals";
import Node from './Node';

describe('test single linked list operation', () => {
    test('should append a given node ', () => {
        const singleLinkedList = new SingleLinked();
        singleLinkedList.append(new Node(1));
        const result = singleLinkedList.display();
        expect(result).toBe('{\"data\":\"head\",\"next\":{\"data\":1,\"next\":null}}')
    });

    test('should find a given node', () => {
        const singleLinked = new SingleLinked();
        let node = new Node(2);
        singleLinked.append(node);
        const findNode = singleLinked.findByValue(node);
        expect(findNode).toBe(node);
    });

    test('should remove a give node', () => {
        const singleLinked = new SingleLinked();
        let node = new Node(2);
        singleLinked.append(node);
        singleLinked.append(new Node(3));
        singleLinked.remove(node);
        const result = singleLinked.display();
        expect(result).toBe('{\"data\":\"head\",\"next\":{\"data\":3,\"next\":null}}');
    });

    test('should insert node before a given value', () => {
        const singleLinked = new SingleLinked();
        let node = new Node(2);
        singleLinked.append(node);
        singleLinked.append(new Node(3));
        singleLinked.insert(new Node(4), node);
        const result = singleLinked.display();
        expect(result).toBe('{\"data\":\"head\",\"next\":{\"data\":4,\"next\":{\"data\":2,\"next\":{\"data\":3,\"next\":null}}}}');
    });

    test('should reverse all node when call reverse', () => {
        const singleLinked = new SingleLinked();
        let node = new Node(2);
        singleLinked.append(node);
        singleLinked.append(new Node(3));
        singleLinked.append(new Node(4));
        singleLinked.reverse();
        const result = singleLinked.display();
        expect(result).toBe('{\"data\":\"head\",\"next\":{\"data\":4,\"next\":{\"data\":3,\"next\":{\"data\":2,\"next\":null}}}}');
    });

    test('should return true when given a single linked list cycle', () => {
        const singleLinked = new SingleLinked();
        singleLinked.append(new Node(1));
        singleLinked.append(new Node(2));
        let node3 = new Node(3);
        singleLinked.append(node3);
        singleLinked.append(new Node(4));
        singleLinked.append(new Node(5));
        singleLinked.append(new Node(6));
        singleLinked.append(new Node(7));
        let node8 = new Node(8);
        singleLinked.append(node8);
        node8.next = node3;
        const result = singleLinked.checkCycleStart();
        expect(result).toBe(3);
    })

})