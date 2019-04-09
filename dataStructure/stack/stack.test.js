import Stack from './stack';

describe('Stack', () => {
  const stack = new Stack();

  it('should init a empty Stack', () => {
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('should push 1 in stack', () => {
    stack.push(1);
    expect(stack.isEmpty()).toBeFalsy();
    expect(stack.peek()).toBe(1);
  });

  it('should push 2 in stack, peek should return 2', () => {
    stack.push(2);
    expect(stack.peek()).toBe(2);
  });

  it('should pop 2', () => {
    expect(stack.pop()).toBe(2);
  });

  it('should pop 1, and stack is empty', () => {
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBeTruthy();
  });
});
