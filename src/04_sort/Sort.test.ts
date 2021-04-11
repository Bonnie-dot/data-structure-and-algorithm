import Sort from "./Sort";

describe('test sort correctly', () => {

    test('should sort correctly when call bubbleSort', () => {
        const sort = new Sort([4, 5, 6, 3, 2, 1]);
        const result = sort.bubbleSort();

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort correctly when call bubbleSort with a sort array', () => {
        const sort = new Sort([1, 2, 3, 4, 5, 6]);
        const result = sort.bubbleSort();

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort correctly when call insertionSort', () => {
        const sort = new Sort([4, 5, 6, 3, 2, 1]);
        const result = sort.insertionSort();

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort correctly when call mergeSort', () => {
        const sort = new Sort([4, 5, 6, 3, 2, 1]);
        const result = sort.mergeSort(sort.array);

        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort correctly when call quickSort', () => {
        const sort = new Sort([4, 5, 6, 3, 2, 1]);
        sort.quickSort();

        expect(sort.array).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should sort correctly when call countingSort', () => {
        const sort = new Sort([2,5,3,0,2,3,0,3]);
        sort.countingSort();

        expect(sort.array).toEqual([ 0, 0, 2, 2, 3, 3, 3, 5]);
    });
})
