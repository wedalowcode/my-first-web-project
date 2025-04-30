"use strict";
// 定义一个接受两个数字参数并返回一个数字的函数
function add(x, y) {
    return x + y;
}
// 定义一个接受字符串参数没有返回值的函数 (void)
function greet(name) {
    console.log(`你好，${name}!`);
}
// 使用函数
let sum = add(5, 3); // sum 的类型被推断为 number
console.log("5 + 3 =", sum);
greet("爱丽丝");
// 尝试使用错误类型的参数会报错
// add("hello", 5); // 编译时报错：Argument of type 'string' is not assignable to parameter of type 'number'.
// 可选参数：使用 ? 标记参数
function buildName(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}
let name1 = buildName("张"); // 正确，lastName 是可选的
let name2 = buildName("李", "四"); // 正确
console.log("姓名1:", name1);
console.log("姓名2:", name2);
// 默认参数：为参数提供一个默认值
function setVolume(volume = 50) {
    console.log(`设置音量到 ${volume}`);
}
setVolume(); // 使用默认值 50
setVolume(80); // 使用传入的值 80
// 可选参数和默认参数不能同时使用在同一个参数上
// 可选参数必须在必需参数后面
// 默认参数不需要在必需参数后面，但通常推荐放在后面，因为如果它前面有可选参数且你省略了可选参数，你将无法为它传入值。
// 接收任意数量的数字参数
function sumAll(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
let totalSum = sumAll(1, 2, 3, 4, 5); // numbers 会是一个 [1, 2, 3, 4, 5] 的数组
console.log("总和:", totalSum);
// 函数实现 (使用 any 或联合类型处理所有可能的输入)
// 实现体的参数和返回值类型应该兼容所有重载签名
function create(nameOrId, age) {
    if (typeof nameOrId === 'string') {
        if (age !== undefined) {
            // 处理 name 和 age 的情况
            return { id: Math.random(), name: nameOrId, age: age, isStudent: false, registrationDate: new Date() };
        }
        else {
            // 处理只有 name 的情况
            return { id: Math.random(), name: nameOrId, isStudent: false, registrationDate: new Date() };
        }
    }
    else {
        // 处理只有 id 的情况
        return { id: nameOrId, name: `用户${nameOrId}`, isStudent: false, registrationDate: new Date() };
    }
}
// 使用重载函数
const userA = create("赵六"); // TypeScript 知道 userA 是 User 类型
const userB = create(102); // TypeScript 知道 userB 是 User 类型
const userC = create("钱七", 30); // TypeScript 知道 userC 是 User 类型
console.log("用户 A:", userA);
console.log("用户 B:", userB);
console.log("用户 C:", userC);
// 尝试传入不符合任何重载签名的参数会报错
// create(true); // 编译时报错：No overload matches this call.
// 定义一个接受两个数字参数并返回数字的箭头函数
const subtract = (a, b) => a - b;
// 或者更简洁地让 TypeScript 推断参数类型 (但返回值类型最好明确)
const multiply = (a, b) => a * b;
console.log("10 - 4 =", subtract(10, 4));
console.log("6 * 7 =", multiply(6, 7));
