import React from 'react';
import './case.less';
import Header from '../../component/header/header.js'
import Menu from '../../component/menu/menu.js'

//图片
import img2_5 from '../../imges/2_5.png'
import img2_6 from '../../imges/2_6.png'
import img2_7 from '../../imges/2_7.png'
import img2_8 from '../../imges/2_8.png'
import img1_6 from '../../imges/1_6.png'


class Case extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Case';
        this.state = {}
    }
    render() {
        return <div className="inu-case">
            <Menu/>
            <Header data={'案例展示'}/>
            <Clist />
        </div>
    }
}

var list = [
    {pic:img2_5,alt:"Ethos",href:"javascript:;"},
    {pic:img2_6,alt:"师说365",href:"http://www.say365.com",title:"师说365"},
    {pic:img2_7,alt:"智联社",href:"",title:"智联社"},
    {pic:img2_8,alt:"现代财经",href:"javascript:;"}
]
class Clist extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = "Clist";
        this.state = {}
    }
    render(){
        return <div className="content">
            {
                list.map((item,i)=>{
                    return <section className="c_case" key={i}>
                        <img src={item.pic} alt={item.alt} className="img"/>
                        {
                            // <a href={item.href}><div className="code"></div><div className="title">{item.title}</div></a>
                        }
                        
                        {
                            item.href=="javascript:;"?(item.alt=="Ethos"?<a href={item.href}><div className="code code1"></div></a>:<a href={item.href}><div className="code code2"></div></a>) : <a href={item.href} target="_blank"><div className="title">{item.title}</div></a>
                        }
                    </section>
                })
            }
        </div>
    }
}

export default Case
