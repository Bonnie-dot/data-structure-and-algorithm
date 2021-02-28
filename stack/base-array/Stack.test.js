import {describe, test} from "@jest/globals";
import Stack from "./Stack";

describe('test stack with related operation',()=>{

    test('should correctly push when add new value',()=>{
        const stack = new Stack(2);
        stack.push(1);
        stack.push(2);
        const result = stack.getValues();
        expect(result).toEqual([1,2])
    });

    test('should correctly pop when remove new value',()=>{
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        const result = stack.getValues();
        expect(result).toEqual([1])
    });

    test('should throw new stackOverflowError when count is greater than size',()=>{
        const stack = new Stack(1);
        stack.push(1);
        expect(()=>{stack.push(2)}).toThrow('stack overflow error')
    })
})
