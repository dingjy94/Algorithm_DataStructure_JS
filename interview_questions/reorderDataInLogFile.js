/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorder = (a, b) => {
  let aArr = a.split(' ');
  let bArr = b.split(' ');

  let ahead = aArr.shift();
  let bhead = bArr.shift();
  let compare = aArr.join().localeCompare(bArr.join());
  if (compare === 0) {
    return ahead.localeCompare(bhead);
  } else {
    return compare;
  }
};

const isNumber = (char) => !isNaN(parseFloat(char));

var reorderLogFiles = function (logs) {
  let letters = [];
  let digits = [];
  for (let log of logs) {
    if (isNumber(log.split(' ')[1])) {
      digits.push(log);
    } else {
      letters.push(log);
    }
  }
  letters.sort(reorder);

  return letters.concat(digits);
};
