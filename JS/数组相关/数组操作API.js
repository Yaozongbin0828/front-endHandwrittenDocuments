// 两种创建数组方法
let arr = [];
let newArr = new Array();

console.log(arr);
console.log(newArr);

arr[1] = "1";
console.log(arr[1]);

// 新增数组元素
// arr.unshift()
arr.push("新增元素");
console.log(arr);
arr[2] = true;
console.log(arr);
arr[9999] = 1;
console.log(arr.length);

// 删除数组元素
/** splice*/
arr.splice(0, 1); //splice() 删除会改变原数组
console.log(arr);

arr.splice(1, 3);
console.log(arr);

/** shift*/
arr.shift(); //shift() 从头切除一个
console.log(arr);

/** pop*/
arr.pop(); //pop() 从尾部切除一个
console.log(arr);

/** slice*/
newArr = [1, 2, 3, 4, 5, 6]; // 下标0 1 2
let arrSlice = newArr.slice(1, 3); // slice()切割包头不包尾
console.log(arrSlice);

/** concat*/
let arrBefore = [2, 3];
let arrAfter = [1, 4];
let arrConcat = arrBefore.concat(arrAfter); // 添加数组
console.log(arrConcat);

/** split*/
let splitArr = "青春没有售价，共享骑到拉萨";
console.log(splitArr.split(", "));

/** join*/
let joinArr = [1, 2, 3, 4];
console.log(joinArr.join("|"));

/** sort*/
let sortArr = [1, 5, 2, 4, 3]; // unicode排序
console.log(sortArr.sort((a, b) => a - b)); // 阿拉伯数字排序

/** reverse*/
let reverseArr = [1, 294, 252, 199, 100, 0];
console.log(reverseArr.reverse());
console.log(reverseArr.sort((a, b) => b - a)); //倒序

/** indexOf lastIndexof*/
let indexOfArr = [1, 2, 3];
console.log(indexOfArr.indexOf(3)); // 1 没有-1 有这个元素从0开始编号
console.log(indexOfArr.lastIndexOf(3));


