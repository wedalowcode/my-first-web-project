// 导出常量
export const PI = 3.14159;

// 导出函数
export function add(x: number, y: number): number {
  return x + y;
}

// 导出接口
export interface Config {
  apiUrl: string;
  timeout: number;
}

// 导出类
export class Logger {
  log(message: string): void {
    console.log(`[日志] ${message}`);
  }
}

// 默认导出 (一个模块只能有一个默认导出)
export default class AppSettings {
  theme: string = 'light';
}