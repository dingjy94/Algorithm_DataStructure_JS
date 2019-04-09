import Queue from './queue';

describe('Queue', () => {
  const queue = new Queue();

  it('should init a empty queue', () => {
    expect(queue.isEmpty()).toBeTruthy();
  });

  it('should add 1 in queue', () => {
    queue.add(1);
    expect(queue.isEmpty()).toBeFalsy();
    expect(queue.peek()).toBe(1);
  });

  it('should push 2 in queue, peek should return 1', () => {
    queue.add(2);
    expect(queue.peek()).toBe(1);
  });

  it('should remove 1', () => {
    expect(queue.remove()).toBe(1);
  });

  it('should remove 2, and queue is empty', () => {
    expect(queue.remove()).toBe(2);
    expect(queue.isEmpty()).toBeTruthy();
  });
});
