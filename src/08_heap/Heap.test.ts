import { Heap } from './Heap'

describe('heap operator', () => {
  it('should insert correct when call insert', function () {
    const heap = new Heap()
    heap.insert(1)
    const array = heap.print()
    expect(array).toEqual([1])
  })

  it('should insert two values by order when call insert', function () {
    const heap = new Heap()
    heap.insert(1)
    heap.insert(2)
    const array = heap.print()
    expect(array).toEqual([2, 1])
  })

  it('should insert four values by order when call insert', function () {
    const heap = new Heap()
    heap.insert(1)
    heap.insert(2)
    heap.insert(6)
    heap.insert(4)
    const array = heap.print()
    expect(array).toEqual([6, 4, 2, 1])
  })

  it('should insert multiple values by order when call insert', function () {
    const heap = new Heap()
    heap.insert(1)
    heap.insert(2)
    heap.insert(6)
    heap.insert(4)
    heap.insert(3)
    const array = heap.print()
    expect(array).toEqual([6, 4, 2, 1, 3])
  })
})
