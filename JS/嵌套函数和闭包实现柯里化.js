/** 
 * 嵌套函数和闭包的方式来实现柯里化
 * 柯里化是一种将接受多个参数的函数转换为一系列接受单个参数的函数的技术。
 */

function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(currying(1)(2)(3)); // 6

