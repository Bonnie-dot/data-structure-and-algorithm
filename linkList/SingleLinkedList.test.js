import SingleLinked from "./SingleLinked";
import {test} from "@jest/globals";
import Node from './Node';


test('should append a given node ', () => {
    const singleLinkedList = new SingleLinked();
    singleLinkedList.append(new Node(1));
    const result = singleLinkedList.display();
    expect(result).toBe('{\"data\":\"head\",\"next\":{\"data\":1,\"next\":null}}')
});

test('should find a given node',()=>{
    const singleLinked = new SingleLinked();
    let node = new Node(2);
    singleLinked.append(node);
    const findNode = singleLinked.findByValue(2);
    expect(findNode).toBe(node);
})