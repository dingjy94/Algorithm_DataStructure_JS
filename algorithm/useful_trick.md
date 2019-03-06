### Get max, second max value of array of numbers
```JavaScript
  const max = Math.max(...nums); // for es5, use Math.max.apply(null, nums);
 
  nums[nums.indexOf(max);] = -Infinity;
  const secondMax = Math.max(...nums);
```
