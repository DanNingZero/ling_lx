import React from 'react';
import './table.less';
// head数组元素为object或string
// [
//     {
//         title:"全选",
//         renderItem:(row)=>{
//             return <input type="checkbox"/>
//         }
//     },"编号","姓名","用户名","密码",
//     {
//         title:"类型",
//         convert:(item,row)=>{
//             return "Teacher"==item?"老师":"学生"
//         }
//     },
//     {
//         title:"操作",
//         renderItem:(row)=>{
//             return "编辑"
//         },
//         onClick:(item,row)=>{
//             console.log(row)
//         }
//     }
// ]
class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
            head:this.props.head,
            body:this.props.body
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.head)this.state.head = nextProps.head
        if(nextProps.body){
            this.state.body = nextProps.body
        }
    }
    render() {
        return <div className={"inu-table "+(this.props.className||"")}>
            <table>
                <thead>{this.renderHead()}</thead>
                <tbody>{this.renderBody()}</tbody> 
            </table>
        </div>
    }
    renderHead(){
        var head = this.state.head
        if(head instanceof Array)return <tr>{
            head.map((item,i)=>{
                return <th key={i}>{typeof item=="string"?item:item&&item.title}</th>
            })
        }</tr>
    }
    renderBody(){
        var k = this.props.primary
        var body = this.state.body
        if(body instanceof Array)return body.map((row,i)=>{
            return <tr key={k?row[k]||i:i}>{this.renderTr(row,i)}</tr>
        })
    }
    renderTr(row,line){
        var n = 0
        var head = this.state.head
        if(head instanceof Array)return head.map((column,i)=>{
            var showValue = "",key
            // 渲染数据中不存在的元素
            if(column.renderItem)showValue = column.renderItem(row)
            else {
                // 获取数据原始值
                key = column.key?column.key:n++
                // 如果需要转换则转换
                if(column.convert)showValue = column.convert(row[key],row)
                else showValue = row[key]
            }
            var click = this.props.onClick||column.onClick
            return <td key={i} className={(click?"click":"")+(false?" change":"")} onClick={click?()=>click(row[key],row):null}>{showValue}</td>
        })
        return row.map((item,i)=>{
            return <td key={i}>{typeof item=="object"?item&&item.title:item}</td>
        })
    }
}

export default App
