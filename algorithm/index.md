## Array
### Get max, second max value of array of numbers
```JavaScript
  const max = Math.max(...nums); // for es5, use Math.max.apply(null, nums);

  nums[nums.indexOf(max);] = -Infinity;
  const secondMax = Math.max(...nums);
```

## String
### reverse string
```JavaScript
  return s.split('').reverse().join('')
```

### KMP
KMP is an algorithm which can be used to do pattern searching (check substring, palindrome).

The KMP matching algorithm uses degenerating property (pattern having same sub-patterns appearing more than once in the pattern) of the pattern and improves the worst case complexity to O(n). The basic idea behind KMP’s algorithm is: whenever we detect a mismatch (after some matches), we already know some of the characters in the text of the next window.

Two steps:
1. preprocess: get the get lps (longest proper prefix which is also suffix) array of pattern string. `lps[i]` means the lps for substring(0, i + 1).

2. search: when **mismatch**, let's say the index of pattern is j, text string index is i, which means `pattern[0, j - 1] == text[i - j, i - 1]`, and from `lps[j - 1]`, we can get the lps length. So in text[i - j, i - 1], there is a `prefix == suffix` whose length is lps[i - 1]. So, we know that the suffix of `text[0, i - 1]` will match prefix of `pattern[0, lps[j - 1]]`, so the next comparision is between `text[i]` and `pattern[lps[j - 1]]`.

Example: [Pattern Searching](/String/kmp.js)
