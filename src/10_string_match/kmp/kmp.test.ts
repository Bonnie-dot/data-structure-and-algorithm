import { Kmp } from './kmp';

describe('kmp', () => {
  it('should get correct nexts when call getNexts with abcabc of pattern string', () => {
    const kmp = new Kmp('ababcbdbd', 'abcabc');

    expect(kmp.nexts).toEqual([-1, -1, -1, 0, 1, 2]);
  });

  it('should get correct nexts when call getNexts with ababacb of pattern string', () => {
    const kmp = new Kmp('ababcbdbd', 'ababacb');

    expect(kmp.nexts).toEqual([-1, -1, 0, 1, 2, -1, -1]);
  });
});
