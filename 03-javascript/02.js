
// 计算圆面积
const radius = 5;
const area = Math.PI * radius ** 2; // Math.PI 是内置的圆周率，** 是幂运算符
console.log(`半径为 ${radius} 的圆面积是: ${area}`); // 使用模板字符串

// 判断偶数
let numberToCheck = 10;
let isEven = numberToCheck % 2 === 0; // 取模运算，余数为 0 则是偶数
console.log(`${numberToCheck} 是偶数吗? ${isEven}`);

numberToCheck = 7;
isEven = numberToCheck % 2 === 0;
console.log(`${numberToCheck} 是偶数吗? ${isEven}`);

// 比较运算符示例
console.log("5 == '5'?", 5 == '5');   // true (值相等，类型不同但会转换)
console.log("5 === '5'?", 5 === '5'); // false (类型不同)
console.log("5 !== '5'?", 5 !== '5'); // true

// 逻辑运算符示例
let age = 25;
let hasLicense = true;
let canDrive = age >= 18 && hasLicense; // 年龄大于等于18 且 有驾照
console.log("可以开车吗?", canDrive);

// 三元运算符示例
let score = 75;
let result = score >= 60 ? "及格" : "不及格";
console.log(`分数 ${score}, 结果: ${result}`);
