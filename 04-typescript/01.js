"use strict";
// 这是一根明确标记为存放文本的电线 (string 类型)
let message = "你好，TypeScript！";
// 这是一根明确标记为存放数字的电线 (number 类型)
let year = 2025;
// 这是一根明确标记为存放真/假状态的电线 (boolean 类型)
let isReady = true;
// 你也可以让 TypeScript 自己根据赋的值推断类型 (隐式类型)
// 但对于变量，尤其是在声明时没有立即赋值的情况下，明确注解通常是更好的实践
let greeting = "Hello!"; // TypeScript 推断 greeting 是 string 类型
// 对于常量，推荐明确注解类型
const PI = 3.14159;
// 一些基本类型
let user = null; // 明确表示这是一个空值
let undefinedVar = undefined; // 明确表示这是一个未定义的值
// ES6 新增的基本类型 Symbol 和 BigInt
const uniqueId = Symbol("id");
const largeNumber = 9007199254740991n; // 注意 n 后缀
// 类型推断的例子：
let age = 30; // TypeScript 推断 age 是 number 类型
// 尝试将错误类型的值赋给有明确类型注解的变量会报错 (编译阶段)
// year = "二零二五"; // 取消注释，编译时会报错：Type 'string' is not assignable to type 'number'.
// 在控制台输出 (和 JavaScript 一样)
console.log(message);
console.log("当前年份:", year);
console.log("是否准备好?", isReady);
console.log("问候语:", greeting);
console.log("圆周率:", PI);
console.log("用户数据:", user);
console.log("未定义变量:", undefinedVar);
console.log("唯一ID:", uniqueId);
console.log("大整数:", largeNumber);
console.log("年龄:", age);
