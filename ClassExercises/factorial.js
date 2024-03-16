// 阶乘
// 不适用递归
function factorial(n) {
  if (n < 0) {
    return "输入错误，阶乘不存在";
  }
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 使用示例
console.log(factorial(5)); // 输出 120
console.log(factorial(0)); // 输出 1
console.log(factorial(-1)); // 输出 "输入错误，阶乘不存在"

// 递归阶乘
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
function factorialSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(i);
    }
    return sum;

}
