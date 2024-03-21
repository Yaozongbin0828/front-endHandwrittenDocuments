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

// 判断数组例子
const arr = [{}];

//Object.prototype.toString.call() 
//Array是从索引位置8开始的，而最后一个字符是]，所以使用.slice(8, -1)可以提取出中间的Array部分，用于与'Array'进行比较。
console.log(Object.prototype.toString.call(arr).slice(8, -1) === 'Array');

// instanceof
console.log(arr instanceof Array);

// ES5 isArray()
console.log(Array.isArray(arr));

// 原型链 _proto_===Array.prototype
console.log(arr.__proto__ === Array.prototype);

// Array.prototype.isPrototypeOf
console.log(Array.prototype.isPrototypeOf(arr));
