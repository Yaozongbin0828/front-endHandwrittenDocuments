// 手写new

function myNew(fn, ...args) {
  if (Object.prototype.toString.call(fn) !== "[object Function]") {
    throw "Error in params";
  }
  let obj = {};
  obj = Object.create(fn.prototype);
  let ret = fn.call(obj, ...args);
  return ret instanceof Object ? ret : obj;
} 

1.创建对象实例：通过 new 关键字，可以使用构造函数来创建一个对象的实例。构造函数可以定义对象的属性和方法，并且通过 new 关键字可以实例化这个构造函数，创建一个新的对象实例。

2.绑定构造函数的作用域：使用 new 关键字调用构造函数时，构造函数内部的 this 关键字会指向新创建的对象实例，从而可以在构造函数内部操作新对象的属性和方法。

3.原型继承：通过 new 关键字创建的对象实例会自动继承构造函数的原型上定义的属性和方法，从而实现了原型链继承的特性。

