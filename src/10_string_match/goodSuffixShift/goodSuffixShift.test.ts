import { GoodSuffixShift } from './goodSuffixShift';

describe('goodSuffixShift', () => {
  it('should transform correct value when init class with not match value', function () {
    const goodSuffixShift = new GoodSuffixShift('cbacbd');

    expect(goodSuffixShift.suffix).toEqual([-1, -1, -1, -1, -1, -1]);
    expect(goodSuffixShift.prefix).toEqual([false, false, false, false, false, false]);
  });

  it('should transform correct value when init class with  match value', function () {
    const goodSuffixShift = new GoodSuffixShift('cbacba');

    expect(goodSuffixShift.suffix).toEqual([-1, 2, 1, 0, -1, -1]);
    expect(goodSuffixShift.prefix).toEqual([false, false, false, true, false, false]);
  });

  it('should transform correct value when init class with  match value with different', function () {
    const goodSuffixShift = new GoodSuffixShift('ccabcc');

    expect(goodSuffixShift.suffix).toEqual([-1, 4, 0, -1, -1,-1]);
    expect(goodSuffixShift.prefix).toEqual([false, true, true, false, false, false]);
  });

});
