#!/usr/bin/env python3
"""
修复所有课程页面的选项卡功能
"""
import os
import re
from pathlib import Path

def fix_tabs_in_file(file_path):
    """修复单个文件中的选项卡功能"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 检查是否已经修复
    if 'id="result-panel"' in content and 'id="code-panel"' in content and 'id="explanation-panel"' in content:
        print(f"文件已修复: {file_path}")
        return
    
    # 修复选项卡内容
    content = content.replace('<div class="panel active">', '<div id="result-panel" class="panel active">', 1)
    content = content.replace('<div class="panel">', '<div id="code-panel" class="panel">', 1)
    content = content.replace('<div class="panel">', '<div id="explanation-panel" class="panel">', 1)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"已修复: {file_path}")

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
    
    # 修复每个文件
    for file_path in html_files:
        fix_tabs_in_file(file_path)
    
    print(f"共修复 {len(html_files)} 个文件")

if __name__ == "__main__":
    main()