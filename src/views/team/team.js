import React from 'react';
import './team.less';
import Header from '../../component/header/header.js'
import Menu from '../../component/menu/menu.js'
import list from '../../libs/member.js'

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Team';
        this.state = {}
    }
    render() {
        return <div className="inu-team">
            <Menu/>
            <Header data = {'我们的团队'}/>
            <div className="content">
                <section className="c_text">泰德仁和是一家年轻的科技创业公司，以为企业提供互联网技术产品和服务为核心业务。我们的团队成员全部来自985,211高校对口专业，为用户提供有价值的技术产品是我们共同的愿景。</section>
                <Cteam />
            </div>
        </div>
    }
}

class Cteam extends React.Component {
    constructor(props) {
        super(props)
        this.displayName = 'Team';
        this.state = {}
    }
    render() {
        return <section>
            {
                list.map((item,i)=>{
                    return <div className="c_team" key={i}>
                        <img src={item.src} alt="" className="img"/>
                        <a href={item.href+i} target="_blank"><div className="code"><aside>{item.name}</aside><aside>{item.position}</aside></div></a>
                    </div>
                })
            }
        </section>
    }
}

export default Team
