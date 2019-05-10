const GCD = (n1, n2) => {
  if (n1 < n2) {
    [n1, n2] = [n2, n1];
  }

  return n2 === 0 ? n1 : GCD(n2, n1 % n2);
};

export default GCD;
