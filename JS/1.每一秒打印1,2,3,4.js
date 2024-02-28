// 使用闭包实现
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  })(i);
}

// 使用 let 块级作用域
for (let i = 0; i < 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, i * 1000);
        })(i);
}

这段代码使用了立即调用的函数表达式（IIFE）来解决 JavaScript 中常见的闭包问题。让我来逐行解释这段代码：

1. `for (let i = 0; i < 5; i++) {` - 这一行开始一个 for 循环，循环变量 i 从 0 递增到 4。

2. `(function (i) {` - 这一行定义了一个立即调用的函数表达式（IIFE），它接受一个参数 i。

3. `setTimeout(function () {` - 在 IIFE 中，这一行使用了 setTimeout 函数，它会在指定的延迟时间后执行一个函数。

4. `console.log(i);` - 这一行是 setTimeout 中要执行的函数，它会输出当前的 i 的值。

5. `}, i * 1000);` - 这一行指定了 setTimeout 的延迟时间，每次循环 i 的值不同，因此会有不同的延迟时间。

6. `})(i);` - 这一行立即调用了定义的 IIFE，并传入当前循环的 i 的值作为参数。

通过使用 IIFE，我们创建了一个新的作用域，使得每次循环时都会传入当前的 i 的值作为参数，从而解决了闭包问题。这样，每个 setTimeout 中的函数都能够获得正确的 i 的值，并在正确的时间输出对应的值。
