// sort an array of number
const partition = (arr, start, end) => {
  const pivot = arr[end];
  let small = start;

  for (let i = start; i <= end - 1; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[small]] = [arr[small], arr[i]];
      small += 1;
    }
  }

  [arr[small], arr[end]] = [arr[end], arr[small]];
  return small;
};

const quickSortHelper = (arr, start, end) => {
  if (start < end) {
    let index = partition(arr, start, end);

    quickSortHelper(arr, start, index - 1);
    quickSortHelper(arr, index + 1, end);
  }
};

const quickSort = (arr) => {
  quickSortHelper(arr, 0, arr.length - 1);
};

export default quickSort;
