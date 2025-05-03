/**
 * 课程页面交互脚本
 */
document.addEventListener('DOMContentLoaded', function() {
    // 选项卡切换功能
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');
    
    console.log('找到选项卡:', tabs.length);
    console.log('找到面板:', panels.length);
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            console.log('点击选项卡:', tab.dataset.target);
            
            // 移除所有活动状态
            tabs.forEach(t => t.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));
            
            // 添加当前活动状态
            tab.classList.add('active');
            const panel = document.getElementById(tab.dataset.target);
            console.log('目标面板:', panel);
            if (panel) {
                panel.classList.add('active');
            } else {
                console.error('未找到面板:', tab.dataset.target);
            }
        });
    });
    
    // 代码复制功能
    const copyButtons = document.querySelectorAll('.copy-btn');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.previousElementSibling.querySelector('code');
            const code = codeBlock.textContent;
            
            navigator.clipboard.writeText(code)
                .then(() => {
                    // 更改按钮文本为"已复制"
                    const originalText = button.textContent;
                    button.textContent = '已复制!';
                    
                    // 2秒后恢复原始文本
                    setTimeout(() => {
                        button.textContent = originalText;
                    }, 2000);
                })
                .catch(err => {
                    console.error('复制失败:', err);
                    alert('复制失败，请手动复制代码');
                });
        });
    });
    
    // 代码高亮
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
});