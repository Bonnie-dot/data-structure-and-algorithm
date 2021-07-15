import SingleLinked from './SingleLinked';
import { describe, test } from '@jest/globals';
import Node from '../00_common/Node';

describe('test single linked list operation', () => {
  test('should append a given node ', () => {
    const singleLinkedList = new SingleLinked();
    singleLinkedList.append(new Node('1'));
    const result = singleLinkedList.getData();
    expect(result).toBe('1');
  });

  test('should find a given node', () => {
    const singleLinked = new SingleLinked();
    const node = new Node('2');
    singleLinked.append(node);
    const findNode = singleLinked.findByValue(node);
    expect(findNode).toBe(node);
  });

  test('should remove a give node', () => {
    const singleLinked = new SingleLinked();
    const node = new Node('2');
    singleLinked.append(node);
    singleLinked.append(new Node('3'));
    singleLinked.remove(node);
    const result = singleLinked.getData();
    expect(result).toBe('3');
  });

  test('should insert node before a given value', () => {
    const singleLinked = new SingleLinked();
    const node = new Node('2');
    singleLinked.append(node);
    singleLinked.append(new Node('3'));
    singleLinked.insert(new Node('4'), node);
    const result = singleLinked.getData();
    expect(result).toBe('4,2,3');
  });

  test('should reverse all node when call reverse', () => {
    const singleLinked = new SingleLinked();
    const node = new Node('2');
    singleLinked.append(node);
    singleLinked.append(new Node('3'));
    singleLinked.append(new Node('4'));
    singleLinked.reverse();
    const result = singleLinked.getData();
    expect(result).toBe('4,3,2');
  });

  test('should return true when given a single linked list cycle', () => {
    const singleLinked = new SingleLinked();
    singleLinked.append(new Node('1'));
    singleLinked.append(new Node('2'));
    const node3 = new Node('3');
    singleLinked.append(node3);
    singleLinked.append(new Node('4'));
    singleLinked.append(new Node('5'));
    singleLinked.append(new Node('6'));
    singleLinked.append(new Node('7'));
    const node8 = new Node('8');
    singleLinked.append(node8);
    node8.next = node3;
    const result = singleLinked.checkCycleStart();
    expect(result).toBe('3');
  });

  test('should merge sorted linked list when call mergeSortedList', () => {
    const singleLinked1 = new SingleLinked();
    singleLinked1.append(new Node('1'));
    singleLinked1.append(new Node('2'));
    singleLinked1.append(new Node('4'));
    const singleLinked2 = new SingleLinked();
    singleLinked2.append(new Node('1'));
    singleLinked2.append(new Node('3'));
    singleLinked2.append(new Node('4'));
    const result = singleLinked1.mergeSortedList(singleLinked1, singleLinked2);
    expect(result).toEqual({
      data: 'head',
      next: {
        data: '1',
        next: {
          data: '1',
          next: {
            data: '2',
            next: {
              data: '3',
              next: {
                data: '4',
                next: { data: '4', next: null },
              },
            },
          },
        },
      },
    });
  });

  test('should delete the penultimate node when call deleteByLastIndex', () => {
    const singleLinked = new SingleLinked();
    singleLinked.append(new Node('1'));
    singleLinked.append(new Node('2'));
    singleLinked.append(new Node('3'));
    singleLinked.append(new Node('4'));
    singleLinked.append(new Node('5'));
    singleLinked.append(new Node('6'));
    singleLinked.deleteByLastIndex(4);
    const result = singleLinked.getData();
    expect(result).toBe('1,2,5,6');
  });

  test('should return middle value when call findMiddleValue', () => {
    const singleLinked = new SingleLinked();
    singleLinked.append(new Node('1'));
    singleLinked.append(new Node('2'));
    singleLinked.append(new Node('3'));
    singleLinked.append(new Node('4'));
    singleLinked.append(new Node('5'));
    singleLinked.append(new Node('6'));
    const result = singleLinked.findMiddleValue();
    expect(result).toEqual({
      data: '3',
      next: {
        data: '4',
        next: { data: '5', next: { data: '6', next: null } },
      },
    });
  });

  test('should empty when clear link', () => {
    const singleLinked = new SingleLinked();
    singleLinked.append(new Node('1'));
    singleLinked.append(new Node('2'));
    singleLinked.clearLink();

    expect(singleLinked.getData()).toEqual(null);
  });

  test('should remove first node when call `removeFirstNode`', () => {
    const singleLinked = new SingleLinked();
    singleLinked.append(new Node('1'));
    singleLinked.append(new Node('2'));
    singleLinked.removeFirstNode();
    const result = singleLinked.getData();
    expect(result).toEqual('2');
  });
});
