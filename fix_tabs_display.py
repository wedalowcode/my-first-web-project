import os
import re
from pathlib import Path

def fix_tabs_in_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # 检查文件是否已经包含正确的showPanel函数
    if 'function showPanel(panelId)' in content:
        # 替换showPanel函数
        pattern = r'function showPanel\(panelId\) \{.*?\}'
        replacement = '''function showPanel(panelId) {
        // 隐藏所有面板
        var panels = document.querySelectorAll('.panel');
        panels.forEach(function(panel) {
            panel.style.display = 'none';
        });
        
        // 移除所有选项卡的活动状态
        var tabs = document.querySelectorAll('.tab');
        tabs.forEach(function(tab) {
            tab.classList.remove('active');
        });
        
        // 显示选中的面板
        document.getElementById(panelId).style.display = 'block';
        
        // 激活对应的选项卡
        document.querySelector('button[onclick="showPanel(\\'' + panelId + '\\')"]').classList.add('active');
    }'''
        
        # 使用re.DOTALL标志使.匹配包括换行符在内的所有字符
        new_content = re.sub(pattern, replacement, content, flags=re.DOTALL)
        
        # 如果内容有变化，写回文件
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as file:
                file.write(new_content)
            print(f'已修复: {file_path}')
            return True
    
    return False

def main():
    # 获取项目根目录
    root_dir = Path(__file__).parent
    
    # 要处理的目录
    directories = [
        root_dir / '01-html',
        root_dir / '02-css',
        root_dir / '03-javascript',
        root_dir / '04-typescript'
    ]
    
    fixed_count = 0
    
    # 遍历所有目录
    for directory in directories:
        if directory.exists():
            for file_path in directory.glob('*.html'):
                if fix_tabs_in_file(file_path):
                    fixed_count += 1
    
    print(f'共修复 {fixed_count} 个文件')

if __name__ == '__main__':
    main()