import { Heap } from "./Heap";

describe("heap operator", () => {
  it("should insert correct when call insert", function () {
    const heap = new Heap();
    heap.insert(1);
    let array = heap.print();
    expect(array).toEqual([1]);
  });

  it("should insert two values by order when call insert", function () {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    let array = heap.print();
    expect(array).toEqual([2, 1]);
  });

  it("should insert four values by order when call insert", function () {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(6);
    heap.insert(4);
    let array = heap.print();
    expect(array).toEqual([6, 4, 2, 1]);
  });

  it("should insert multiple values by order when call insert", function () {
    const heap = new Heap();
    heap.insert(1);
    heap.insert(2);
    heap.insert(6);
    heap.insert(4);
    heap.insert(3);
    let array = heap.print();
    expect(array).toEqual([6, 4, 2, 1, 3]);
  });
});
