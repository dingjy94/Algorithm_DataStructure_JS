const movieOnFlight = (list, target) => {
  let result = [];
  let copy = [...list];
  copy.sort((a, b) => a - b);

  let left = 0, right = list.length - 1, max = Number.MIN_VALUE;
  while (left < right) {
    if (copy[left] + copy[right] <= target) {
      if (copy[left] + copy[right] > max) {
        result = [left, right];
      }
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [list.indexOf(copy[result[0]]), list.indexOf(copy[result[1]])];
};
