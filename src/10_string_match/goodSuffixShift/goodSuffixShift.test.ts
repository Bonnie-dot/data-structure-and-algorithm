import { GoodSuffixShift } from './goodSuffixShift';

describe('goodSuffixShift', () => {
    test('should transform correct value when init class with not match value', function () {
        const goodSuffixShift = new GoodSuffixShift('cbacbd');

        expect(goodSuffixShift.suffix).toEqual([-1, -1, -1, -1, -1, -1]);
        expect(goodSuffixShift.prefix).toEqual([
            false,
            false,
            false,
            false,
            false,
            false,
        ]);
    });

    test('should transform correct value when init class with  match value', function () {
        const goodSuffixShift = new GoodSuffixShift('cbacba');

        expect(goodSuffixShift.suffix).toEqual([-1, 2, 1, 0, -1, -1]);
        expect(goodSuffixShift.prefix).toEqual([
            false,
            false,
            false,
            true,
            false,
            false,
        ]);
    });

    test('should transform correct value when init class with  match value with different', function () {
        const goodSuffixShift = new GoodSuffixShift('ccabcc');

        expect(goodSuffixShift.suffix).toEqual([-1, 4, 0, -1, -1, -1]);
        expect(goodSuffixShift.prefix).toEqual([
            false,
            true,
            true,
            false,
            false,
            false,
        ]);
    });

    test('should return move index when call moveByGoodSuffixShift with having no good suffix', function () {
        const goodSuffixShift = new GoodSuffixShift('abbcabc');
        const matchIndex = goodSuffixShift.matchWithBM('bcabbcabc');

        expect(matchIndex).toEqual(2);
    });

    test('should return move index when call moveByGoodSuffixShift with having good suffix', function () {
        const goodSuffixShift = new GoodSuffixShift('abcabc');
        const matchIndex = goodSuffixShift.matchWithBM('abbabcabc');

        expect(matchIndex).toEqual(3);
    });

    test('should return move index when call moveByGoodSuffixShift with having more than one good suffix', function () {
        const goodSuffixShift = new GoodSuffixShift('ababab');
        const matchIndex = goodSuffixShift.matchWithBM('abbabababc');

        expect(matchIndex).toEqual(3);
    });
});
