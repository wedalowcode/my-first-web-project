const titleElement = document.getElementById('main-title');
const textElement = document.getElementById('text-to-change');
const changeTextBtn = document.getElementById('change-text-btn');
const toggleStyleBtn = document.getElementById('toggle-style-btn');
const myImage = document.getElementById('my-image');
const imageUrlInput = document.getElementById('image-url-input');
const changeImageBtn = document.getElementById('change-image-btn');
const container = document.getElementById('container');
const addBtn = document.getElementById('add-element-btn');
const removeBtn = document.getElementById('remove-element-btn');

// --- 修改内容和样式 ---
changeTextBtn.onclick = function() { // 简单的事件处理 (后面会学 addEventListener)
  textElement.textContent = "文本已被 JavaScript 改变！";
};

toggleStyleBtn.onclick = function() {
  // 使用 classList.toggle() 切换类
  textElement.classList.toggle('highlight');
  // 或者直接修改 style (不推荐大量使用)
  // if (textElement.style.color === 'red') {
  //   textElement.style.color = 'black';
  // } else {
  //   textElement.style.color = 'red';
  // }
};

// --- 修改属性 ---
changeImageBtn.onclick = function() {
  const newImageUrl = imageUrlInput.value; // 获取输入框的值
  if (newImageUrl) { // 检查是否有输入
    myImage.src = newImageUrl;
    myImage.alt = "用户提供的新图片"; // 同时更新 alt 文本
    imageUrlInput.value = ''; // 清空输入框
  } else {
    alert("请输入图片 URL！");
  }
};
// 图片加载失败处理
myImage.onerror = function() {
    console.error("图片加载失败:", myImage.src);
    myImage.src = 'https://placehold.co/200x100/cccccc/ffffff?text=Image+Error'; // 替换为错误提示图
    myImage.alt = "图片加载失败";
};


// --- 创建和插入/删除节点 ---
addBtn.onclick = function() {
  // 创建一个新的 <p> 元素
  const newParagraph = document.createElement('p');
  // 创建文本节点
  const newText = document.createTextNode(`这是新添加的元素 #${container.children.length + 1}`);
  // 将文本节点添加到 p 元素中
  newParagraph.appendChild(newText);
  // 将新的 p 元素添加到 container 的末尾
  container.appendChild(newParagraph);
};

removeBtn.onclick = function() {
  const lastElement = container.lastElementChild; // 获取最后一个子元素
  if (lastElement) { // 确保有子元素可移除
    container.removeChild(lastElement);
  } else {
    console.log("容器内没有元素可以移除了。");
  }
};