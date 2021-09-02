import { matchWithBadCharacterRule, generateHashTable } from './badCharacterRule';

describe('badCharacterRule', () => {
  test('should generate b c when call generateHashTable', function () {
    const numbers = generateHashTable('ab');
    expect(numbers[97]).toEqual(0);
    expect(numbers[98]).toEqual(1);
  });

  test('should match string when call matchWithBM', function () {
    const index = matchWithBadCharacterRule('abcd', 'bc');
    expect(index).toEqual(1);
  });

  test('should not match string when call matchWithBM', function () {
    const index = matchWithBadCharacterRule('abcd', 'ac');
    expect(index).toEqual(-1);
  });
});
