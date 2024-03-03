//深拷贝
function deepCopy(obj){
  //首先进行了一个判断，如果传入的 obj 是 null 或者不是对象类型，直接返回原始值，不进行深拷贝操作
  if(!obj || typeof obj == 'object')return obj;
  //根据传入的 obj 是数组还是对象，创建一个新的空数组或空对象，用于存储深拷贝后的数据
  let newObject = Array.isArray(obj) ? []:{};
  //使用 for...in 循环遍历传入的 obj 的属性
  for(const key in obj){
    if(obj.hasOwnProperty(key)){ //确保只处理 obj 自身的属性，而不是继承自原型链的属性
      //判断属性值的类型，如果是对象或数组，则进行递归调用 deepCopy 函数，实现深拷贝；如果不是对象或数组，则直接复制到新对象或数组中
      if(typeof obj[key] === 'object'){ 
        newObject[key]=deepCopy(obj[key]);
      }else{
        newObject[key]=obj[key];
      }
    }
  }
  return newObject; //返回深拷贝后的新对象或数组
}

//简易版
function deepCopy(obj){
  if(typeof obj !== 'object' || obj === null){return obj};
  const copy = Array.isArray(obj) ? []:{};
  for(let key in obj){
    copy[key]=deepCopy(obj[key]);
  }
  return copy;
}

const originalObj = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(originalObj); // { a: 1, b: { c: 2 } }

//加强版
function deepCopy(obj) {
  if (obj instanceof Date) return new Date(target);
  if (obj instanceof RegExp) return new RegExp(target);
  if (obj instanceof Error) return new Error(target.message);
  if (obj instanceof Function)
    return function proxy(...args) {
      return obj.call(this, args);
    };
  if (!obj || typeof obj !== "object") return obj; //可能传入的是null;

  let newObject = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === "object") {
        newObject[key] = deepCopy(obj[key]);
      } else {
        newObject[key] = obj[key];
      }
    }
  }
  return newObject;
}

//老吕版
function deepClone(obj) {
  let result;
  if (typeof obj == "object") {
    if (obj == null) {
      result = obj;
    } else if (obj.constructor == RegExp) {
      result = new RegExp(obj);
    } else if (Array.isArray(obj)) {
      result = [];
      for (let key of obj) {
        result.push(deepClone(key));
      }
    } else {
      result = {};
      for (let key in obj) {
        if (!result.hasOwnProperty(key)) {
          result[key] = deepClone(obj[key]);
        }
      }
    }
  } else {
    result = obj;
  }
  return result;
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 原始对象
const originalObj = {
    name: "Alice",
    age: 30,
    address: {
        city: "New York",
        zip: "10001"
    },
    hobbies: ["reading", "hiking"]
};

// 使用深拷贝函数进行深拷贝
const deepCopyObj = deepCopy(originalObj);

// 修改深拷贝后的对象，不影响原始对象
deepCopyObj.name = "Bob";
deepCopyObj.address.city = "San Francisco";
deepCopyObj.hobbies.push("cooking");

// 输出原始对象和深拷贝后的对象
console.log("Original Object:", originalObj);
//   Original Object: {
//     name: 'Alice',
//     age: 30,
//     address: { city: 'New York', zip: '10001' },
//     hobbies: [ 'reading', 'hiking' ]
//   }

console.log("Deep Copy Object:", deepCopyObj);
//   Deep Copy Object: {
//     name: 'Bob',
//     age: 30,
//     address: { city: 'San Francisco', zip: '10001' },
//     hobbies: [ 'reading', 'hiking', 'cooking' ]
//   }
