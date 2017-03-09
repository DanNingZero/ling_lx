import React from 'react';
import './business.less';
import Header from '../../component/header/header.js'
import Menu from '../../component/menu/menu.js'


//图片
import img2_1 from '../../imges/2_1.png'
import img2_2 from '../../imges/2_2.png'
import img2_3 from '../../imges/2_3.png'
import img2_4 from '../../imges/2_4.png'


class Business extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Business';
        this.state = {}
    }
    render() {
        return <div className="inu-business">
            <Menu/>
            <Header data={'我们的业务'}/>
            <Clist/>
        </div>
    }
}

var list = [
    {
        pic:img2_1,
        title:"微信平台开发",
        text:"微信平台开发是我们核心业务的重中之重，微信时代的今天，为用户打造个性化和竞争力的微信平台是我们的业务使命。为此，我们推出了包括微官网、微场景、微政务、微商城、全景720和小游戏等在内的技术项目，为用户带来立体的微信技术服务生态；为用户提供品牌文化和企业资讯输出、产品营销和CRM服务接入、电子商务流量累积等服务，打造企业电子化商务服务和管理技术网络。"
    },
    {
        pic:img2_2,
        title:"三大类网站开发",
        text:"网站作为企业形象展示和自动化管理的结合体，是泰德仁和不断深化优化的技术领域，我们开展了包括基本信息型、电子商务型和多媒体广告型三大类型网站业务，为现代企业提供包括品牌形象设计、电子商务应用、业务自动化管理等服务。让企业通过一体化的网站，实现企业形象提升、规模化交易效率提升、内部信息沟通和业务管理规范化的目的，优化企业工作流程，提升企业运营效率。"
    },
    {
        pic:img2_3,
        title:"移动客户端开发",
        text:"移动客户端是拥有大流量用户的现代企业必由之选，也将是继微信后下一个电子商务主阵地；同时也是我们“定制化、专业性、创新性”的集中表现。泰德仁和拥有专业的产品经理，对于移动客户端的流程逻辑设计、用户需求实现和整体功能优化具有挑剔的标准和丰富的经验，只为您打造最极致的专属移动客户端。"
    },
    {
        pic:img2_4,
        title:"高新技术研发",
        text:"泰德仁和在提供技术产品的同时，也为企业提供前端科技研发服务。作为企业的技术顾问和支持，我们坚持在项目中技术创新，突破重点难点技术壁垒，实现新型技术的研发。我们的技术研发涵盖网站、微信服务号、移动客户端多个平台，尤其长于电子商务的多种实现形式和技术创新。"
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
                        <div className="c_r_img">
                            <span><img src={item.pic} alt="" width="540" height="750" /></span>
                        </div>
                        <div className="c_r_text">
                            <h2>{item.title}</h2>
                            <article>{item.text}</article>
                        </div>
                    </section>
                })
            }
        </div>
    }
}

export default Business
