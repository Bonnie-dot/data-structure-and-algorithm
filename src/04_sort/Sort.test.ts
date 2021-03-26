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
})
