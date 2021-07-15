import { matchWithBM, generateHashTable } from './stringMatch';

it('should generate b c when call generateHashTable', function () {
  const numbers = generateHashTable('ab');
  expect(numbers[97]).toEqual(0);
  expect(numbers[98]).toEqual(1);
});

it('should match string when call matchWithBM', function () {
  const index = matchWithBM('abcd', 'bc');
  expect(index).toEqual(1);
});

it('should not match string when call matchWithBM', function () {
  const index = matchWithBM('abcd', 'ac');
  expect(index).toEqual(-1);
});
