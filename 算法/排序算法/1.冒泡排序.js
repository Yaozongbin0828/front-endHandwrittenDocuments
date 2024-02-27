//冒泡排序
function BubbleSort(arr) {
    var len = arr.length;
    // 外层循环，控制需要比较的轮数
    for (var i = 0; i < len; i++) {
        // 内层循环，控制每轮需要比较的次数
        for (var j = 0; j < len - 1 - i; j++) {
            //如果前一个元素比后一个元素大，则交换它们的位置
          
            //方法1
             if (arr[j] > arr[j + 1]) {
             var temp = arr[j + 1];
             arr[j + 1] = arr[j];
             arr[j] = temp;
            }

            //方法2
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}
// 随机输入数组
let arr = [1, 324, 243, 255, 152, 533, 1433, 2143333, 355333, 133212121];
// 输出
console.log(BubbleSort(arr));
