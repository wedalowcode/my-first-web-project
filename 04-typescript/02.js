"use strict";
// 明确指定字符串数组
let fruits = ["苹果", "香蕉", "橙子"];
// 明确指定数字数组
let primeNumbers = [2, 3, 5, 7, 11];
// 混合类型的数组通常使用 any[]，但这不是最佳实践
// let mixedArray: any[] = [1, "hello", true];
// 推荐使用联合类型来明确表示数组可能包含哪些类型（下一节会详细讲联合类型）
let mixedArray = [1, "hello", true];
// 尝试向数组中添加错误类型的值会报错
// fruits.push(123); // 编译时报错：Argument of type 'number' is not assignable to parameter of type 'string'.
console.log("水果列表:", fruits);
console.log("质数列表:", primeNumbers);
console.log("混合数组:", mixedArray);
// 创建一个符合 User 接口的对象
const user1 = {
    id: 1,
    name: "张三",
    // age 属性是可选的，可以省略
    isStudent: false,
    registrationDate: new Date()
};
// 创建另一个符合 User 接口的对象 (包含可选属性 age)
const user2 = {
    id: 2,
    name: "李四",
    age: 25,
    isStudent: true,
    registrationDate: new Date('2023-01-15')
};
// 尝试创建一个不符合 User 接口的对象会报错
// const user3: User = { // 编译时报错：Missing properties 'id', 'name', 'isStudent' in type '{}'.
//   userName: "王五", // 编译时报错：Object literal may only specify known properties, and 'userName' does not exist in type 'User'.
//   student: true
// };
// 尝试修改只读属性会报错
// user1.registrationDate = new Date('2024-01-01'); // 编译时报错：Cannot assign to 'registrationDate' because it is a read-only property.
console.log("用户信息 1:", user1);
console.log("用户信息 2:", user2);
// 使用类型别名来注解变量
const origin1 = { x: 0, y: 0 };
let currentUserId = 101;
// 可以像使用原始类型一样使用类型别名
function printPoint(p) {
    console.log(`坐标: (${p.x}, ${p.y})`);
}
printPoint(origin1);
