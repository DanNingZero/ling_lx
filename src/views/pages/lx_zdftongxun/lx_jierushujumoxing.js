import React from 'react';
import './lx_zdftongxun.less';

//接入数据模型

var data = [
    {
        author:"Peat Hunt",
        text:"This is one comment"
    },
    {
        author:"Jordan Walke",
        text:"This is *another* comment"
    }
]
class Lx_jierushujumoxing extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_jierushujumoxing';
        this.state = {}
    }
    render() {
        return <div className="inu-lx_jierushujumoxing">
            <h1>Comments</h1>
            <CommentList />
            {
                // <CommentList data = {this.props.data}/>
            }
        </div>
    }
}

class CommentList extends React.Component {
    render(){
        return <div className="commentList">
            {
                data.map((item,i)=>{
                    return <div author={item.author} key={i}>{item.text}</div>
                })
            }
        </div>
    }
}
class Comment extends React.Component {
    render(){
        return <div className="comment">
            me
        </div>
    }
}

//未完成   有些小问题
//
//
//this.setState({data: data}).bind(this)    动态更新
//props 是一种父级向子级传递数据的方式
//state 仅用于实现交互功能，也就是说，数据随着时间变化

export default Lx_jierushujumoxing
