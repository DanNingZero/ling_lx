import React from 'react';
import './lx_zdftongxun.less';


//子组件与父组件之间的通讯
class Lx_zdftongxun extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_zdftongxun';
        this.state = {
            msg:"start"
        }
    }
    transferMsg(msg){
        this.setState = {
            msg
        }
    }

    //第二种写法
    // transferMsg(msg){
    //     this.setState({
    //         msg
    //     })
    // }
    render() {
        return <div className="inu-lx_zdftongxun">
            <p>child msg: {this.state.msg}</p>      
            <Child_1 transferMsg = {msg => this.transferMsg(msg)} />   
            {
                //父组件将作用域为自身的 transferMsg 函数传递给子组件
            }
        </div>
    }
}

class Child_1 extends React.Component{
    componentDidMount(){
        setTimeout(()=>{
            this.props.transferMsg('end')          //调用父组件传递的 transferMsg 函数，同时将子组件要传递的信息，作为参数，传递到父组件的作用域
        },1000);

    }
    render(){
        return <div>
            <p>child_1 component</p>
        </div>
    }
}

//客户端显示
{
    // child msg: start
    // child_1 component 
}
//报错
{
    //transferMsg is not defined    *没有加 this.   必需要加 this. 获取当前作用域下定义的 transferMsg 函数
}
//()=>{}  箭头函数，将父组件的 transferMsy 函数通过 props 传递给子组件，得益于箭头函数，保证子组件在调用 trandferMsy 函数时，其内部的 this 仍指向父组件



export default Lx_zdftongxun
