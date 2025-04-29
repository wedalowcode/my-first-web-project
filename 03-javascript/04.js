// 函数声明
function add(num1, num2) {
  return num1 + num2;
}

// 函数表达式
const greet = function(name) {
  console.log(`你好, ${name}!`);
};

// 箭头函数
const multiply = (a, b) => {
  return a * b;
};
// 如果箭头函数体只有一行且是返回值，可以省略 {} 和 return
const subtract = (a, b) => a - b;

// 调用函数
let sum = add(5, 3);
console.log("5 + 3 =", sum);

greet("张三");

let product = multiply(4, 6);
console.log("4 * 6 =", product);

let difference = subtract(10, 4);
console.log("10 - 4 =", difference);

// 作用域示例
let globalVar = "我是全局变量";
function scopeTest() {
  let functionVar = "我是函数内变量";
  console.log(globalVar); // 可以访问全局变量
  if (true) {
    let blockVar = "我是块级变量";
    console.log(functionVar); // 可以访问函数变量
  }
  // console.log(blockVar); // 在这里访问块级变量会报错
}
scopeTest();
// console.log(functionVar); // 在这里访问函数变量会报错
