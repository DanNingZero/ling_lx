import React from 'react';
import './menu.less';
import url from 'asha/libs/url.js'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Menu';
        this.state = {
            menu:false
        }
    }
    render() {
        return <div className={this.state.menu?"inu-menu show":"inu-menu"}>
        {
            // <div className={"icon "+this.props.weizhi} onClick={()=>{this.setState({menu:!this.state.menu})}}>
        }
            <div className={(this.state.menu?(this.props.weizhi?"icon i_icon on":"icon h_icon on"):(this.props.weizhi?"icon i_icon":"icon h_icon"))} onClick={()=>{this.setState({menu:!this.state.menu})}}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
            <div className="menu">
                <div className="icon" onClick={()=>{this.setState({menu:!this.state.menu})}}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
                <nav className="list">
                    <div onClick={()=>{url().go({pathname:"/advantage"})}}>我们的优势</div>
                    <div onClick={()=>{url().go({pathname:"/business"})}}>我们的业务</div>
                    <div onClick={()=>{url().go({pathname:"/case"})}}>案例展示</div>
                    <div onClick={()=>{url().go({pathname:"/team"})}}>我们的团队</div>
                    <div onClick={()=>{url().go({pathname:"/index"})}}>视图</div>
                </nav>
            </div>
        </div>
    }
}


export default Menu
