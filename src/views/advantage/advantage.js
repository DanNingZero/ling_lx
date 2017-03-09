import React from 'react';
import './advantage.less';
import Header from '../../component/header/header.js'
import Menu from '../../component/menu/menu.js'

//图片
import img1_7 from '../../imges/1_7.png'
import img1_8 from '../../imges/1_8.png'
import img1_9 from '../../imges/1_9.png'


class Advantage extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Advantage';
        this.state = {}
    }
    render() {
        return <div className="inu-advantage">
            <Menu/>
            <Header/>
            <Clist/>
        </div>
    }
} 


var data = [
    {
        pic:img1_7,
        title:"定制化",
        text:"“用户至上”是泰德仁和的第一准则，我们始终将用户需求放在首位，真正想你所想。在泰德仁和，我们为每一个用户打造一个订制款产品和服务，突破模板限制，实现特色功能最大化，有针对性、高效率地实现您的项目目标。"
    },
    {
        pic:img1_8,
        title:"专业性",
        text:"“技术过硬”是我们强大战斗力之所在。每一位泰德仁和的技术人员都是来自985高校计算机专业的精英人才，专业出身所以出品更专业。同时，我们的技术人员和设计师经验丰富，既能团队协作，又能独当一面。"
    },
    {
        pic:img1_9,
        title:"创新性",
        text:"创新的网络技术项目和管理离不开创新的技术实现形式，泰德仁和是一家年轻又有创意的科技公司，我们相信想象力，依靠硬实力，为用户提供更多打破传统颠覆规矩、更轻量化易操作的技术灵感和支持，真正做出有价值、有意义的技术产品和服务。"
    }
]
class Clist extends React.Component {
    constructor(props){
        super(props);
        this.displayName = '';
        this.state = {}   
    }
    render(){
        return <div className="content">
                {
                    data.map((item,i)=>{
                        return <section className="c_list" key={i}>
                            <div className="c_l_img">
                                <span><img src={item.pic} width="500" height="500" /></span>
                            </div>
                            <div className="c_l_text">
                                <h2>{item.title}</h2>
                                <article>{item.text}</article>
                            </div>
                        </section>
                    })
                }
        </div>
    }
}

export default Advantage
