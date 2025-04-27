export default function JSX(props) {
    const { $w, style, contentSlot1 } = props;
    const { useState } = React;
    const [count, setCount] = useState(0);
    
    function addCount() {
        setCount(count + 1);
    }

    return (
        <div style={props.style}>
            语法说明：<br />
            1.  使用平台变量<a href="https://docs.cloudbase.net/lowcode/api/api-referrence">API文档</a>
            <p>Hello, 我是{$w.auth.currentUser.name}
                <button
                    onClick={() => { $w.utils.showToast({ title: "操作成功" }) }}
                    style={{ margin: "5px" }}
                >点击平台Toast方法</button>
            </p>

            2.  插槽
            <p> 插槽是一个空的占位，以便拖入其他组件。</p>
            <p> 使用插槽时，首先在【高级属性】中添加插槽声明，然后通过
                <span style={{ color: "red" }}>props.插槽ID</span>将插槽放入指定位置如：
                {props.contentSlot1}
            </p>
            点击右侧组件文档，可查看更多使用说明
        </div>
    );
}
