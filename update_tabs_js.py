#!/usr/bin/env python3
"""
更新所有课程页面，添加tabs.js文件
"""
import os
import re
from pathlib import Path

def update_file(file_path):
    """更新单个文件，添加tabs.js引用"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否已经添加了tabs.js
    if '../js/tabs.js' in content:
        print(f"文件已更新: {file_path}")
        return
    
    # 添加tabs.js引用
    pattern = r'(<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js"></script>)\s+(<script src="../js/lesson.js"></script>)'
    replacement = r'\1\n    <script src="../js/tabs.js"></script>\n    \2'
    
    new_content = re.sub(pattern, replacement, content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    print(f"已更新: {file_path}")

def main():
    """主函数"""
    # 获取项目根目录
    root_dir = Path(__file__).parent
    
    # 查找所有HTML文件
    html_files = []
    for chapter_dir in ['01-html', '02-css', '03-javascript', '04-typescript']:
        chapter_path = root_dir / chapter_dir
        if chapter_path.exists():
            for file_path in chapter_path.glob('*.html'):
                html_files.append(file_path)
    
    # 更新每个文件
    for file_path in html_files:
        update_file(file_path)
    
    print(f"共更新 {len(html_files)} 个文件")

if __name__ == "__main__":
    main()