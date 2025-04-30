// 导入单个或多个导出
import { PI, add, Logger, Config } from './utils'; // 注意文件后缀省略

// 导入默认导出 (可以取任意名字)
import Settings from './utils'; // 注意这里没有大括号

// 导入模块中的所有导出，并将其放入一个命名空间对象中
import * as Utils from './utils';

console.log("PI:", PI);
console.log("2 + 3 =", add(2, 3));

const appLogger = new Logger();
appLogger.log("应用启动");

const appConfig: Config = {
  apiUrl: "http://api.example.com",
  timeout: 5000
};
console.log("应用配置:", appConfig);

const settings = new Settings();
console.log("应用设置主题:", settings.theme);

// 访问命名空间中的导出
console.log("Utils.PI:", Utils.PI);