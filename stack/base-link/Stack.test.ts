import {describe, test} from "@jest/globals";
import {Node, Stack} from './Stack';

describe('test stack with related operation', () => {

    test('should correctly push when add new value', () => {
        const stack = new Stack();
        stack.push(new Node('1'));
        stack.push(new Node('2'));
        const result = stack.getValues();
        expect(result).toEqual('{\"data\":\"head\",\"next\":{\"data\":\"1\",\"next\":{\"data\":\"2\",\"next\":null}}}')
    });

    test('should correctly pop when remove new value',()=>{
        const stack = new Stack();
        stack.push(new Node('1'));
        stack.push(new Node('2'));
        stack.pop();
        const result = stack.getValues();
        expect(result).toEqual('{\"data\":\"head\",\"next\":{\"data\":\"1\",\"next\":null}}')
    });
    //
    // test('should throw new stack overflow error when count is greater than size',()=>{
    //     const stack = new Stack(1);
    //     stack.push(1);
    //     expect(()=>{stack.push(2)}).toThrow('stack overflow error')
    // });
    //
    // test('should throw new empty error when stack is empty',()=>{
    //     const stack = new Stack(0);
    //     expect(()=>{stack.pop()}).toThrow('stack is empty')
    // })
})
