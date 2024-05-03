let users = [
  { name: "ac", age: 19 },
  { name: "bc", age: 20 },
  { name: "cc", age: 21 },
  { name: "dc", age: 22 },
  { name: "dc", age: 22 },
];

let newUsers = [];

/** forEach方法*/
users.forEach((item) => {
  if (item.age > 20) {
    newUsers.push(item);
  }
});
console.log(newUsers);

/** filter方法*/
let newFilterUsers = users.filter(
  (item) => item.age > 20 && item.name.includes("c")
);
console.log(newFilterUsers);

// 删除
let inx;
users.forEach((item, index) => {
  if (item.name === "ac") {
    inx = index;
    return;
  }
});
users.splice(inx, 1);
console.log(users);

let deleteFilterArr = users.filter((item) => item.name !== "ac"); //会改变原数组
console.log(deleteFilterArr);

/** find*/
console.log(users.find((item) => item.name === "dc"));
console.log(users.findIndex((index) => index.name === "ac"));

/** map*/
let namesMap = users.map((item) => item.name);
let namesMapAdd = users.map((item) => item.name + "加字符串");
let ageMap = users.map((num) => num.age + 10);
console.log(namesMap);
console.log(namesMapAdd);
console.log(ageMap);

/** reduce*/
let reduceUsersAge = users.reduce((pre, current) => {
  return pre + current.age + 10;
}, 0); // 0是初始值

console.log(reduceUsersAge);

// 统计
let count = users.reduce((pre, current) => {
  if (current.name in pre) {
    pre[current.name]++;
  } else {
    pre[current.name] = 1;
  }
  return pre;
}, {});
console.log(count);
