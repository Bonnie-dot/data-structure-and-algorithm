import {
  searchValueWithFirstGreaterOrEqualValue,
  searchValueWithFirstValue,
  searchValueWithLastLessOrEqualValue,
  searchValueWithLastValue,
  searchValueWithLoop,
  searchValueWithRecursive,
} from './binarySearch';
import { describe } from '@jest/globals';

describe('should look up correctly', () => {
  test('should look up correctly when call searchValueWithLoop method', () => {
    const result = searchValueWithLoop(19, [8, 19, 23, 27, 33, 45, 55, 67, 98]);
    expect(result).toEqual(1);
  });

  test('should look up correctly when call searchValueWithRecursive method', () => {
    const result = searchValueWithRecursive(
      19,
      [8, 19, 23, 27, 33, 45, 55, 67, 98],
      0,
      9
    );
    expect(result).toEqual(1);
  });

  test('should look up first equal value when searchValueWithFirstValue method ', () => {
    const result = searchValueWithFirstValue(
      [8, 19, 19, 27, 33, 45, 55, 67, 98],
      19,
      0,
      9
    );
    expect(result).toEqual(1);
  });

  test('should look up last equal value when searchValueWithLastValue method ', () => {
    const result = searchValueWithLastValue(
      [8, 19, 19, 19, 33, 45, 55, 67, 98],
      19,
      0,
      9
    );
    expect(result).toEqual(3);
  });

  it.each`
    data                                   | searchValue | low  | high | expected
    ${[8, 19, 19, 19, 33, 45, 55, 67, 98]} | ${19}       | ${0} | ${9} | ${1}
    ${[8, 19, 19, 20, 33, 45, 55, 67, 98]} | ${19}       | ${0} | ${9} | ${1}
    ${[8, 19, 19, 21, 33, 45, 55, 67, 98]} | ${20}       | ${0} | ${9} | ${3}
  `(
    'should return $expected when call searchValueWithFirstGreaterOrEqualValue method with $data,$searchValue',
    ({ data, searchValue, low, high, expected }) => {
      const result = searchValueWithFirstGreaterOrEqualValue(
        data,
        searchValue,
        low,
        high
      );
      expect(result).toEqual(expected);
    }
  );

  it.each`
    data                                    | searchValue | low  | high | expected
    ${[8, 19, 19, 19, 33, 45, 55, 67, 98]}  | ${19}       | ${0} | ${9} | ${3}
    ${[10, 15, 16, 16, 20, 45, 55, 67, 98]} | ${17}       | ${0} | ${9} | ${3}
  `(
    'should return $expected when call searchValueWithLastLessOrEqualValue method with $data,$searchValue',
    ({ data, searchValue, low, high, expected }) => {
      const result = searchValueWithLastLessOrEqualValue(
        data,
        searchValue,
        low,
        high
      );
      expect(result).toEqual(expected);
    }
  );
});
