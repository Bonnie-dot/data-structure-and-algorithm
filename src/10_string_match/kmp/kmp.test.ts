import { Kmp } from './kmp';
import { GoodSuffixShift } from '../goodSuffixShift/goodSuffixShift';

describe('kmp', () => {
  it('should get correct nexts when call getNexts with abcabc of pattern string', () => {
    const kmp = new Kmp('ababcbdbd', 'abcabc');

    expect(kmp.nexts).toEqual([-1, -1, -1, 0, 1, 2]);
  });

  it('should get correct nexts when call getNexts with ababacb of pattern string', () => {
    const kmp = new Kmp('ababcbdbd', 'ababacb');

    expect(kmp.nexts).toEqual([-1, -1, 0, 1, 2, -1, -1]);
  });

  it('should return move index when call kmp', function () {
    const kmp = new Kmp('bcabbcabc', 'abbcabc');
    const matchIndex = kmp.matchWithkmp();

    expect(matchIndex).toEqual(2);
  });
});
