export default function CourseTable(props) {
    // 可以从props中获取样式或其他属性
    const { style } = props;
    
    // 表格样式
    const tableStyle = {
        borderCollapse: 'collapse',
    };
    
    const cellStyle = {
        border: '1px solid black',
        padding: '5px'
    };
    
    return (
        <div style={style}>
            <h1>课程表</h1>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th scope="col" style={cellStyle}>时间</th>
                        <th scope="col" style={cellStyle}>星期一</th>
                        <th scope="col" style={cellStyle}>星期二</th>
                        <th scope="col" style={cellStyle}>星期三</th>
                        <th scope="col" style={cellStyle}>星期四</th>
                        <th scope="col" style={cellStyle}>星期五</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" style={cellStyle}>
                            第一节<br />(8:00-9:00)
                        </th>
                        <td style={cellStyle}>数学</td>
                        <td style={cellStyle}>语文</td>
                        <td style={cellStyle}>英语</td>
                        <td style={cellStyle}>物理</td>
                        <td style={cellStyle}>化学</td>
                    </tr>
                    <tr>
                        <th scope="row" style={cellStyle}>
                            第二节<br />(9:10-10:10)
                        </th>
                        <td style={cellStyle}>语文</td>
                        <td style={cellStyle}>数学</td>
                        <td style={cellStyle}>物理</td>
                        <td style={cellStyle}>英语</td>
                        <td style={cellStyle}>生物</td>
                    </tr>
                    <tr>
                        <td colSpan={6} style={cellStyle}>午休 (12:00-14:00)</td>
                    </tr>
                    <tr>
                        <th scope="row" style={cellStyle}>
                            第三节<br />(14:00-15:00)
                        </th>
                        <td style={cellStyle}>英语</td>
                        <td rowSpan={2} style={cellStyle}>体育</td>
                        <td style={cellStyle}>数学</td>
                        <td style={cellStyle}>语文</td>
                        <td style={cellStyle}>历史</td>
                    </tr>
                    <tr>
                        <th scope="row" style={cellStyle}>
                            第四节<br />(15:10-16:10)
                        </th>
                        <td style={cellStyle}>物理</td>
                        {/* 这里不需要体育的单元格，因为上面已经使用了rowSpan={2} */}
                        <td style={cellStyle}>化学</td>
                        <td style={cellStyle}>生物</td>
                        <td style={cellStyle}>地理</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
