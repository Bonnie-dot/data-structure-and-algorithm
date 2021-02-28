import {describe, test} from "@jest/globals";
import Stack from "./Stack";

describe('test stack with related operation',()=>{

    test('should correctly push when add new value',()=>{
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        const result = stack.getValues();
        expect(result).toEqual([2,1])
    });

    test('should correctly pop when remove new value',()=>{
        const stack = new Stack();
        stack.push(1);
        stack.push(2);
        stack.pop();
        const result = stack.getValues();
        expect(result).toEqual([1])
    });
})
