let todos = ["学习 HTML", "学习 CSS"];

// 添加
todos.push("学习 JavaScript");
todos.unshift("准备开发环境"); // 开头添加
console.log("添加后:", todos);

// 删除
let removedLast = todos.pop(); // 删除最后一个
console.log("删除了:", removedLast);
let removedFirst = todos.shift(); // 删除第一个
console.log("删除了:", removedFirst);
console.log("删除后:", todos);

// 修改 (使用 splice)
// splice(起始索引, 删除数量, 要插入的元素1, 元素2, ...)
todos.splice(1, 1, "深入学习 CSS"); // 替换索引 1 的元素
console.log("修改后:", todos);

// 查找
let jsIndex = todos.indexOf("学习 JavaScript");
console.log("JavaScript 的索引:", jsIndex);
console.log("是否包含 '学习 HTML'?", todos.includes("学习 HTML"));

// 遍历 (forEach)
console.log("待办事项:");
todos.forEach(function(todo, index) {
  console.log(`${index + 1}. ${todo}`);
});

// 映射 (map) - 创建一个包含任务长度的新数组
let todoLengths = todos.map(todo => todo.length);
console.log("任务长度:", todoLengths);

// 过滤 (filter) - 筛选包含 "学习" 的任务
let learningTasks = todos.filter(todo => todo.includes("学习"));
console.log("学习任务:", learningTasks);
