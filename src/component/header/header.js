import React from 'react';
import './header.less';


//图片
import logo_2 from '../../imges/logo_2.png'
import icon_2 from '../../imges/icon_2.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Header';
        this.state = {
            title:'我们的优势'
        }
    }
    render() {
        return <header className="header">
            <div className="h_logo"><a href="#"><img src={logo_2} alt="" className="logo"/></a></div>
            <div className="h_text">{this.props.data||this.state.title}</div>
            {
                // <div className="h_icon"><a href="#"><img src={icon_2} alt="" className="icon"/></a></div>
            }
            
        </header>
    }
}
export default Header
