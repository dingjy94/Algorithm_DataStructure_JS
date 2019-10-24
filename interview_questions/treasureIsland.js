const treasureIsland = (grid) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  const isValid = (x, y) => (x < grid.length && x >= 0 && y < grid[0].length && y >= 0 && grid[x][y] !== 'D');

  if (grid === null || grid.length === 0 || grid[0].length === 0) {
    return -1;
  }

  let queue = [];
  queue.push([0, 0]);
  grid[0][0] = 'D';
  let result = 1;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let cur = queue.shift();
      for (let j = 0; j < 4; j++) {
        let curX = cur[0] + dx[j];
        let curY = cur[1] + dy[j];

        if (isValid(curX, curY)) {
          if (grid[curX][curY] === 'X') {
            return result;
          }

          queue.push([curX, curY]);
          grid[curX][curY] = 'D';
        }
      }
    }

    result += 1;
  }

  return -1;
};
