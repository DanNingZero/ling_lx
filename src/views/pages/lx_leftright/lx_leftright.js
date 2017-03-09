import React from 'react';
import './lx_leftright.less';
import Scroll from '../../../component/scroll/scroll.js'
import img1_2 from '../../../imges/1_2.png'
import img1_3 from '../../../imges/1_3.png'

class Leftright extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Leftright';
        this.state = {}
    }
    render() {
        return <div className="inu-lx_leftright">
            <Case1/>
        </div>
    }
}

class Case1 extends React.Component {
    constructor(props){
        super(props);
        this.displayName = 'Case1';
        this.state = {}
    }
    render(){
        return <div className="box"> 
            <div className="code code-left">
                <pre>
                    <code className="hljs">
                        meme
                    </code>
                </pre>
            </div>
            <div className="code code-right">
                <pre>
                    <code className="hljs">
                        meme
                    </code>
                </pre>
            </div>
        </div>
    }
}


class Case2 extends React.Component {
    constructor(props){
        super(props);
        this.displayName = 'Case2';
        this.state = {
            list:[
                {
                    pic:img1_2,
                    text:"泰德仁和科技有限责任公司致力于为现代企业提供专业的互联网项目技术服务。基于精准、优质、定制化的原则，为用户提供满足针对性需求的网络技术服务和产品。"
                },
                {
                    pic:img1_3,
                    text:"泰德仁和围绕用户需求为核心，以专业技术为依托，为用户带来专业的技术项目咨询和稳定的数据信息和技术管理，为现代企业打造一体化的互联网科技支持。"
                }
            ]
        }
    }
    render(){
        return <div className="content">
            {
                this.state.list.map((item,i)=>{
                    return<section className="row" key={i}>
                        <Scroll top={window.innerHeight} fixClass="active">
                            <div className="c_r_img">
                                <span><img src={item.pic} alt="" width="540" height="750" /></span>
                            </div>
                        </Scroll> 
                        <Scroll top={window.innerHeight} fixClass="active">
                            <div className="c_r_text">
                                <article>{item.text}</article>
                            </div>
                        </Scroll>
                    </section>
                })
            }
        </div>
    }
}

export default Leftright
