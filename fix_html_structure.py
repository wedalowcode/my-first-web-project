#!/usr/bin/env python3
"""
修复所有课程页面的HTML结构
"""
import os
import re
from pathlib import Path

def fix_html_structure(file_path):
    """修复单个文件的HTML结构"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 替换选项卡部分
    tabs_pattern = r'<div class="tabs">\s*<button class="tab active" data-target="result-panel">效果展示</button>\s*<button class="tab" data-target="code-panel">查看代码</button>\s*<button class="tab" data-target="explanation-panel">详细解释</button>\s*</div>'
    tabs_replacement = '''<div class="tabs">
                <button class="tab active" onclick="showPanel('result-panel')">效果展示</button>
                <button class="tab" onclick="showPanel('code-panel')">查看代码</button>
                <button class="tab" onclick="showPanel('explanation-panel')">详细解释</button>
            </div>'''
    
    new_content = re.sub(tabs_pattern, tabs_replacement, content)
    
    # 添加内联JavaScript
    if '</body>' in new_content and '<script>' not in new_content:
        script_code = '''
    <script>
    function showPanel(panelId) {
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
    }
    
    // 初始化显示第一个面板
    document.addEventListener('DOMContentLoaded', function() {
        showPanel('result-panel');
    });
    </script>
</body>'''
        
        new_content = new_content.replace('</body>', script_code)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
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
        fix_html_structure(file_path)
    
    print(f"共修复 {len(html_files)} 个文件")

if __name__ == "__main__":
    main()