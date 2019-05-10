import quickSort from './quickSort';
import shuffle from '../shuffle/shuffle';

describe('Quick Sort', () => {
  it('Sort [4, 3, 2, 1]', () => {
    const array = [4, 3, 2, 1];
    quickSort(array);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it("Sort [10 ... 1]", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    shuffle(array);
    quickSort(array);
    expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
