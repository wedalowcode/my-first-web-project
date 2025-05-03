/**
 * 选项卡功能
 */
document.addEventListener('DOMContentLoaded', function() {
    console.log('tabs.js 已加载');
    
    // 获取所有选项卡和面板
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel');
    
    console.log('找到选项卡:', tabs.length);
    console.log('找到面板:', panels.length);
    
    // 为每个选项卡添加点击事件
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            console.log('点击选项卡:', targetId);
            
            // 隐藏所有面板
            panels.forEach(panel => {
                panel.style.display = 'none';
            });
            
            // 移除所有选项卡的活动状态
            tabs.forEach(t => {
                t.classList.remove('active');
            });
            
            // 显示目标面板并激活当前选项卡
            const targetPanel = document.getElementById(targetId);
            if (targetPanel) {
                targetPanel.style.display = 'block';
                this.classList.add('active');
                console.log('显示面板:', targetId);
            } else {
                console.error('未找到面板:', targetId);
            }
        });
    });
    
    // 默认显示第一个选项卡
    if (tabs.length > 0 && panels.length > 0) {
        tabs[0].classList.add('active');
        const firstPanelId = tabs[0].getAttribute('data-target');
        const firstPanel = document.getElementById(firstPanelId);
        
        // 隐藏所有面板
        panels.forEach(panel => {
            panel.style.display = 'none';
        });
        
        // 显示第一个面板
        if (firstPanel) {
            firstPanel.style.display = 'block';
            console.log('默认显示面板:', firstPanelId);
        }
    }
});