import { SkipList } from './skiplist';

describe('SkipList', () => {
  it('should insert single value correct when call insert', () => {
    const skipList = new SkipList();
    skipList.insert(1);
    const result = skipList.printAll();
    expect(result).toEqual([1]);
  });

  it('should insert multiple value correct when call insert', () => {
    const skipList = new SkipList();
    skipList.insert(1);
    skipList.insert(3);
    skipList.insert(2);
    const result = skipList.printAll();
    expect(result).toEqual([1, 2, 3]);
  });

  it('should find value correct when call insert', () => {
    const skipList = new SkipList();
    skipList.insert(1);
    skipList.insert(3);
    skipList.insert(2);
    const result = skipList.find(2);
    expect(result).toEqual(2);
  });

  it('should remove value correct when call insert', () => {
    const skipList = new SkipList();
    skipList.insert(1);
    skipList.insert(3);
    skipList.insert(6);
    skipList.insert(4);
    skipList.insert(2);
    skipList.remove(2);
    skipList.remove(4);
    const result = skipList.printAll();
    expect(result).toEqual([1, 3, 6]);
  });
});
