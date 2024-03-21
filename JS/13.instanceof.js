//这段代码是一个自定义的_instanceof函数，用于模拟JavaScript中的instanceof操作符的功能。instanceof用于检查一个对象是否是某个构造函数的实例，而这个自定义的_instanceof函数也是用来进行类似的检查。
//这个函数的实现原理是通过不断地获取对象的原型链并与目标构造函数的原型进行比较，直到找到匹配的原型或者到达原型链的末端为止。如果找到匹配的原型，则返回true，否则返回false。
//这个函数的实现是比较典型的原型链遍历算法，通过不断获取对象的原型并与目标原型进行比较来确定对象是否是目标构造函数的实例。

//A instanceof B
function _instanceof(A, B) {
  let proto = Object.getPrototypeOf(A);
  const prototype = B.prototype;
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}

//使用案例
function Person(name) {
  this.name = name;
}

const person1 = new Person('Alice');

console.log(_instanceof(person1, Person)); // 输出: true
console.log(_instanceof(person1, Object)); // 输出: true，因为所有对象最终都是Object的实例
console.log(_instanceof(person1, Array)); // 输出: false，因为person1不是Array的实例
