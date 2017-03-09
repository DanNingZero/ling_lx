// 首页
import React from 'react';
import './index.less';
import Menu from '../component/menu/menu.js'
import Scroll from '../component/scroll/scroll.js'

//图片
import imgbg from '../imges/b-g.jpg'
import img1_4 from '../imges/1_4.png'
import icon_1 from '../imges/icon_1.png'
import logo_1 from '../imges/logo_1.png'
import img1_2 from '../imges/1_2.png'
import img1_3 from '../imges/1_3.png'


class Index extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
        }
    }
    render() {
        return <div className="inu-index">
            <div className="row">
                <Menu weizhi="i_icon"></Menu>
                <img src={logo_1} alt="" className="logo"/>
                <div className="r_banner" style={{backgroundImage:"url("+imgbg+")"}}>
                    {
                         // <img src={imgbg} alt="" className="imgbg"/>
                    }
                    <div className="r_img">
                        <img src={img1_4} alt="" className="img"/>
                        <h1 className="title">泰德仁和科技</h1>
                    </div>
                </div>
                {
                    // <img src={icon_1} alt="" className="icon"/>
                }
            </div>
            <Clist/>
        </div>
    }
}


var list = [
    {
        pic:img1_2,
        text:"泰德仁和科技有限责任公司致力于为现代企业提供专业的互联网项目技术服务。基于精准、优质、定制化的原则，为用户提供满足针对性需求的网络技术服务和产品。"
    },
    {
        pic:img1_3,
        text:"泰德仁和围绕用户需求为核心，以专业技术为依托，为用户带来专业的技术项目咨询和稳定的数据信息和技术管理，为现代企业打造一体化的互联网科技支持。"
    }
]
class Clist extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = '';
        this.state = {}
    }
    render() {
        return <div className="content">
            {
                list.map((item,i)=>{
                    return<section className="row" key={i}>
                        <Scroll top={window.innerHeight} fixClass="active"> 
                        {
                            //<Scroll top={window.innerHeight} once fixClass="active"></Scroll> 
                            //once:只执行一次
                            //active:里面写固定的样式
                            //可用于制作向下滚动时变化的导航
                            //<Scroll top={0} fixClass="active"></Scroll>  active:里面就写TOP为0时的导航样式
                        }
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

class Animation extends React.Component {
    constructor(props){
        super(props);
        this.displayName = '';
        this.state = {}
    }
    render(){
        var wintop = window.scrollY;    //卷页Y值(滚动Y值)
        console.log(wintop);
        window.addEventListener("scroll",function(){   
            // console.log(window.scrollY)  
        })     //监听scrollY事件
        return <div>
            <div className="box"> 
                <div className={wintop == 600? "code code-left on ": "code code-left"}>
                    <pre>
                        <code className="hljs">
                            meme
                        </code>
                    </pre>
                </div>
                <div className={wintop == 600? "code code-right on": "code code-right"}>
                    <pre>
                        <code className="hljs">
                            meme
                        </code>
                    </pre>
                </div>
            </div>
        </div>
    }
}
// style={{backgroundImage:"url("+imgbg+")"}} 行为背景图
// 
export default Index
