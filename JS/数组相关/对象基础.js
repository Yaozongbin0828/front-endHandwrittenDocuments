// 对象相关
let obj = {};
const obj2 = {};

obj.a = "1";
console.log(obj);
obj.a = true;
console.log(obj);
delete obj.a;
console.log(obj);

/** 对象赋值的两种方法*/
/** user.+属性名 = "属性值"  user['属性名']="属性值" */
let user = {};
user.name = "李四";
user.age = 23;
console.log(user);
user["address"] = "中国";
console.log(user);

/** 深-浅拷贝 */
let str = {};
Object.assign(str, user); // 浅拷贝
console.log("========Object.assign=======");
str.age = 30;
str["emp"] = "计算机";
console.log(str);

let strDeepCopy = Object.assign({}, user);
console.log(strDeepCopy);

console.log("==================================");

let str2 = user;
str2.xxx = "我是老二";
console.log(str2);

console.log("==================================");

let str3 = JSON.parse(JSON.stringify(user)); //深拷贝(字符串转JSON对象)
str3.yyyy = "我是老三";
console.log(str3);

console.log(user.name);
console.log(user["name"]);
console.log("=================解构语法======================");
let { name } = user; //解构语法
console.log(name);

