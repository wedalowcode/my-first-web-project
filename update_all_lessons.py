#!/usr/bin/env python3
import os
import glob
import subprocess

def update_all_lessons():
    """更新所有课程页面"""
    # 章节目录
    chapters = ['01-html', '02-css', '03-javascript', '04-typescript']
    
    for chapter in chapters:
        # 检查章节目录是否存在
        if not os.path.exists(chapter):
            print(f"跳过不存在的章节: {chapter}")
            continue
        
        # 获取章节中的所有HTML文件
        html_files = glob.glob(f"{chapter}/*.html")
        
        for html_file in html_files:
            # 使用update_html_lesson.py更新课程页面
            cmd = ['python', 'update_html_lesson.py', html_file]
            try:
                subprocess.run(cmd, check=True)
            except subprocess.CalledProcessError as e:
                print(f"更新 {html_file} 时出错: {e}")

if __name__ == "__main__":
    update_all_lessons()
    print("所有课程页面更新完成！")