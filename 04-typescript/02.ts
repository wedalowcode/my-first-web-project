// 明确指定字符串数组
let fruits: string[] = ["苹果", "香蕉", "橙子"];

// 明确指定数字数组
let primeNumbers: Array<number> = [2, 3, 5, 7, 11];

// 混合类型的数组通常使用 any[]，但这不是最佳实践
// let mixedArray: any[] = [1, "hello", true];

// 推荐使用联合类型来明确表示数组可能包含哪些类型（下一节会详细讲联合类型）
let mixedArray: (number | string | boolean)[] = [1, "hello", true];

// 尝试向数组中添加错误类型的值会报错
// fruits.push(123); // 编译时报错：Argument of type 'number' is not assignable to parameter of type 'string'.

console.log("水果列表:", fruits);
console.log("质数列表:", primeNumbers);
console.log("混合数组:", mixedArray);
// 定义一个接口，描述一个用户的形状
interface User {
    id: number;       // 用户ID，必须是数字
    name: string;     // 用户名，必须是字符串
    age?: number;     // 年龄，是可选的属性 (? 表示)
    isStudent: boolean; // 是否是学生，必须是布尔值
    readonly registrationDate: Date; // 注册日期，只读属性，初始化后不能修改
  }
  
  // 创建一个符合 User 接口的对象
  const user1: User = {
    id: 1,
    name: "张三",
    // age 属性是可选的，可以省略
    isStudent: false,
    registrationDate: new Date()
  };
  
  // 创建另一个符合 User 接口的对象 (包含可选属性 age)
  const user2: User = {
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
  // 定义一个类型别名，用于表示一个坐标点
type Point = {
    x: number;
    y: number;
  };
  
  // 定义一个类型别名，用于表示用户 ID (虽然简单，但语义更清晰)
  type UserId = number;
  
  // 使用类型别名来注解变量
  const origin1: Point = { x: 0, y: 0 };
  let currentUserId: UserId = 101;
  
  // 可以像使用原始类型一样使用类型别名
  function printPoint(p: Point) {
    console.log(`坐标: (${p.x}, ${p.y})`);
  }
  
  printPoint(origin1);