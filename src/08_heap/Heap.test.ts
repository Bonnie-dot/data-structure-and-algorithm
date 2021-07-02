import { Heap } from './Heap';

describe('heap operator', () => {
  it('should insert correct when call insert', () => {
    const heap = new Heap();
    heap.insert(1);
    const array = heap.print();

    expect(array).toEqual([1]);
  });

  it('should insert two values by order when call insert', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    const array = heap.print();

    expect(array).toEqual([2, 1]);
  });

  it('should insert four values by order when call insert', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(6);
    heap.insert(4);
    const array = heap.print();

    expect(array).toEqual([6, 4, 2, 1]);
  });

  it('should insert multiple values by order when call insert', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(6);
    heap.insert(4);
    heap.insert(3);
    const array = heap.print();

    expect(array).toEqual([6, 4, 2, 1, 3]);
  });

  it('should delete top values when call deleteHeapTop', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(6);
    heap.insert(4);
    heap.insert(3);
    heap.deleteHeapTop();
    const array = heap.print();

    expect(array).toEqual([4, 3, 2, 1]);
  });

  it('should sort values when call sort', () => {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(6);
    heap.insert(4);
    heap.insert(3);
    const result = heap.sort();

    expect(result).toEqual([6, 4, 3, 2, 1]);
  });
});
