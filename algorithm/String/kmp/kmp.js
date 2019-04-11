/**
 * Pattern Searching
 *
 * Given a text txt[0..n-1] and a pattern pat[0..m-1],
 * write a function search(char pat[],
 * char txt[]) that prints all occurrences index of pat[] in txt[].
 * You may assume that n > m.
 *
 * KMP (Knuth Morris Pratt) Pattern Searching
 *
 * whenever we detect a mismatch (after some matches),
 * we already know some of the characters in the text of the next window.
 *
 * O(n)
 */

// compute longest proper prefix (longest proper prefix which is also suffix)
const computeLPS = function computeLPS(pat) {
  let prevLen = 0;
  let curIndex = 1;
  const lps = [0];

  while (curIndex < pat.length) {
    if (pat.charAt(curIndex) === pat.charAt(prevLen)) {
      prevLen += 1;
      lps.push(prevLen);
      curIndex += 1;
    } else if (prevLen !== 0) {
      prevLen = lps[prevLen - 1];
    } else {
      lps.push(0);
      curIndex += 1;
    }
  }

  return lps;
};

const KMPStringMatching = function KMPStringMatching(pat, txt) {
  const result = [];
  const lps = computeLPS(pat);

  let patIndex = 0;
  let txtIndex = 0;

  while (txtIndex < txt.length) {
    if (pat.charAt(patIndex) === txt.charAt(txtIndex)) {
      patIndex += 1;
      txtIndex += 1;
    }

    if (patIndex === pat.length) {
      result.push(txtIndex - patIndex);
      patIndex = lps[patIndex - 1];
    } else if (txtIndex < txt.length && pat.charAt(patIndex) !== txt.charAt(txtIndex)) {
      if (patIndex !== 0) {
        patIndex = lps[patIndex - 1];
      } else {
        txtIndex += 1;
      }
    }
  }

  return result;
};

export default KMPStringMatching;
