import Queue from './Queue';

describe('Queue operating', () => {
  it('should enqueue successfully when call enqueue without full', () => {
    const queue = new Queue(5);
    queue.enqueue(1);

    expect(queue.enqueue(2)).toEqual(true);
    expect(queue.data).toEqual([1, 2, undefined, undefined, undefined]);
  });

  it('should enqueue fail when array is fill', () => {
    const queue = new Queue(2);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.enqueue(3)).toEqual(false);
    // it cause spend a space in array.
    expect(queue.data).toEqual([1, undefined]);
  });

  it('should dequeue successfully when call dequeue without full', () => {
    const queue = new Queue(3);
    queue.enqueue(1);
    queue.enqueue(2);

    expect(queue.dequeue()).toEqual(true);
    expect(queue.data).toEqual([undefined, 2, undefined]);
  });

  it('should dequeue fail when array is empty', () => {
    const queue = new Queue(2);

    expect(queue.dequeue()).toEqual(false);
    expect(queue.data).toEqual([undefined, undefined]);
  });
});
