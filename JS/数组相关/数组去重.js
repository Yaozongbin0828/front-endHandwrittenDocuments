const arr = [1, 2, 3, 344, 2, 2, 2, 2, 2, 2, 2, 2, 2, 22, 2, 2, 2, 1];

// set
function removeSameItemBySet(arr){
  return Array.from(new Set(arr));
}

console.log(removeSameItemBySet(arr));// [ 1, 2, 3, 344, 22 ]

// indexOf
function removeSameItemByIndexOf(arr){
  let result = [];
  for(const item of arr){
    if(result.indexOf(item)==-1){
        result.push(item);
    }
  }
  return result;
}

// 循环+includes 解决
function unique(obj){
  let arr =[];
  for(let obj in arr){
    if(!arr.includes(obj[i])){
      arr.push(obj[i]);
    }
  }
  return arr;
}

// Map
function removeSameItemByMap(arr){
  let result = [];
  let map = new Map();
  for(const item of arr){
    if(!map.has(item)){
      result.push(item);
      map.set(item,item);
    }
  }
}
