/**
 * Initialize your data structure here.
 */
const TrieNode = function (char) {
  this.val = char;
  this.map = new Map();
  this.isEnd = false;
};

var Trie = function () {
  this.root = new TrieNode(null);
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  const charArr = word.split('');
  let pointer = this.root;
  for (let char of charArr) {
    if (!pointer.map.has(char)) {
      pointer.map.set(char, new TrieNode(char));
    }

    pointer = pointer.map.get(char);
  }
  pointer.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  const charArr = word.split('');
  let pointer = this.root;
  for (let char of charArr) {
    if (!pointer.map.has(char)) {
      return false;
    }

    pointer = pointer.map.get(char);
  }

  return pointer.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  const charArr = prefix.split('');
  let pointer = this.root;
  for (let char of charArr) {
    if (!pointer.map.has(char)) {
      return false;
    }

    pointer = pointer.map.get(char);
  }

  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
