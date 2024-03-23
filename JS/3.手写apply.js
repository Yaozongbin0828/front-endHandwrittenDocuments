// 语法：function.apply(thisArg, [argsArray])
// apply 方法与 call 类似，不同之处在于它接受一个参数数组作为函数的参数。第一个参数 thisArg 是函数执行时的上下文，第二个参数是一个数组，包含了传递给函数的参数列表。
// 业务场景：当你的函数参数以数组形式存在时，可以使用 apply 方法。

let user = {
    name: 'Alice'
}

function greet(message){
    console.log(`$(message),$(this.name)`);   
}

greet.apply(user,['Hi']) // 输出：Hi, Alice!


//手写apply
Function.prototype.apply = function (thisArg, argArray) {
    const fn = this;
    thisArg =
        thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
    thisArg.fn = fn;
    let result;
    argArray = argArray || [];
    result = thisArg.fn(...argArray);
    delete thisArg.fn;
    return result;
}
// 这段代码定义了一个自定义的 `_apply` 方法，它模拟了 JavaScript 中原生的 `apply` 方法的行为。让我来逐行解释这段代码：

1. `Function.prototype._apply` - 这一行定义了一个新的方法 `_apply`，它被添加到了所有函数对象的原型上，因此可以在任何函数上调用。

2. `const fn = this;` - 这一行将调用 `_apply` 方法的函数保存在变量 `fn` 中，以便后续在代理函数中使用。

3. `thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;` - 这一行检查传入的 `thisArg` 参数是否为 null 或 undefined，如果不是，则将其转换为对象，否则使用全局对象 `window`。

4. `thisArg.fn = fn;` - 这一行将原始函数 `fn` 存储在 `thisArg` 对象的属性中，以便后续调用。

5. `let result;` - 这一行声明了一个变量 `result`，用于存储函数调用的结果。

6. `argArray = argArray || [];` - 这一行确保参数数组 `argArray` 不为 null 或 undefined，如果为 null 或 undefined，则将其设置为空数组。

7. `result = thisArg.fn(...argArray);` - 这一行调用存储在 `thisArg` 对象中的原始函数 `fn`，并传入参数数组 `argArray`。

8. `delete thisArg.fn;` - 这一行删除了之前添加的属性，以确保不会对 `thisArg` 对象造成影响。

9. `return result;` - 最后，代理函数返回原始函数调用的结果。

