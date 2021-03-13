import Queue from "./Queue";

describe('Queue operating',()=>{

    it('should first element shift when call shift', function () {

        const queue = new Queue();
        queue.push(1);
        queue.push(2);
        queue.push(3);
        const result = queue.shift();

        expect(result).toEqual(1);
        expect(queue.data).toEqual([2,3]);

    });
})
