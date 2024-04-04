// arr = [1,2,3,4,5,6,7,8,9,10]，求和
// 数组求和 reduce()方法
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);

// arr = [1,2,3,[[4,5],6],7,8,9]，求和
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr1.flat(Infinity).reduce((prev, cur) => {
  return prev + cur;
}, 0);

// arr = [{a:1, b:3}, {a:2, b:3, c:4}, {a:3}]，求和
let arr2 = [{ a: 9, b: 3, c: 4 }, { a: 1, b: 3 }, { a: 3 }];
arr2.reduce((prev, cur) => {
  return prev + cur["a"];
}, 0);

//数组求和，不允许使用循环，不允许使用标准库的函数
function sum(sums) {
  function f(i) {
    return i >= sums.length ? 0 : sums[i] + f(i + 1);
  }
  return f(0);
}

console.log(sum(arr1));
