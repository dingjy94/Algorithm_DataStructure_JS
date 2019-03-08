import KMPStringMatching from './kmp';

describe('KMP pattern matching', () => {
  it('return correct pattern index in txt,', () => {
    expect(KMPStringMatching('AABA', 'AABAACAADAABAABA')).toEqual([0, 9, 12]);
  });
});
