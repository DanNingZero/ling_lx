import React from 'react';
import './lx_zdftongxun.less';


//兄弟组件之间的通讯
class Lx_xdtongxun extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_xdtongxun';
        this.state = {
            msg:"start"
        }
    }
    transferMsg(msg){
        this.setState({
            msg
        })
    }

    //第二种写法   *函数一定不能忘记 写参数？正常 ：msg is not defined
    // transferMsg(msg){
    //     this.setState = {
    //         msg
    //     }
    // }
    
    componentDidUpdate(){
        console.log('Parent update')
    }
    render() {
        return <div className="inu-lx_xdtongxun">
            <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
            {
                //父组件将作用域为自身的 transferMsg 函数传递给子组件
            }

            <Child_2 msg={this.state.msg}/>
        </div>
    }
}

class Child_1 extends React.Component{
    componentDidMount() {
        setTimeout(() => {
          this.props.transferMsg('end')        //调用父组件传递的 transferMsg 函数，同时将子组件要传递的信息通过参数 传递给父组件
        }, 1000);
    }
    componentDidUpdate(){
        console.log('Child_1 update')
    }
    render(){
        return <div>
            <p>child_1 component</p>
        </div>
    }
}
class Child_2 extends React.Component{
    componentDidUpdate(){
        console.log('Child_2 update')
    }
    render(){
        return <div>
            <p>child_2 component : {this.props.msg}</p>
            <Child_2_1 />
        </div>
    }
}
class Child_2_1 extends React.Component{
    componentDidUpdate(){
        console.log('Child_2_1 update')
    }
    render(){
        return <div>
            <p>child_2_1 component</p>
        </div>
    }
}

//对于没有直接关系的两年节点，就如 Child_1 与 Child_2 之间的关系，唯一的共同点就是拥有相同的父组件
//Child_1 向 Child_2 之间的通讯，可以先通过 Child_1 向 Parent 组件进行通讯，再由 Parent 组件 向 Child_2 组件进行通讯
// *由于 Parent 的 state 发生变化，会触发 Parent 及从属于 Parent 的子组件的生命周期，所以我们在控制台中可以看到，在各个组件中的 componentDidUpdate 方法均被触发。

//就近作用域查找 ？？
export default Lx_xdtongxun
