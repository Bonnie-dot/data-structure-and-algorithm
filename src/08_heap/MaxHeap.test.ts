import { MaxHeap } from './MaxHeap';

describe('Maxheap operator', () => {
    test('should insert correct when call insert', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        const array = heap.print();

        expect(array).toEqual([1]);
    });

    test('should insert two values by order when call insert', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        const array = heap.print();

        expect(array).toEqual([2, 1]);
    });

    test('should insert four values by order when call insert', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(6);
        heap.insert(4);
        const array = heap.print();

        expect(array).toEqual([6, 4, 2, 1]);
    });

    test('should insert multiple values by order when call insert', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(6);
        heap.insert(4);
        heap.insert(3);
        const array = heap.print();

        expect(array).toEqual([6, 4, 2, 1, 3]);
    });

    test('should delete top values when call deleteHeapTop', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(6);
        heap.insert(4);
        heap.insert(3);
        heap.deleteHeapTop();
        const array = heap.print();

        expect(array).toEqual([4, 3, 2, 1]);
    });

    test('should sort values when call sort', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(6);
        heap.insert(4);
        heap.insert(3);
        const result = heap.sort();

        expect(result).toEqual([6, 4, 3, 2, 1]);
    });

    it('should go through top element when call peek', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(6);
        heap.insert(4);
        heap.insert(3);
        const result = heap.peek();
        expect(result).toEqual(6);
    });

    it('should remove first element when call pop', () => {
        const heap = new MaxHeap();
        heap.insert(1);
        heap.insert(2);
        heap.insert(6);
        heap.insert(4);
        heap.insert(3);
        const result = heap.pop();
        expect(result).toEqual(6);
        expect(heap.print()).toEqual([4, 3, 2, 1]);
    });
});
