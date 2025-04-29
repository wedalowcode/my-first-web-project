
// 1. 模板字符串
const userName = "Alice";
const userAge = 28;
const greeting = `你好，我是 ${userName}，
我今年 ${userAge} 岁了。`; // 支持换行和变量嵌入
console.log(greeting);

// 2. 解构赋值
// 数组解构
const numbers = [10, 20, 30];
const [first, second] = numbers;
console.log(first, second); // 输出: 10 20

// 对象解构 (变量名需与属性名一致，或使用别名)
const person = { name: "Bob", city: "New York" };
const { name, city: personCity } = person; // city 重命名为 personCity
console.log(name, personCity); // 输出: Bob New York

// 3. 展开运算符
// 合并数组
const arr1 = [1, 2];
const arr2 = [3, 4];
const combinedArr = [...arr1, 0, ...arr2, 5];
console.log(combinedArr); // 输出: [1, 2, 0, 3, 4, 5]

// 合并对象 (ES2018)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 }; // 相同属性会被后面的覆盖
const combinedObj = { ...obj1, ...obj2, d: 5 };
console.log(combinedObj); // 输出: { a: 1, b: 3, c: 4, d: 5 }

// 函数参数传递
function sumNumbers(x, y, z) { return x + y + z; }
const numsToSum = [1, 2, 3];
console.log(sumNumbers(...numsToSum)); // 输出: 6

// 4. 剩余参数
function logArgs(firstArg, ...restArgs) { // restArgs 是一个包含剩余参数的数组
  console.log("第一个参数:", firstArg);
  console.log("剩余参数:", restArgs);
}
logArgs('a', 'b', 'c', 'd');
// 输出:
// 第一个参数: a
// 剩余参数: [ 'b', 'c', 'd' ]

// 5. 模块化 (基本概念 - 需要特定环境或构建工具)
// --- utils.js ---
// export const PI = 3.14;
// export function double(n) { return n * 2; }

// --- main.js ---
// import { PI, double } from './utils.js';
// console.log(PI);
// console.log(double(5));
