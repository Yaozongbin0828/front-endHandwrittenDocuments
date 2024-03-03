//浅拷贝
const shallowClone = (target) =>{
  return Object.assign({},target);
}

function _shallowCopy(target){
  const newObj = {}; // 创建一个新的对象
  for(const key in target){// 遍历需克隆的对象
    newObj[key] = target[ket]; // 将需要克隆对象的属性依次添加到新对象上
  }
  return newObj;
}

function _shallowClone(obj){
  const cloneObj ={};
  for(const key in obj){
    cloneObj[key] = cloneObj[key];
  }
  return cloneObj;
}

// 浅拷贝只复制对象或数组的第一层结构，而不会复制嵌套对象或数组的内部结构。在 JavaScript 中，可以使用 Object.assign() 或展开运算符 ... 来进行浅拷贝。

// 使用 Object.assign() 进行浅拷贝
const originalObj = { a: 1, b: { c: 2 } };
const shallowCopyObj = Object.assign({}, originalObj);
console.log(shallowCopyObj); //{ a: 1, b: { c: 2 } } 

// 使用展开运算符进行浅拷贝[...()]
const originalArr = [1, [2, 3]];
const shallowCopyArr = [...originalArr];
console.log(shallowCopyArr); // [1, [2, 3]];
