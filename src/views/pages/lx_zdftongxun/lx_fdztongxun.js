import React from 'react';
import './lx_zdftongxun.less';


//父组件与子组件之间的通讯   *通讯是单向的，数据必须是由一方传到另一方。
class Lx_fdztongxun extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_fdztongxun';
        this.state = {
            msg:"this is start",
            msg2:"this is start2"
        }
    }
    render() {
        return <div className="inu-lx_fdztongxun">
            <Child_1 msg={this.state.msg} msg2={this.state.msg2} />
        </div>
    }
}
// class Child_1 extends React.Component{
//     render(){
//         return <p>{this.props.msg}</p>
//     }
// }
//父组件可以向子组件通过传 props 的方式，向子组件进行通讯  

class Child_1 extends React.Component{
    render(){
        return <div>
            <p>{this.props.msg}</p>
            <Child_1_1 {...this.props}/>
            {
                // <Child_1_1 msg2={this.props.msg2}/>
            }
            
        </div>

    }
} 
class Child_1_1 extends React.Component{
    render(){
        return <p>{this.props.msg2}</p>
    }
}
//如果父组件子组件之间不止一个层级，如 Child_1_1 与 Lx_fdztongxun 这样的关系，可以通过 ... 运算符（Object 剩余和展开属性），将父组件的信息传递给更深层级的子组件
//通过 babel 转义后的 ... 运算符 性能和原生的一致   例：<Child_1_1 msg2={this.props.msg2}/>
//对于层级比较深的 子组件与父组件之间 的通讯，仍可使用 ... 运算符，将 父组件的调用函数 传递给 子组件
export default Lx_fdztongxun
