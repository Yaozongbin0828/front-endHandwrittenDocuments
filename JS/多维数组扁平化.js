/** 这段代码是一个用于将多维数组扁平化的函数。在这个例子中，原始数组是 [1, [2, [3, 4, 5]]]，调用 flat 函数并指定深度为 2。

函数 flat 的作用是将数组扁平化到指定的深度。在这个例子中，深度为 2，表示要将数组扁平化到第二层。

函数会遍历数组中的每个元素，如果元素是数组并且深度仍然大于 0，就递归调用 flat 函数，并将深度减 1。如果元素不是数组或者深度已经为 0，就将元素添加到结果数组中。

根据给定的数组 [1, [2, [3, 4, 5]]] 和深度为 2，函数将返回扁平化后的结果数组 [1, 2, 3, 4, 5]。

所以，运行 console.log(flat(arr, 2)); 将会输出 [1, 2, 3, 4, 5]。*/

let arr = [1, [2, [3, 4, 5]]];

const flat = (arr, depth = 1) => {
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      res.push(...flat(item, depth - 1));
    } else {
      res.push(item);
    }
  }
  return res;
};

console.log(flat(arr, 2));


