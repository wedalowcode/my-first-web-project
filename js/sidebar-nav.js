/**
 * 课程导航栏生成脚本
 * 用于动态生成左侧导航栏
 */

// 课程章节数据
const courseData = {
    "01-html": {
        title: "HTML基础",
        lessons: [
            { id: "01", title: "Hello World - 创建第一个HTML页面" },
            { id: "02", title: "关于我 - 个人简介页面" },
            { id: "03", title: "链接与图片 - 多媒体内容" },
            { id: "04", title: "课程表 - 表格应用" },
            { id: "05", title: "登录 - 表单设计" },
            { id: "06", title: "关于我 - 语义化HTML" },
            { id: "07", title: "多媒体与嵌入 - 音频视频" }
        ]
    },
    "02-css": {
        title: "CSS样式",
        lessons: [
            { id: "01", title: "CSS 引入方式 - 内联、内部和外部样式" },
            { id: "02", title: "HTML 文档 - 基础样式应用" },
            { id: "03", title: "盒子模型 - 边距、边框与内边距" },
            { id: "04", title: "字体效果 - 文本样式与排版" },
            { id: "05", title: "背景效果 - 颜色与图像" },
            { id: "06", title: "背景定位 - 位置与重复" },
            { id: "07", title: "背景尺寸 - 覆盖与包含" },
            { id: "08", title: "渐变背景 - 线性与径向渐变" },
            { id: "09", title: "多重背景 - 层叠效果" },
            { id: "10", title: "边框样式 - 圆角与阴影" },
            { id: "11", title: "过渡效果 - 动画过渡" },
            { id: "12", title: "变换效果 - 旋转与缩放" },
            { id: "13", title: "动画效果 - 关键帧动画" },
            { id: "14", title: "弹性布局 - Flexbox" },
            { id: "15", title: "网格布局 - Grid" }
        ]
    },
    "03-javascript": {
        title: "JavaScript编程",
        lessons: [
            { id: "01", title: "JS 基础 - 变量与数据类型" },
            { id: "02", title: "JS 基础 - 运算符与表达式" },
            { id: "03", title: "JS 基础 - 条件语句" },
            { id: "04", title: "JS 基础 - 循环结构" },
            { id: "05", title: "JS 基础 - 函数定义与调用" },
            { id: "06", title: "JS 基础 - 数组与对象" },
            { id: "07", title: "DOM 操作 - 元素选择与修改" },
            { id: "08", title: "事件处理 - 用户交互" },
            { id: "09", title: "JS 基础 - 错误处理与调试" },
            { id: "10", title: "Fetch API - 网络请求" },
            { id: "11", title: "本地存储 - 数据持久化" },
            { id: "12", title: "JS 基础 - 异步编程" }
        ]
    },
    "04-typescript": {
        title: "TypeScript进阶",
        lessons: [
            { id: "01", title: "TS 基础 - 类型系统介绍" },
            { id: "02", title: "TS 基础 - 接口与类型别名" },
            { id: "03", title: "TS 基础 - 类与继承" },
            { id: "04", title: "TS 基础 - 泛型编程" },
            { id: "05", title: "TS 基础 - 高级类型与类型操作" },
            { id: "06", title: "TS 实战 - 项目配置与模块化" },
            { id: "07", title: "TS 实战 - 前端框架集成" }
        ]
    }
};

// 获取当前页面的路径信息
function getCurrentPageInfo() {
    const path = window.location.pathname;
    const pathParts = path.split('/');
    
    // 找到章节和课程ID
    let chapterId = '';
    let lessonId = '';
    
    for (let i = 0; i < pathParts.length; i++) {
        if (pathParts[i].match(/^\d{2}-/)) {
            chapterId = pathParts[i];
            if (i + 1 < pathParts.length) {
                lessonId = pathParts[i + 1].split('.')[0];
            }
            break;
        }
    }
    
    return { chapterId, lessonId };
}

// 获取网站基础URL
function getBaseUrl() {
    const path = window.location.pathname;
    const pathParts = path.split('/');
    
    // 检查是否在GitHub Pages上
    if (window.location.hostname.includes('github.io')) {
        // 获取仓库名称
        const repoName = pathParts[1];
        return `/${repoName}`;
    }
    
    return '';
}

// 生成侧边栏HTML
function generateSidebar() {
    const sidebar = document.createElement('div');
    sidebar.className = 'sidebar';
    
    const sidebarHeader = document.createElement('div');
    sidebarHeader.className = 'sidebar-header';
    sidebarHeader.innerHTML = `
        <h3 class="sidebar-title">课程导航</h3>
        <p class="sidebar-description">浏览所有章节和课程</p>
    `;
    sidebar.appendChild(sidebarHeader);
    
    const { chapterId, lessonId } = getCurrentPageInfo();
    
    // 为每个章节创建导航
    Object.keys(courseData).forEach(chapter => {
        // 添加章节标题
        const chapterTitle = document.createElement('h4');
        chapterTitle.className = 'sidebar-chapter-title';
        chapterTitle.textContent = courseData[chapter].title;
        sidebar.appendChild(chapterTitle);
        
        // 添加课程列表
        const navList = document.createElement('ul');
        navList.className = 'sidebar-nav';
        
        courseData[chapter].lessons.forEach(lesson => {
            const listItem = document.createElement('li');
            listItem.className = 'sidebar-nav-item';
            
            const isActive = chapter === chapterId && lesson.id === lessonId;
            
            const baseUrl = getBaseUrl();
            listItem.innerHTML = `
                <a href="${baseUrl}/${chapter}/${lesson.id}.html" class="sidebar-nav-link ${isActive ? 'active' : ''}">
                    <i class="fas fa-file-code"></i>
                    <span>${lesson.id}. ${lesson.title}</span>
                </a>
            `;
            
            navList.appendChild(listItem);
        });
        
        sidebar.appendChild(navList);
    });
    
    return sidebar;
}

// 在页面加载完成后添加侧边栏
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.lesson-container');
    
    if (container) {
        // 创建一个包装器来包含侧边栏和现有内容
        const wrapper = document.createElement('div');
        wrapper.className = 'with-sidebar';
        wrapper.style.display = 'flex';
        
        // 将现有内容移动到包装器中
        while (container.firstChild) {
            wrapper.appendChild(container.firstChild);
        }
        
        // 添加侧边栏和包装器到容器
        container.appendChild(generateSidebar());
        container.appendChild(wrapper);
        
        // 添加移动端侧边栏切换按钮
        const sidebarToggle = document.createElement('button');
        sidebarToggle.className = 'sidebar-toggle';
        sidebarToggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.appendChild(sidebarToggle);
        
        sidebarToggle.addEventListener('click', () => {
            document.querySelector('.sidebar').classList.toggle('active');
            sidebarToggle.classList.toggle('active');
        });
    }
});