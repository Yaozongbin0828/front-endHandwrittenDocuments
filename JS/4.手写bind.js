//手写bind
Function.prototype._bind = function(thisArg,...argArray){
  const fn = this;
  thisArg = 
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;
  function proxyFn(){
    const tag = Symbol('_bind');
    thisArg[tag] = fn;
    const finalArg = [...argArray,...args];
    const result = thisArg[tag](...finalArg);
    delete thisArg[tag];
    return result;
  }
  return proxyFn;
};

//这段代码定义了一个自定义的 `_bind` 方法，它模拟了 JavaScript 中原生的 `bind` 方法的行为。让我来逐行解释这段代码：

1. `Function.prototype._bind` - 这一行定义了一个新的方法 `_bind`，它被添加到了所有函数对象的原型上，因此可以在任何函数上调用。

2. `const fn = this;` - 这一行将调用 `_bind` 方法的函数保存在变量 `fn` 中，以便后续在代理函数中使用。

3. `thisArg = thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;` - 这一行检查传入的 `thisArg` 参数是否为 null 或 undefined，如果不是，则将其转换为对象，否则使用全局对象 `window`。

4. `function proxyFn(...args) {` - 这一行定义了一个代理函数 `proxyFn`，它接受任意数量的参数。

5. `const tag = Symbol("mybind");` - 这一行创建了一个独一无二的 Symbol 作为属性标记，用于确保属性名的唯一性。

6. `thisArg[tag] = fn;` - 这一行将原始函数 `fn` 存储在 `thisArg` 对象的属性中，以便后续调用。

7. `const finalArgs = [...argArray, ...args];` - 这一行将传入 `_bind` 方法的参数 `argArray` 和代理函数 `proxyFn` 的参数合并成一个新的参数数组 `finalArgs`。

8. `const result = thisArg[tag](...finalArgs);` - 这一行调用存储在 `thisArg` 对象中的原始函数 `fn`，并传入合并后的参数数组 `finalArgs`。

9. `delete thisArg[tag];` - 这一行删除了之前添加的属性标记，以确保不会对 `thisArg` 对象造成影响。

10. `return result;` - 最后，代理函数返回原始函数调用的结果。

// 整体来说，这段代码定义了一个 `_bind` 方法，它接受一个 `thisArg` 参数和一个参数数组 `argArray`，并返回一个代理函数，该代理函数在调用时会以指定的 `this` 值调用原始函数，并传入指定的参数。
