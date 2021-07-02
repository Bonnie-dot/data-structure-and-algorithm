import {Heap} from "./Heap";

describe('heap operator',()=>{
    it('should insert correct when call insert', function () {
        const heap = new Heap();
        heap.insert(1);
        let array = heap.print();
        expect(array).toEqual([1]);
    });
})
