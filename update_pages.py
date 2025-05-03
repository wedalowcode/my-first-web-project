#!/usr/bin/env python3
import os
import re
import glob
from bs4 import BeautifulSoup

# 定义章节标题
chapter_titles = {
    "01-html": "HTML基础",
    "02-css": "CSS样式",
    "03-javascript": "JavaScript编程",
    "04-typescript": "TypeScript进阶"
}

# 定义模板
template = """<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{title}</title>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&family=Noto+Sans+SC:wght@300;400;500;700&display=swap" rel="stylesheet">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Prism.js for code highlighting -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
    <!-- 自定义样式 -->
    <link rel="stylesheet" href="../css/lesson.css">
</head>
<body>
    <div class="lesson-container">
        <!-- 课程头部 -->
        <div class="lesson-header">
            <a href="../index.html" class="back-link">
                <i class="fas fa-arrow-left"></i> 返回主页
            </a>
            <h1 class="lesson-title">{title}</h1>
            <p class="lesson-description">{description}</p>
        </div>
        
        <!-- 课程内容 -->
        <div class="lesson-content">
            <!-- 选项卡 -->
            <div class="tabs">
                <button class="tab active" data-target="result-panel">效果展示</button>
                <button class="tab" data-target="code-panel">查看代码</button>
                <button class="tab" data-target="explanation-panel">详细解释</button>
            </div>
            
            <!-- 选项卡内容 -->
            <div class="tab-content">
                <!-- 效果展示面板 -->
                <div id="result-panel" class="panel active">
                    <div class="result-container">
                        {content}
                    </div>
                </div>
                
                <!-- 代码面板 -->
                <div id="code-panel" class="panel">
                    <div class="code-container">
                        <pre><code class="language-{language}">{code}</code></pre>
                        <button class="copy-btn">复制代码</button>
                    </div>
                </div>
                
                <!-- 解释面板 -->
                <div id="explanation-panel" class="panel">
                    <h2>{explanation_title}</h2>
                    
                    {explanation}
                </div>
            </div>
            
            <!-- 课程导航 -->
            <div class="lesson-nav">
                <a href="{prev_link}" class="nav-btn prev-btn{prev_disabled}">
                    <i class="fas fa-chevron-left"></i> 上一课
                </a>
                <a href="{next_link}" class="nav-btn next-btn{next_disabled}">
                    下一课 <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </div>
    
    <!-- JavaScript -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-markup.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-css.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>
    <script src="../js/lesson.js"></script>
</body>
</html>"""

def get_language(chapter):
    if chapter == "01-html":
        return "html"
    elif chapter == "02-css":
        return "css"
    elif chapter in ["03-javascript", "04-typescript"]:
        return "javascript"
    return "html"

def get_explanation(title, content, language):
    """根据内容生成简单的解释"""
    if language == "html":
        return f"""
        <div class="explanation">
            <h3>HTML元素解析</h3>
            <p>本课程展示了HTML的基本结构和常用元素。</p>
            <p>通过学习这些基础知识，您将能够创建自己的网页。</p>
        </div>
        
        <div class="explanation">
            <h3>实践应用</h3>
            <p>尝试修改代码中的内容，观察页面效果的变化。</p>
            <p>这是掌握HTML的最佳方式。</p>
        </div>
        """
    elif language == "css":
        return f"""
        <div class="explanation">
            <h3>CSS样式解析</h3>
            <p>本课程展示了CSS的基本语法和常用属性。</p>
            <p>CSS用于控制网页的外观和布局，是前端开发的重要组成部分。</p>
        </div>
        
        <div class="explanation">
            <h3>实践应用</h3>
            <p>尝试修改代码中的样式属性，观察页面效果的变化。</p>
            <p>通过实践，您将更好地理解CSS如何影响页面外观。</p>
        </div>
        """
    else:  # javascript
        return f"""
        <div class="explanation">
            <h3>JavaScript代码解析</h3>
            <p>本课程展示了JavaScript的基本语法和常用功能。</p>
            <p>JavaScript是一种强大的编程语言，用于为网页添加交互功能。</p>
        </div>
        
        <div class="explanation">
            <h3>实践应用</h3>
            <p>尝试修改代码，观察页面行为的变化。</p>
            <p>通过实践，您将更好地理解JavaScript如何与网页交互。</p>
        </div>
        """

def process_file(file_path):
    """处理单个HTML文件"""
    print(f"处理文件: {file_path}")
    
    # 获取文件所在章节和文件编号
    parts = file_path.split('/')
    chapter = parts[-2]
    file_name = parts[-1]
    file_num = int(file_name.split('.')[0])
    
    # 读取原始文件内容
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 使用BeautifulSoup解析HTML
    soup = BeautifulSoup(content, 'html.parser')
    
    # 提取标题
    title_elem = soup.find('title')
    h1_elem = soup.find('h1')
    
    if title_elem:
        title = title_elem.text
    elif h1_elem:
        title = h1_elem.text
    else:
        title = f"{chapter_titles.get(chapter, '课程')} - 第{file_num}节"
    
    # 提取正文内容
    body = soup.find('body')
    if body:
        # 移除返回链接，只保留主要内容
        back_link = body.find('a', class_='back-link')
        if back_link:
            back_link.extract()
        
        # 获取主要内容
        main_content = body.decode_contents().strip()
    else:
        main_content = "<p>暂无内容</p>"
    
    # 确定语言
    language = get_language(chapter)
    
    # 生成解释内容
    explanation = get_explanation(title, main_content, language)
    
    # 确定上一课和下一课的链接
    prev_num = file_num - 1
    next_num = file_num + 1
    
    prev_file = f"{prev_num:02d}.html"
    next_file = f"{next_num:02d}.html"
    
    prev_path = os.path.join(os.path.dirname(file_path), prev_file)
    next_path = os.path.join(os.path.dirname(file_path), next_file)
    
    prev_link = prev_file if os.path.exists(prev_path) else "#"
    next_link = next_file if os.path.exists(next_path) else "#"
    
    prev_disabled = " disabled" if prev_link == "#" else ""
    next_disabled = " disabled" if next_link == "#" else ""
    
    # 生成描述
    description = f"{chapter_titles.get(chapter, '课程')}的第{file_num}节内容，学习{title}相关知识"
    
    # 生成解释标题
    explanation_title = f"{title}详解"
    
    # 使用模板生成新内容
    new_content = template.format(
        title=title,
        description=description,
        content=main_content,
        code=content.replace('<', '&lt;').replace('>', '&gt;'),
        language=language,
        explanation_title=explanation_title,
        explanation=explanation,
        prev_link=prev_link,
        next_link=next_link,
        prev_disabled=prev_disabled,
        next_disabled=next_disabled
    )
    
    # 写入新文件
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"已更新: {file_path}")

def main():
    """主函数"""
    # 获取所有HTML文件（排除已更新的01.html和index.html）
    base_dir = os.path.dirname(os.path.abspath(__file__))
    html_files = []
    
    for chapter in ["01-html", "02-css", "03-javascript", "04-typescript"]:
        chapter_path = os.path.join(base_dir, chapter)
        if os.path.exists(chapter_path):
            files = glob.glob(os.path.join(chapter_path, "*.html"))
            # 排除已更新的01.html
            if chapter == "01-html":
                files = [f for f in files if not f.endswith("/01.html")]
            html_files.extend(files)
    
    # 处理每个文件
    for file_path in html_files:
        process_file(file_path)
    
    print(f"共更新了 {len(html_files)} 个文件")

if __name__ == "__main__":
    main()