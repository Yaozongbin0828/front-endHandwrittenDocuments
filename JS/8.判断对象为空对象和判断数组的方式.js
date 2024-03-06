// 判断一个对象为空对象
// 方法1：Json.stringify(Obj)
if (Json.stringify(Obj) == '{}') {
     console.log('空对象');
 }

//方法2：使用ES6新增的方法Object.keys()来判断
if (Object.keys(Obj).length < 0) {
    console.log('空对象');
}

// 判断数组的方式
// 方法1：通过Object.prototype.toString.call()做判断
   Object.prototype.toString.call(obj).slice(8,-1) === 'Array';

// 方法2：通过原型链做判断
   obj.__proto__ === Array.prototype;

// 方法3：ES5 Array.isArray()判断
   Array.isArrray(obj);

// 方法4：通过instanceof做判断
   obj instanceof Array

// 方法5：通过Array.prototype.isPrototypeOf
   Array.prototype.isPrototypeOf(obj)
