import os
import time
import subprocess
from PIL import Image
from io import BytesIO

def take_screenshot_with_chromium(url, output_path, width=1366, height=768, wait_time=2):
    """
    使用Chromium浏览器的命令行工具截取网页截图
    
    参数:
    url (str): 要截图的网页URL
    output_path (str): 截图保存路径
    width (int): 浏览器窗口宽度
    height (int): 浏览器窗口高度
    wait_time (int): 等待页面加载的时间(秒)
    """
    # 确保输出目录存在
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    
    # 启动HTTP服务器
    server_process = subprocess.Popen(
        ["python", "-m", "http.server", "12000", "--bind", "0.0.0.0"],
        cwd="/workspace/my-first-web-project",
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    
    # 等待服务器启动
    time.sleep(2)
    
    try:
        # 使用Chromium截图
        cmd = [
            "chromium", 
            "--headless", 
            "--disable-gpu",
            "--no-sandbox",
            "--disable-dev-shm-usage",
            f"--window-size={width},{height}",
            "--screenshot=" + output_path,
            url
        ]
        
        # 执行命令
        result = subprocess.run(cmd, capture_output=True, text=True)
        
        if result.returncode == 0:
            print(f"截图已保存到: {output_path}")
        else:
            print(f"截图失败: {result.stderr}")
            
        # 等待一下确保截图完成
        time.sleep(wait_time)
        
    finally:
        # 关闭HTTP服务器
        server_process.terminate()
        server_process.wait()

def create_html_preview(screenshots, output_path):
    """
    创建一个HTML文件，显示所有截图
    
    参数:
    screenshots (list): 截图文件路径列表
    output_path (str): HTML文件保存路径
    """
    html_content = """
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>网站预览</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }
            h1 {
                color: #2c3e50;
                text-align: center;
                margin-bottom: 30px;
            }
            .screenshot {
                margin-bottom: 40px;
                border: 1px solid #ddd;
                border-radius: 5px;
                overflow: hidden;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            .screenshot h2 {
                background-color: #f8f9fa;
                padding: 15px;
                margin: 0;
                border-bottom: 1px solid #ddd;
                color: #2c3e50;
            }
            .screenshot img {
                max-width: 100%;
                display: block;
            }
        </style>
    </head>
    <body>
        <h1>JavaScript全栈学习网站预览</h1>
    """
    
    # 添加每个截图
    for i, screenshot in enumerate(screenshots):
        title = "首页" if i == 0 else f"课程页面 {i}"
        html_content += f"""
        <div class="screenshot">
            <h2>{title}</h2>
            <img src="{os.path.basename(screenshot)}" alt="{title}">
        </div>
        """
    
    html_content += """
    </body>
    </html>
    """
    
    # 写入HTML文件
    with open(output_path, 'w') as f:
        f.write(html_content)
    
    print(f"预览HTML已保存到: {output_path}")

if __name__ == "__main__":
    # 确保输出目录存在
    os.makedirs("screenshots", exist_ok=True)
    
    # 截图文件路径
    homepage_screenshot = "screenshots/homepage.png"
    html_lesson_screenshot = "screenshots/html_lesson.png"
    js_lesson_screenshot = "screenshots/js_lesson.png"
    
    # 截取首页截图
    take_screenshot_with_chromium("http://localhost:12000", homepage_screenshot)
    
    # 截取HTML课程页面截图
    take_screenshot_with_chromium("http://localhost:12000/01-html/01.html", html_lesson_screenshot)
    
    # 截取JavaScript课程页面截图
    take_screenshot_with_chromium("http://localhost:12000/03-javascript/01.html", js_lesson_screenshot)
    
    # 创建HTML预览
    create_html_preview(
        [homepage_screenshot, html_lesson_screenshot, js_lesson_screenshot],
        "screenshots/preview.html"
    )