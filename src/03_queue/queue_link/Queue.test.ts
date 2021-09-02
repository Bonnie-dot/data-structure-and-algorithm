import Queue from './Queue';

describe('test queue operation', () => {
    test('should remove first node when call pop', () => {
        const queue = new Queue();
        queue.push('1');
        queue.push('2');
        queue.push('3');
        queue.pop();
        const result = queue.getData();
        expect(result).toEqual('2,3');
    });
});
