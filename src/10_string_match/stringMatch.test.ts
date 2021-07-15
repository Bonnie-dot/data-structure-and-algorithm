import { generateHashTable } from './stringMatch';

it('should generate b c when call generateHashTable', function () {
  const numbers = generateHashTable('ab');
  expect(numbers[97]).toEqual(0);
  expect(numbers[98]).toEqual(1);
});
