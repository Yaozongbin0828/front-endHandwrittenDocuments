// 这段代码是一个用于将嵌套数组扁平化的函数。函数 flat 接受两个参数：arr 是待扁平化的数组，depth 是扁平化的深度。默认情况下，深度为 1。
let arr = [1,[2,[3,4,5]]];

//定义了一个箭头函数 flat，它接受一个数组 arr 和一个深度 depth 作为参数。在函数内部，首先声明了一个空数组 res 用于存储扁平化后的结果。然后使用 for...of 循环遍历数组 arr 中的每个元素。
//在循环内部，通过 Array.isArray(item) 来判断当前元素是否为数组，并且检查深度是否大于 0。
//如果是数组且深度符合条件，就递归调用 flat 函数，并将结果通过展开运算符 ... 放入 res 中。如果不是数组或者深度不符合条件，就直接将元素放入 res 中。
//最后，返回存储了扁平化结果的数组 res。
const flat = (arr,depth = 1)=>{
  const res = [];
  for(const item of arr){
    if(Array.isArray(item) && depth > 0){
      res.push(..flat(item,depth - 1));
    }else{
      res.push(item);
    }
  }
  return res;
};

console.log(flat(arr, 2)); //[1, 2, 3, 4, 5]
