// 判断成绩等级
let grade = 85;
if (grade >= 90) {
  console.log("优秀");
} else if (grade >= 80) {
  console.log("良好");
} else if (grade >= 60) {
  console.log("及格");
} else {
  console.log("不及格");
}

// switch 示例 (判断星期几)
let day = new Date().getDay(); // 获取当前星期几 (0=周日, 1=周一, ...)
let dayName;
switch (day) {
  case 0: dayName = "星期日"; break;
  case 1: dayName = "星期一"; break;
  case 2: dayName = "星期二"; break;
  // ... 其他 case
  case 6: dayName = "星期六"; break;
  default: dayName = "未知";
}
console.log(`今天是: ${dayName}`);

// 打印九九乘法表 (for 循环嵌套)
console.log("九九乘法表:");
for (let i = 1; i <= 9; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += `${j} * ${i} = ${i * j}\t`; // \t 是制表符，用于对齐
  }
  console.log(row);
}

// for...of 遍历数组
const colors = ['red', 'green', 'blue'];
console.log("遍历颜色数组:");
for (const color of colors) {
  console.log(color);
}