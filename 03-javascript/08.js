const alertBtn = document.getElementById('alert-btn');
const myInput = document.getElementById('my-input');
const outputSpan = document.getElementById('output-span');
const preventLink = document.getElementById('prevent-link');
const parentDiv = document.getElementById('parent-div');
const childBtn = document.getElementById('child-btn');

// --- 基本事件监听 ---
alertBtn.addEventListener('click', function(event) {
  // event 对象包含了事件信息
  console.log('事件类型:', event.type);
  console.log('目标元素:', event.target);
  alert('按钮被点击了！');
});

// 监听输入框的 'input' 事件 (内容实时变化时触发)
myInput.addEventListener('input', function(event) {
  outputSpan.textContent = event.target.value; // 将输入内容显示到 span
});

// --- 阻止默认行为 ---
preventLink.addEventListener('click', function(event) {
  event.preventDefault(); // 阻止链接跳转
  alert('链接的默认跳转行为已被阻止！');
});

// --- 阻止事件传播 (冒泡) ---
parentDiv.addEventListener('click', function(event) {
  console.log('父元素 Div 被点击了！');
});

childBtn.addEventListener('click', function(event) {
  console.log('子元素 Button 被点击了！');
  event.stopPropagation(); // 阻止事件冒泡到父元素
  alert('子按钮点击，事件传播已阻止。');
});

// --- 页面加载事件 ---
// 当整个页面及所有资源 (图片、样式表等) 加载完成时触发
window.addEventListener('load', function() {
  console.log('页面及所有资源加载完成！');
});

// 当 HTML 文档被完全加载和解析完成之后触发，无需等待样式表、图像等完全加载
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM 完全加载并解析完成！(通常在这里执行需要操作 DOM 的代码)');
  // 可以在这里安全地获取和操作 DOM 元素
  alertBtn.style.backgroundColor = 'lightblue';
});