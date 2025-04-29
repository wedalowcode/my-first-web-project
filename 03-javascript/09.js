console.log("同步代码 1");

// 1. 使用 setTimeout 模拟异步 (回调函数)
setTimeout(function() {
  console.log("异步操作 1 (setTimeout) 完成");
  // 如果有后续依赖操作，需要嵌套在这里... Callback Hell
  setTimeout(function() {
      console.log("异步操作 2 (嵌套) 完成");
  }, 500);
}, 1000); // 1000毫秒 = 1秒 后执行

console.log("同步代码 2");

// 2. 使用 Promise 封装异步操作
function simulateAsync(message, delay) {
  return new Promise((resolve, reject) => {
    // 模拟成功或失败
    const success = Math.random() > 0.3; // 70% 概率成功
    setTimeout(() => {
      if (success) {
        console.log(`异步操作 (${message}) 完成`);
        resolve(`结果: ${message} 成功`); // 成功时调用 resolve
      } else {
        console.error(`异步操作 (${message}) 失败`);
        reject(new Error(`错误: ${message} 失败`)); // 失败时调用 reject
      }
    }, delay);
  });
}

// 使用 Promise 处理链式异步
simulateAsync("任务A", 1500)
  .then(resultA => {
    console.log(resultA);
    return simulateAsync("任务B", 500); // 返回新的 Promise 实现链式调用
  })
  .then(resultB => {
    console.log(resultB);
    console.log("Promise 链执行完毕");
  })
  .catch(error => { // 捕获链中任何一个环节的错误
    console.error("Promise 链中发生错误:", error.message);
  })
  .finally(() => {
    console.log("Promise 链最终清理工作");
  });

// 3. 使用 async/await 简化 Promise 调用
async function runAsyncTaskSequence() {
  console.log("Async/Await: 开始执行异步序列");
  try {
    const result1 = await simulateAsync("任务X", 800);
    console.log("Async/Await:", result1);

    const result2 = await simulateAsync("任务Y", 600);
    console.log("Async/Await:", result2);

    console.log("Async/Await: 序列执行完毕");
    return "序列成功完成"; // async 函数返回 Promise
  } catch (error) {
    console.error("Async/Await: 序列中发生错误:", error.message);
    throw error; // 可以选择重新抛出错误
  } finally {
      console.log("Async/Await: 序列最终清理");
  }
}

// 调用 async 函数
runAsyncTaskSequence()
    .then(finalResult => console.log("Async 函数最终结果:", finalResult))
    .catch(finalError => console.error("Async 函数最终捕获错误:", finalError.message));

console.log("同步代码 3 (可能在异步完成前执行)");