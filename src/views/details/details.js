import React from 'react';
import './details.less';
import list from '../../libs/member.js'
import Menu from '../../component/menu/menu.js'
import Header from '../../component/header/header.js'

//图片
import jpg3_1 from '../../imges/3_1.jpg'
// #/details/0
class Details extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Details';
        this.state = {}
    }
    render() {        
        var id = this.props.params.id      //获取当前id参数(数组里面的0，1，2...)
        var current = list[id]            //获取当前id的值[id]
        return <div className="inu-details">
            <Menu/>
            <Header data = {current.name}/>
            <div className="c_details content">
                <div className="c_img"><img src={current.src} alt="" className="img"/></div>
                <div className="c_text">
                    <aside className="name">{current.name}</aside>
                    <aside className="school">{current.school}</aside>
                    <pre className="c_text">{current.introduce}</pre>
                </div>
            </div>
        </div>
    }
}

export default Details
