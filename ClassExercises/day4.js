//数组for of
const arr = [1, 2, 3];
for (let key of arr) {
  console.log(key);
}
//对象for in
const obj = { 1: "", 2: "", 3: "" };
for (let element in obj) {
  console.log(element);
}

//random()
function randomFun(value) {
  let math = Math.random();
  if (math > value) {
    console.log("T");
  } else {
    console.log("F");
  }
  console.log(math);
}

randomFun(5);
//1-100
function sum1_100(m, n) {
  var num = Math.floor(Math.random() * (m - n) + n);
  console.log(num);
}

sum1_100(1, 100);

//时间戳
function formatDate(d) {
  //判断日期
  if (!date instanceof Date) {
    return;
  }
  var year = d.getFullYear(),
    //getMonth返回一个 0 到 11 的整数值
    month = d.getMonth() + 1,
    date = d.getDate(),
    hour = d.getHours(),
    minute = d.getMinutes(),
    second = d.getSeconds();
  month = month < 10 ? "0" + month : month;
  date = date < 10 ? "0" + date : date;
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  return (
    year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second
  );
}

var d4 = formatDate(new Date());
console.log("d4:" + d4);

//sort
const arrSort = [1, 30, 4, 21, 1000];
let newArrSort = arrSort.sort((a, b) => a - b);
console.log(newArrSort);

//Number
let n1 = 0.1,
  n2 = 0.2;

console.log(n1 + n2);
console.log((n1 + n2).toFixed(1));

//1
var str1 = "桃花庵下桃花仙";
var arrStr1 = [];
do {
  var index = str1.indexOf("花", index + 1);
  if (index != -1) {
    arrStr1.push(index);
  }
} while (index > -1);
{
  console.log(arrStr1); //[1,5]
}

//2
var str2 = "桃花仙人中桃树";
do {
  str2 = str2.replace("桃", "李");
} while (str2.indexOf("桃") > -1);
{
  console.log(str2);
}

console.log(str2.replace(/桃/gi, "李"));

console.log(Math.ceil(11.2));
console.log(Math.floor(11.7));

const array1 = [{a:'1'},{b:'2'},{c:'3'}];

for (let element of array1) {
  console.log(element);
}