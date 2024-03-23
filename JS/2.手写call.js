// 语法：function.call(thisArg, arg1, arg2, ...)
// call 方法允许你在指定的 this 值和参数的前提下，调用一个函数。第一个参数 thisArg 是函数执行时的上下文，后续的参数是传递给函数的参数列表。//
// 业务场景：当你想要立即调用一个函数，并且指定函数内部 this 的值时，可以使用 call 方法。

let user = {
  name: 'Alice'
};
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}
greet.call(user,'Hello')//// 输出：Hello, Alice!

// 手写call
Function.protype._call = function(thisArg,...args){
  const fn = this;
  thisArg = 
    thisArg !== null && thisArg !==undefined ? Object(thisArg) : window;
  const tag = Symbol("mycall");
  thisArg[tag] = fn;
  const result = thisArg[tag](...args);
  delete thisArg[tag];
  return result;
}

// 这段代码是在 JavaScript 中模拟实现 Function 对象的 call 方法。call 方法用于在指定的 this 值和参数列表的情况下调用函数。

// 让我们逐行解释这段代码：

// 1. `Function.prototype._call = function (thisArg, ...args) {` - 这一行定义了一个名为 _call 的属性，它是 Function 对象的原型链上的一个方法。这个方法接受一个 thisArg 参数和一个参数列表 args。

// 2. `const fn = this;` - 这一行将当前函数对象保存在 fn 变量中。

// 3. `thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;` - 这一行用于确定要调用函数时的 this 值。如果传入的 thisArg 不是 null 或 undefined，那么将其转换为对象；否则使用全局对象 window 作为 this 值。

// 4. `const tag = Symbol("mycall");` - 这一行创建了一个 Symbol 类型的标记，用于在 thisArg 对象上临时存储函数。

// 5. `thisArg[tag] = fn;` - 这一行将当前函数对象 fn 存储在 thisArg 对象上，使用之前创建的 Symbol 标记作为属性名。

// 6. `const result = thisArg[tag](...args);` - 这一行调用存储在 thisArg 对象上的函数，传入参数列表 args，并将结果保存在 result 变量中。

// 7. `delete thisArg[tag];` - 这一行删除之前存储的函数属性。

// 8. `return result;` - 最后，返回函数调用的结果。

// 总的来说，这段代码模拟实现了 call 方法的核心逻辑，通过临时存储函数并在指定的 this 值上调用函数来实现指定上下文的函数调用。
