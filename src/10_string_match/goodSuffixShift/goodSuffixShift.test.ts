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

    expect(goodSuffixShift.suffix).toEqual([-1, 4, 0, -1, -1, -1]);
    expect(goodSuffixShift.prefix).toEqual([false, true, true, false, false, false]);
  });

  it('should return move index when call moveByGoodSuffixShift with having no good suffix', function () {
    const goodSuffixShift = new GoodSuffixShift('abbcabc');
    const matchIndex = goodSuffixShift.matchWithBM('bcabbcabc');

    expect(matchIndex).toEqual(2);
  });

  it('should return move index when call moveByGoodSuffixShift with having good suffix', function () {
    const goodSuffixShift = new GoodSuffixShift('abcabc');
    const matchIndex = goodSuffixShift.matchWithBM('abbabcabc');

    expect(matchIndex).toEqual(3);
  });
});
