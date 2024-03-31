
//求和 
function arrSum() {
    var arr = [1, 3, 5, 7, 9]
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log('无参版求和:' + sum);
}

arrSum();


function arrSum2(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    console.log('传参版求和:' + sum);
}

arrSum2([1, 3, 5, 7, 9])


//最大值
function getMax() {
    var arr = [1, 3, 5, 7, 9]
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log('无参版求最大值:' + max);
}

getMax();


function getMax2(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    console.log('传参版求最大值:' + max);
}

getMax2([1, 3, 5, 7, 9]);


//最小值
function getMin() {
    var arr = [1, 1, 2, 3, 3, 5, 7, 9, 0];
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log('无参版求最小值:' + min);
}

getMin();


function getMin2(arr) {
    var min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log('传参版求最小值:' + min);
}

getMin2([1, 1, 2, 3, 3, 5, 7, 9, 0]);



//平均值
function getAvg() {
    var arr = [2, 4, 6, 8, 10];
    var sumAvg = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sumAvg += arr[0];
    }
    console.log('无参版平均值:' + sumAvg / arr.length);
}

getAvg();

function getAvg2(arr) {
    var sumAvg = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sumAvg += arr[0];
    }
    console.log('传参版平均值:' + sumAvg / arr.length);
}

getAvg2([2, 4, 6, 8, 10]);

//拼接数组字符
function getJoin() {
    var arr = ['花有重开日', '人无再少年', '岁月流走', '慕然回首'];
    var str = "";
    for (var i = 1; i < arr.length; i++) {
        str += '-' + arr[i];
    }
    console.log(arr[0] + str);
    console.log(arr.join('-'));
}


function getJoin2(arr) {
    var str = "";
    for (var i = 1; i < arr.length; i++) {
        str += '-' + arr[i];
    }
    console.log(arr[0] + str);
    console.log(arr.join('-'));
}

getJoin2(['花有重开日', '人无再少年', '岁月流走', '慕然回首']);

//反转数组
function getReverse() {
    var arr = [1, 2, 3, 4, 5];
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log("数组反转:" + arr);
}

getReverse();

function getReverse2(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log("数组反转:" + arr);
}

getReverse2([1, 2, 3, 4, 5]);

//冒泡排序
function bubbleSortInBook() {
    var arr = [10, 20, 30, 50, 80, 40]
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}

bubbleSortInBook();

// while 5的阶乘
var i = 1;
var sum = 1;
while (i <= 5) {
    sum *= i;
    i++;
}
console.log('while循环求5的阶乘:' + sum); //120 (5的阶乘)

//for 1! + 2! + 3! + 4! + 5!

var jiecheng = 1;
for (var i = 1, sum = 0; i <= 5; i++) {
    jiecheng *= i;
    sum += jiecheng;
}
console.log('for循环求阶乘的和:' + sum); // 输出 153（1! + 2! + 3! + 4! + 5!）

var x = 1, y = 2;
fn(x, y);

function fn(x, y) {
    x = 10; y = 20;
    let sum = x + y;
    console.log(x + y);
    return x + y;
}
console.log(x, y);

function getRangeNum(n, m) {
    let sum = 0;
    for (let i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
}

console.log(getRangeNum(1, 10)); //实参

for (let i = 0; i <= 5; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000)
    })(i)
}

