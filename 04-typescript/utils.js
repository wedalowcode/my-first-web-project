"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.PI = void 0;
exports.add = add;
// 导出常量
exports.PI = 3.14159;
// 导出函数
function add(x, y) {
    return x + y;
}
// 导出类
class Logger {
    log(message) {
        console.log(`[日志] ${message}`);
    }
}
exports.Logger = Logger;
// 默认导出 (一个模块只能有一个默认导出)
class AppSettings {
    constructor() {
        this.theme = 'light';
    }
}
exports.default = AppSettings;
