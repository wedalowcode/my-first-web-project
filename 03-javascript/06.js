// 使用字面量创建对象
const user = {
    firstName: "张",
    lastName: "三",
    age: 30,
    email: "zhangsan@example.com",
    address: { // 值可以是另一个对象
      street: "人民路 123号",
      city: "上海"
    },
    hobbies: ["编码", "阅读", "游戏"], // 值可以是数组
    // 方法
    getFullName: function() {
      // 在方法中，this 指向 user 对象
      return this.firstName + this.lastName;
    },
    // ES6 方法简写
    greet() {
      console.log(`你好，我是 ${this.getFullName()}!`);
    }
  };
  
  // 访问属性
  console.log("姓:", user.lastName);
  console.log("城市:", user.address.city);
  console.log("第一个爱好:", user.hobbies[0]);
  console.log("邮箱(方括号访问):", user['email']);
  
  // 调用方法
  console.log("全名:", user.getFullName());
  user.greet();
  
  // 添加新属性
  user.isAdmin = false;
  console.log("是管理员吗?", user.isAdmin);
  
  // 遍历对象属性 (for...in)
  console.log("遍历用户信息:");
  for (const key in user) {
    // 检查属性是否是对象自身的，而不是继承来的 (可选但推荐)
    if (Object.hasOwnProperty.call(user, key)) {
      console.log(`${key}: ${user[key]}`); // 注意这里用方括号访问
    }
  }
  
  // 使用 Object.keys/values/entries
  console.log("所有键:", Object.keys(user));
  console.log("所有值:", Object.values(user));
  // console.log("所有键值对:", Object.entries(user));