"use strict";
// 一个变量可以是 string 或 number
let status1;
status1 = "在线"; // 正确
status1 = 1; // 正确
// status = true; // 编译时报错：Type 'boolean' is not assignable to type 'string | number'.
// 函数参数也可以是联合类型
function printId(id) {
    console.log(`ID: ${id}`);
    // 在使用联合类型的变量时，需要进行类型检查 (类型缩小)
    if (typeof id === 'string') {
        // 在这个块里，id 被缩小为 string 类型
        console.log(id.toUpperCase());
    }
    else {
        // 在这个块里，id 被缩小为 number 类型
        console.log(id.toFixed(2)); // number 类型的方法
    }
}
printId(101);
printId("abc-123");
// 创建一个对象，它必须实现 Switchable 和 Dimmable 的所有方法
const mySmartLamp = {
    turnOn: () => console.log("灯打开"),
    turnOff: () => console.log("灯关闭"),
    setBrightness: (level) => console.log(`亮度设置为 ${level}`)
};
mySmartLamp.turnOn();
mySmartLamp.setBrightness(75);
mySmartLamp.turnOff();
// 变量的值只能是 "success", "error", "loading" 中的一个
let apiStatus;
apiStatus = "success"; // 正确
apiStatus = "loading"; // 正确
// apiStatus = "done"; // 编译时报错：Type '"done"' is not assignable to type '"success" | "error" | "loading"'.
// 函数参数或返回值也可以是字面量类型
function setDirection(direction) {
    console.log(`移动方向: ${direction}`);
}
setDirection("up");
// setDirection("forward"); // 编译时报错
// 数字枚举 (默认从 0 开始)
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
let playerDirection = Direction.Up;
console.log("玩家方向 (数字):", playerDirection); // 输出 0
console.log("玩家方向 (名称):", Direction[playerDirection]); // 输出 "Up"
// 可以指定起始值
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalError"] = 500] = "InternalError";
})(StatusCode || (StatusCode = {}));
let responseStatus = StatusCode.Success;
console.log("响应状态码:", responseStatus); // 输出 200
// 字符串枚举 (推荐，可读性更好)
var ApiStatus;
(function (ApiStatus) {
    ApiStatus["Fetching"] = "FETCHING";
    ApiStatus["Success"] = "SUCCESS";
    ApiStatus["Error"] = "ERROR";
})(ApiStatus || (ApiStatus = {}));
let currentApiStatus = ApiStatus.Fetching;
console.log("当前API状态:", currentApiStatus); // 输出 "FETCHING"
let data = 123;
data = "hello";
data = true;
data.toFixed(2); // 不会报错，any 类型不做检查
data.toUpperCase(); // 不会报错，any 类型不做检查
let dataUnknown = "hello world";
// 尝试直接对 unknown 类型进行操作会报错
// dataUnknown.toUpperCase(); // 编译时报错：'dataUnknown' is of type 'unknown'.
// 必须先进行类型检查或断言
if (typeof dataUnknown === 'string') {
    console.log(dataUnknown.toUpperCase()); // 在这个块里，dataUnknown 被缩小为 string
}
// 或者使用类型断言 (后面会讲)
// console.log((dataUnknown as string).toUpperCase());
// 没有返回值的函数
function logAction(action) {
    console.log(`执行动作: ${action}`);
}
logAction("初始化系统");
// 永远不会返回的函数 (例如，抛出错误)
function throwError(message) {
    throw new Error(message);
}
// 永远不会返回的函数 (例如，无限循环)
// function infiniteLoop(): never {
//   while (true) {
//     // ...
//   }
// }
// 调用会抛出错误的函数
// try {
//   throwError("出错了!");
// } catch (e) {
//   console.error("捕获到错误:", e.message);
// }
let someValue = "这是个字符串";
// 使用 as 进行类型断言
let strLength1 = someValue.length;
console.log("字符串长度 (as):", strLength1);
// 使用 <Type> 进行类型断言 (在 tsx 文件中可能与 JSX 冲突)
let strLength2 = someValue.length;
console.log("字符串长度 (<Type>):", strLength2);
// 危险的断言：如果 someValue 实际上不是字符串
let anotherValue = 123;
// let dangerousLength: number = (anotherValue as string).length; // 编译时不会报错，但运行时会出错！
// 获取 DOM 元素时经常用到类型断言
// const element = document.getElementById("my-canvas") as HTMLCanvasElement;
// // 现在 TypeScript 知道 element 是一个 HTMLCanvasElement 类型，可以使用其特有的属性和方法
// const ctx = element.getContext("2d");
