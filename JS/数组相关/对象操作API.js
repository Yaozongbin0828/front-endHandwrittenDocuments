// 对象骚操作API
let a = {};
let b = null;
let c = a?.x;
let d = b?.x;

// ?.
// console.log(c);
console.log(a + " ?. " + d);

// ??
let e = a ?? b;
// let f = JSON.parse(localStorage.getItem("user") ?? "{}");
console.log(e); // {}

// ||
/** 服务端数据库拿出数据*/
let res;
let resData = res || {};
console.log(resData.name);

// ??=
let g;
let h = 1;
console.log((g ??= h)); // 左侧是undefined或null 则取右侧的值

// for const in obj
let jsObj = { 1: "a", 2: "b" };
// console.log(jsObj[1]);
for (const item in jsObj) {
  //临时作用域
  jsObj[item] = jsObj[item] + "123";
  console.log(jsObj[item]);

  debugger; // 调试 单步执行
  // ==不比较类型 ===比较类型和值
  if (item === "1") {
    jsObj[item] = jsObj[item] + "123" + "456";
  } else if (item === "2") {
    delete jsObj[item];
  }
}

console.log(jsObj);
