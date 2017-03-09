import React from 'react';
import url from 'asha/libs/url.js'
import {Link} from 'react-router'
import './menu.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
            data:(props.menu&&props.menu.childRoutes)||[]
        }
    }
    render() {
        return <div className="inu-menu">{
            this.state.data.map((item,i)=>{
                return <Link key={i} to={item.path} className="item" activeClassName="active">{item.title||item.path}</Link>
            })
        }</div>
    }
}

export default App
