//api小快排
//这段代码实现了一个经典的快速排序算法，通过递归地将数组分解成较小的部分进行排序，然后合并起来得到最终的有序数组。
function QuickSort(arr) {
    // 如果数组的长度小于等于1，就直接返回该数组，因为长度为1的数组是有序的。
    if (arr.length <= 1) return arr;
    //  声明了三个变量，`left`和`right`分别用于存放比当前元素小和大的元素，`current`用于存放数组的第一个元素，并且从原数组`arr`中移除。
    let left = [];
    let right = [];
    let current = arr.splice(0, 1);
    // 遍历剩余的数组元素，将比当前元素小的放入`left`数组，比当前元素大的放入`right`数组。
    for (const item of arr) {
        if (item < current) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    // 递归地对`left`和`right`数组进行快速排序，然后将排序好的`left`数组、`current`元素和排序好的`right`数组拼接在一起，最终返回排序好的数组。
    // left=>right 从小到大
    return QuickSort(left).concat(current, QuickSort(right));
}

let arr = [21, 3, 4, 6, 7, 8, 9, 9, 120, 1110]
console.log(QuickSort(arr))
