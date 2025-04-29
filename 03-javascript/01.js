// 使用 let 声明可变变量
let message = "你好，JavaScript！"; // String 类型
let currentYear = 2025;           // Number 类型
let isLearning = true;            // Boolean 类型

// 使用 const 声明常量
const PI = 3.14159;               // Number 类型常量
const SITE_NAME = "我的学习网站"; // String 类型常量

// 特殊类型
let user = null;                  // Null 类型
let undefinedVar;                 // Undefined 类型

// 在控制台输出变量值
console.log(message);
console.log("当前年份:", currentYear); // 可以输出多个值
console.log("正在学习中?", isLearning);
console.log("圆周率:", PI);
console.log("网站名称:", SITE_NAME);
console.log("用户信息:", user);
console.log("未定义变量:", undefinedVar);

// 修改 let 声明的变量
message = "JavaScript 基础入门";
console.log("更新后的消息:", message);

// 尝试修改 const 声明的常量会报错 (取消注释会看到错误)
// PI = 3.14;