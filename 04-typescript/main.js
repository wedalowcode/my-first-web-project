"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 导入单个或多个导出
const utils_1 = require("./utils"); // 注意文件后缀省略
// 导入默认导出 (可以取任意名字)
const utils_2 = __importDefault(require("./utils")); // 注意这里没有大括号
// 导入模块中的所有导出，并将其放入一个命名空间对象中
const Utils = __importStar(require("./utils"));
console.log("PI:", utils_1.PI);
console.log("2 + 3 =", (0, utils_1.add)(2, 3));
const appLogger = new utils_1.Logger();
appLogger.log("应用启动");
const appConfig = {
    apiUrl: "http://api.example.com",
    timeout: 5000
};
console.log("应用配置:", appConfig);
const settings = new utils_2.default();
console.log("应用设置主题:", settings.theme);
// 访问命名空间中的导出
console.log("Utils.PI:", Utils.PI);
