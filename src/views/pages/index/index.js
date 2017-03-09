import React from 'react';
import './index.less';
import url from 'asha/libs/url.js'
import Header from '../../../component/header/header.js'
import Menu from '../../../component/menu/menu.js'

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Index';
        this.state = {}
    }
    render() {
        return <div className="inu-index">
            <Menu/>
            <Header/>
            <div className="xl">
                <h1>LX</h1>
                <span onClick={()=>{url().go({pathname:"/lx_answer"})}}>answer</span>
                <span onClick={()=>{url().go({pathname:"/lx_answer2"})}}>answer2</span>
                <span onClick={()=>{url().go({pathname:"/lx_index"})}}>index</span>
                <span onClick={()=>{url().go({pathname:"/lx_xuanze"})}}>xuanze</span>
                <span onClick={()=>{url().go({pathname:"/lx_props"})}}>props</span>
                <span onClick={()=>{url().go({pathname:"/lx_zdftongxun"})}}>子组件和父组件之间的通讯</span>
                <span onClick={()=>{url().go({pathname:"/lx_zdftongxun/lx_fdztongxun"})}}>父组件和子组件之间的通讯</span>
                <span onClick={()=>{url().go({pathname:"/lx_zdftongxun/lx_xdtongxun"})}}>兄弟之间的通讯</span>
                <span onClick={()=>{url().go({pathname:"/lx_zdftongxun/lx_jierushujumoxing"})}}>接入数据模型</span>
                <span onClick={()=>{url().go({pathname:"/lx_zdftongxun/lx_about"})}}>关于</span>
                <span onClick={()=>{url().go({pathname:"/lx_img"})}}>图片</span>
                <span onClick={()=>{url().go({pathname:"/lx_leftright"})}}>左右</span>
                <span onClick={()=>{url().go({pathname:"/lx_transform"})}}>旋转</span>
                <span onClick={()=>{url().go({pathname:"/lx_animation"})}}>动画</span>
                <span onClick={()=>{url().go({pathname:"/lx_javascript"})}}>js</span>

            </div>
        </div>
    }
}

export default Index
