const toggleBtn = document.getElementById('toggle-theme-btn');
const themeNameSpan = document.getElementById('theme-name');
const body = document.body;

// --- 应用存储的主题 ---
function applyTheme(theme) {
  if (theme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeNameSpan.textContent = '暗色';
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    themeNameSpan.textContent = '亮色';
  }
}

// --- 页面加载时读取 localStorage ---
// 使用 getItem 获取存储的主题，如果没有则默认为 'light'
let currentTheme = localStorage.getItem('theme') || 'light';
applyTheme(currentTheme);

// --- 切换主题并存储 ---
toggleBtn.addEventListener('click', function() {
  // 切换主题逻辑
  if (currentTheme === 'light') {
    currentTheme = 'dark';
  } else {
    currentTheme = 'light';
  }

  // 应用新主题
  applyTheme(currentTheme);

  // 将新主题存储到 localStorage
  localStorage.setItem('theme', currentTheme);
  console.log(`主题已保存到 localStorage: ${currentTheme}`);

  // 示例：使用 sessionStorage (会话结束后清除)
  sessionStorage.setItem('lastAction', '切换主题');
  console.log('上次操作已存入 sessionStorage:', sessionStorage.getItem('lastAction'));
});

// 清除示例 (通常不需要随便清除)
// localStorage.removeItem('theme');
// localStorage.clear(); // 清除所有 localStorage 数据
// sessionStorage.clear();