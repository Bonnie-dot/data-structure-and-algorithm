import { describe, test } from "@jest/globals";
import { Stack } from "./Stack";
import Node from "../../common/Node";

describe("test stack with related operation", () => {
  test("should correctly push when add new value", () => {
    const stack = new Stack();
    stack.push(new Node("1"));
    stack.push(new Node("2"));

    const result = stack.getData();
    expect(result).toEqual("1,2");
  });

  test("should correctly shift when remove new value", () => {
    const stack = new Stack();
    stack.push(new Node("1"));
    let node = new Node("2");
    stack.push(node);
    const result = stack.pop();
    stack.getData();

    expect(result).toEqual(node);
    expect(stack.getData()).toEqual("1");
  });

  test("should return -1 when shift in a empty stack", () => {
    const stack = new Stack();
    const result = stack.pop();

    expect(result).toEqual(-1);
  });

  test("should return -1 when stack having not value", () => {
    const stack = new Stack();
    stack.push(new Node("1"));
    stack.push(new Node("2"));
    stack.pop();
    stack.pop();
    const result = stack.pop();

    expect(result).toEqual(-1);
    expect(stack.getData()).toEqual(null);
  });
});
