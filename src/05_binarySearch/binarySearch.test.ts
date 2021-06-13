import {
  searchValueWithFirstValue,
  searchValueWithLoop,
  searchValueWithRecursive,
} from "./binarySearch";
import { describe } from "@jest/globals";

describe("should look up correctly", () => {
  it("should look up correctly when call searchValueWithLoop method", function () {
    const result = searchValueWithLoop(19, [8, 19, 23, 27, 33, 45, 55, 67, 98]);
    expect(result).toEqual(1);
  });

  it("should look up correctly when call searchValueWithRecursive method", function () {
    const result = searchValueWithRecursive(
      19,
      [8, 19, 23, 27, 33, 45, 55, 67, 98],
      0,
      9
    );
    expect(result).toEqual(1);
  });

  it("should look up first equal value when searchValueWithFirstValue method ", function () {
    const result = searchValueWithFirstValue(
      [8, 19, 19, 27, 33, 45, 55, 67, 98],
      19,
        0,
        9
    );
    expect(result).toEqual(1);
  });

});
