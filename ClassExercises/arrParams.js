function fnF(fn) {
  console.log("fnF");
  fn();
}

function fnS() {
  console.log("fnS");
}
fnF(fnS);

// 函数作为返回值
function fn(b) {
  var a = 1;
  return function () {
    console.log(a + b);
  };
}

// () =function () {
//    console.log(a + b);
//}

fn(4)();

//{}不能区分作用域

//Page48 49
var a = 1,
  b = 2;
if (1) {
  function fn1() {
    var a = 10,
      b = 20;
    console.log(a + b); //30
  }
  console.log(a + b); //3
} else {
  // var a = 100; b = 200;
  // function fn2() {
  //     var a = 100, b = 200;
  //     console.log(a + b);
  // }
  // console.log(a + b);
}

//变量提升
fn3();

function fn3() {
  // var a,b;声明上去 赋值不上去
  // undefined+undefined=NaN
  console.log(a + b);
  var a = 1000;
  b = 2000;
}

fn1();
// fn2();//跳过
fn3();

// 预解析
fun();
var num = 97;
function fun() {
  console.log(num); //undefined
}

var num;
function fun() {
  console.log(num); //97
}
fun();
num = 97; //以最新赋值来运算

var num = 97;
fun();
function fun() {
  console.log(num);
  var num = 99;
}
console.log(num); //97

// 函数名优先级大于变量名
console.log(say);
var say = 1;
console.log(say);
function say() {
  console.log("函数调用");
}

console.log(say);

// 第四章对象
// 浅拷贝
const objArray = { a: 1, b: { c: 2 } };
const objArr = [{ name: "y" }, { age: "x" }, { sex: "b" }];
let newobjArr = Object.assign({}, objArr);
let newobjArr2 = { ...objArr };
let objArray2 = { ...objArray };

console.log(newobjArr);
console.log(newobjArr2);
console.log(newobjArr2);

function deepCopy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    copy[key] = deepCopy(obj[key]);
  }
  return copy;
}

const originalObj = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(originalObj);
console.log(deepCopyObj); // { a: 1, b: { c: 2 } }

var a = 2;

//this指向
function _this1() {
  var name = "windowThis";
  console.log(this.name === window.name);
  console.log(this.name);
  console.log(this);
}

function _this() {}

//值类型存在栈中
//引用类型存在堆中

// for in obj
const objForArray = { name: "", age: "" };
for (let i in objForArray) {
  console.log(i);
}

// for of arr
const arrForArray = [1, 2, 3, 4, 5];
for (let i of arrForArray) {
  console.log(i);
}

function Girlfriend(name, age) {
  this.name = name;
  this.age = age;
}

const newGirlfriend = new Girlfriend("xxx", "18");
console.log(newGirlfriend);

function renum(newGirlfriend) {
  newGirlfriend.name = "yyy";
  newGirlfriend.age = "22";
}

renum(newGirlfriend);
console.log(newGirlfriend);

/////////
var x = 1,
  y = 2;
function Num(x, y) {
  //形参
  this.x = x;
  this.y = y;
}
var num1 = new Num(x, y); //创建对象 x y 12
console.log(num1); // 1 2
function renum1(num) {
  //num是形参
  num.x = 2;
  num.y = 4;
  console.log(num1.x, num1.y); // 2 4
  console.log(x, y); // 1 2
}
renum(num1); // 引用类型作为函数参数 num1是实参
console.log(num1); // 2 4
console.log(x, y); // 1 2
// 引用类型作为函数参数操作的对象是同一个
// 值类型作为函数参数，操作的哦电脑关系不是同一个
