const arr = [1, 2, , 2, 1, 1, 2, 2, 3, 4, 5];
const arr1 = ['1', '2', '3', '4', '5'];
let newArr = []


let arrOne = arr1.map((value) => {
    return value + '-';
})

console.log(arrOne);

arr.forEach((index, value) => {
    if (value > 0) newArr.push(value);
})
console.log(newArr);

//max
var max = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}

//min
var min = arr[0];
for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
        min = arr[i];
    }
}

console.log(max);
console.log(min);

//bubbleSort
function bubbleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const arrArray = [2, 5, 3, 8, 10, 9, 1]
const arrArray2 = [2, 5, 3, 8, 10, 9, 1, 222, 111, 0, 198]
console.log(bubbleSort(arrArray));
console.log(bubbleSort(arrArray2));
// 小到大
console.log(arrArray.sort((a, b) => a - b));
// 大到小
console.log(arrArray.sort((a, b) => b - a));

var a = 1, b = 2;
fn(a, b)
function fn(a, b) {
    console.log(a + b);
    a = 10; b = 10
}

console.log(a, b);