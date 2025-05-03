#!/usr/bin/env python3
import os
import re
import sys

def extract_content(html_file):
    """从HTML文件中提取内容"""
    with open(html_file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 提取标题
    title_match = re.search(r'<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else "课程标题"
    
    # 提取描述（如果没有，则使用默认描述）
    description = "学习Web开发的基础知识"
    
    # 提取HTML代码示例
    code_content = ""
    if '<pre><code class="language-html">' in content:
        code_match = re.search(r'<pre><code class="language-html">(.*?)</code></pre>', content, re.DOTALL)
        if code_match:
            code_content = code_match.group(1)
    else:
        # 尝试从页面内容中提取代码
        body_match = re.search(r'<body>(.*?)</body>', content, re.DOTALL)
        if body_match:
            body_content = body_match.group(1)
            container_match = re.search(r'<div class="container">(.*?)</div>', body_content, re.DOTALL)
            if container_match:
                container_content = container_match.group(1)
                code_content = container_content.strip()
    
    # 提取结果内容（如果没有，则使用代码内容）
    result_content = code_content
    
    # 创建解释内容
    explanation_content = """
    <h2>HTML基础结构解析</h2>
    
    <div class="explanation">
        <h3>文档类型声明</h3>
        <p><code>&lt;!DOCTYPE html&gt;</code> - 这是HTML5的文档类型声明，告诉浏览器这是一个HTML文档。</p>
    </div>
    
    <div class="explanation">
        <h3>HTML元素</h3>
        <p><code>&lt;html lang="zh-CN"&gt;</code> - 这是HTML文档的根元素，lang属性指定文档的语言为中文。</p>
    </div>
    
    <div class="explanation">
        <h3>头部信息</h3>
        <p><code>&lt;head&gt;</code> - 包含文档的元数据，如标题、字符集、视口设置和样式。</p>
        <ul>
            <li><code>&lt;meta charset="UTF-8"&gt;</code> - 设置文档字符编码为UTF-8，支持各种语言字符。</li>
            <li><code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> - 设置视口，使网页在移动设备上正确显示。</li>
            <li><code>&lt;title&gt;</code> - 设置网页标题，显示在浏览器标签上。</li>
            <li><code>&lt;style&gt;</code> - 包含CSS样式规则，用于美化网页。</li>
        </ul>
    </div>
    
    <div class="explanation">
        <h3>页面主体</h3>
        <p><code>&lt;body&gt;</code> - 包含网页的可见内容。</p>
        <ul>
            <li><code>&lt;div class="container"&gt;</code> - 一个容器元素，用于组织内容并应用样式。</li>
            <li><code>&lt;h1&gt;</code> - 一级标题，通常用于页面的主标题。</li>
            <li><code>&lt;p&gt;</code> - 段落元素，用于显示文本内容。</li>
        </ul>
    </div>
    """
    
    # 确定上一课和下一课的链接
    file_name = os.path.basename(html_file)
    lesson_number = int(file_name.split('.')[0])
    
    prev_lesson = f"{lesson_number-1:02d}.html" if lesson_number > 1 else "#"
    next_lesson = f"{lesson_number+1:02d}.html"
    
    prev_disabled = "disabled" if lesson_number == 1 else ""
    next_disabled = ""
    
    return {
        "title": title,
        "description": description,
        "code_content": code_content,
        "result_content": result_content,
        "explanation_content": explanation_content,
        "prev_lesson": prev_lesson,
        "next_lesson": next_lesson,
        "prev_disabled": prev_disabled,
        "next_disabled": next_disabled
    }

def update_lesson(html_file, template_file):
    """使用模板更新课程页面"""
    # 提取内容
    content = extract_content(html_file)
    
    # 读取模板
    with open(template_file, 'r', encoding='utf-8') as f:
        template = f.read()
    
    # 替换模板中的占位符
    updated_html = template
    updated_html = updated_html.replace('{{TITLE}}', content['title'])
    updated_html = updated_html.replace('{{DESCRIPTION}}', content['description'])
    updated_html = updated_html.replace('{{CODE_CONTENT}}', content['code_content'])
    updated_html = updated_html.replace('{{RESULT_CONTENT}}', content['result_content'])
    updated_html = updated_html.replace('{{EXPLANATION_CONTENT}}', content['explanation_content'])
    updated_html = updated_html.replace('{{PREV_LESSON}}', content['prev_lesson'])
    updated_html = updated_html.replace('{{NEXT_LESSON}}', content['next_lesson'])
    updated_html = updated_html.replace('{{PREV_DISABLED}}', content['prev_disabled'])
    updated_html = updated_html.replace('{{NEXT_DISABLED}}', content['next_disabled'])
    
    # 写入更新后的HTML
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(updated_html)
    
    print(f"已更新: {html_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("用法: python update_html_lesson.py <html文件路径>")
        sys.exit(1)
    
    html_file = sys.argv[1]
    template_file = "template.html"
    
    if not os.path.exists(html_file):
        print(f"错误: 文件 {html_file} 不存在")
        sys.exit(1)
    
    if not os.path.exists(template_file):
        print(f"错误: 模板文件 {template_file} 不存在")
        sys.exit(1)
    
    update_lesson(html_file, template_file)