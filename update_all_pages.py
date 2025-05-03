#!/usr/bin/env python3
import os
import glob

def update_html_files(directory):
    """更新指定目录中的所有HTML文件"""
    # 获取目录中的所有HTML文件
    html_files = glob.glob(f"{directory}/*.html")
    
    for file_path in html_files:
        print(f"处理文件: {file_path}")
        
        # 读取文件内容
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 添加侧边栏CSS
        if '../css/sidebar.css' not in content:
            content = content.replace(
                '<link rel="stylesheet" href="../css/lesson.css">',
                '<link rel="stylesheet" href="../css/lesson.css">\n    <link rel="stylesheet" href="../css/sidebar.css">'
            )
        
        # 添加侧边栏JavaScript
        if '../js/sidebar-nav.js' not in content:
            content = content.replace(
                '<script src="../js/lesson.js"></script>',
                '<script src="../js/lesson.js"></script>\n    <script src="../js/sidebar-nav.js"></script>'
            )
        
        # 写回文件
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"已更新: {file_path}")

# 更新所有章节的HTML文件
chapters = ['01-html', '02-css', '03-javascript', '04-typescript']
for chapter in chapters:
    update_html_files(chapter)

print("所有文件更新完成！")