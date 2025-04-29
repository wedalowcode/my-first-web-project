const loadBtn = document.getElementById('load-users-btn');
const userList = document.getElementById('user-list');
const statusP = document.getElementById('loading-status');

loadBtn.addEventListener('click', fetchUsers);

async function fetchUsers() {
  statusP.textContent = '正在加载...';
  userList.innerHTML = ''; // 清空列表
  loadBtn.disabled = true; // 禁用按钮防止重复点击

  try {
    // 发送 GET 请求
    const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5'); // 获取前 5 个用户

    console.log('Response Status:', response.status); // 打印状态码
    console.log('Response OK?', response.ok);      // 打印是否成功

    if (!response.ok) {
      // 如果 HTTP 状态码不是 2xx，抛出错误
      throw new Error(`HTTP 错误! 状态码: ${response.status}`);
    }

    // 解析 JSON 数据 (response.json() 返回 Promise)
    const users = await response.json();

    statusP.textContent = '加载成功！';

    // 将用户数据渲染到页面
    users.forEach(user => {
      const listItem = document.createElement('li');
      listItem.textContent = `ID: ${user.id}, 姓名: ${user.name}, 邮箱: ${user.email}`;
      userList.appendChild(listItem);
    });

  } catch (error) {
    // 捕获网络错误或解析错误
    console.error('获取用户数据失败:', error);
    statusP.textContent = `加载失败: ${error.message}`;
  } finally {
    loadBtn.disabled = false; // 无论成功失败，重新启用按钮
  }
}

// 示例：发送 POST 请求 (需要后端支持)
async function postDataExample() {
    const dataToSend = { title: 'foo', body: 'bar', userId: 1 };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(dataToSend), // 将 JS 对象转为 JSON 字符串
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json(); // 解析返回的 JSON
        console.log('POST 请求成功，服务器返回:', result);
    } catch (error) {
        console.error('POST 请求失败:', error);
    }
}
// postDataExample(); // 可以取消注释来尝试发送 POST 请求