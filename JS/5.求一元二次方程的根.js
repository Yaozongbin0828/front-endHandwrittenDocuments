// 求一元二次方程的根
function solveQuadraticEquation(a,b,c){
  let discriminant = b * b - 4 * a * c;
  let result = [];
  if(discriminant > 0){
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root1 = (-b - Math.sqrt(discriminant)) / (2 * a);
    result.push(root1,root2);
  }else if(discriminant === 0){
    let root = -b / (2 * a);
    result.push(root);
  }else{
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    result.push(realPart + " + " + imaginaryPart + "i", realPart + " - " + imaginaryPart + "i");
  }
  return result;
}

//示例用法
console.log(solveQuadraticEquation(2, 5, 2)); // 输出 [2, 1]
