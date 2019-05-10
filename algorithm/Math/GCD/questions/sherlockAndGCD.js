/**
 * Sherlock is stuck while solving a problem: Given an array,
 * he wants to know if there exists a subset B of this array which follows these statements:
 * - B is a non-empty subset.
 * - There exists no integer x(x > 1) which divides all elements of B.
 * - There are no elements of B which are equal to another.
 */

const GCD = (n1, n2) => {
  if (n1 < n2) {
    [n1, n2] = [n2, n1];
  }

  return n2 === 0 ? n1 : GCD(n2, n1 % n2);
};

const sherlockAndGCD = (arr) => {
  const arrGCD = arr.reduce((acc, cur) => GCD(acc, cur));

  return arrGCD === 1 ? 'YES' : 'NO';
};

export default sherlockAndGCD;
