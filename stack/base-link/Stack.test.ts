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
        let node = new Node('2');
        stack.push(node);
        const result = stack.pop();
        stack.getValues();

        expect(result).toEqual(node);
        expect(stack.getValues()).toEqual("{\"data\":\"head\",\"next\":{\"data\":\"1\",\"next\":null}}");
    });

    test('should return -1 when pop in a empty stack',()=>{

        const stack = new Stack();
        const result = stack.pop();

        expect(result).toEqual(-1)
    });

    test('should return -1 when stack having not value',()=>{

        const stack = new Stack();
        stack.push(new Node('1'));
        stack.push(new Node('2')) ;
        stack.pop();
        stack.pop();
       const result = stack.pop()

        expect(result).toEqual(-1)
        expect(stack.getValues()).toEqual("{\"data\":\"head\",\"next\":null}")
    });

    test('should empty when  clear stack',()=>{

        const stack = new Stack();
        stack.push(new Node('1'));
        stack.push(new Node('2')) ;
        stack.clearStack();

        expect(stack.getValues()).toEqual("{\"data\":\"head\",\"next\":null}")
    });
})
