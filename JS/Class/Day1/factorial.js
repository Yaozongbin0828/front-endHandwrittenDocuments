// 阶乘
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function factorialSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += factorial(i);
    }
    return sum;
}
