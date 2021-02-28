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
        const stack = new Stack(2);
        stack.push(1);
        stack.push(2);
        stack.pop();
        const result = stack.getValues();
        expect(result).toEqual([1,undefined])
    });

    test('should throw new stack overflow error when count is greater than size',()=>{
        const stack = new Stack(1);
        stack.push(1);
        expect(()=>{stack.push(2)}).toThrow('stack overflow error')
    });

    test('should throw new empty error when stack is empty',()=>{
        const stack = new Stack(0);
        expect(()=>{stack.pop()}).toThrow('stack is empty')
    })
})
