import React from 'react';
import './lx_list.less'




//老师数据
// var Teacher_Data = [
//     {name:"Lisa",intro:"简介：语文老师，全国优秀教师，四川省特级教师",class:"通视教育",pn:"365"},
//     {name:"李老师",intro:"简介：语文老师，全国优秀教师，四川省特级教师",class:"金晟教育",pn:"333"},
//     {name:"万老师",intro:"简介：数学文老师，全国优秀教师，四川省特级教师",class:"通视教育",pn:"23"},
//     {name:"钟老师",intro:"简介：语文老师，全国优秀教师，北京特级教师",class:"通视教育",pn:"105"},
//     {name:"谢老师",intro:"简介：物理老师，全国优秀教师，四川省特级教师",class:"通视教育",pn:"325"},
// ]

//onre
// class lx_list extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return <div>
//             <Lx_list data={Teacher_Data} />
//         </div>
//     }
// }

// class Lx_list extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         return <div className="list">
//             <h2 className="l_title">名师堂</h2>
//             <div className="l_listcon">
//                 {   
//                     this.props.data.map(function(element,id){
//                         return  <Llistcon source={element} key={id}/>   //数组内容  and  key
//                     })
//                 }
//             </div>
//         </div> 
//     }
// }

// class Llistcon extends React.Component {
//     constructor(props) {
//         super(props);
//     }
//     render() {
//         var source=this.props.source;
//         return <div className="llistcon">
//             <a href="javascript:;">
//                 <span className="l_tu"></span>
//                 <div className="l_conten">
//                     <p className="l_name">{source.name}</p>
//                     <p className="l_jianjie">{source.intro}</p>
//                     <p className="l_bottom"><em className="number">{source.pn}</em><em>{source.class}</em></p>
//                 </div>
//             </a>   
//         </div>
//     }
// }


//two
class lx_list extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
            Teacher_Data:[
                {name:"Lisa",intro:"简介：语文老师，全国优秀教师，四川省特级教师",class:"通视教育",pn:"365"},
                {name:"李老师",intro:"简介：语文老师，全国优秀教师，四川省特级教师",class:"金晟教育",pn:"333"},
                {name:"万老师",intro:"简介：数学文老师，全国优秀教师，四川省特级教师",class:"通视教育",pn:"23"},
                {name:"钟老师",intro:"简介：语文老师，全国优秀教师，北京特级教师",class:"通视教育",pn:"105"},
                {name:"谢老师",intro:"简介：物理老师，全国优秀教师，四川省特级教师",class:"通视教育",pn:"325"},
            ]
        }
    }
    render() {
        return <div>
            <div className="list">
                <h2 className="l_title">名师堂</h2>
                <div className="l_listcon">
                {
                    this.state.Teacher_Data.map((item,i)=>{
                        return <div className="llistcon" key={i}>
                            <a href="javascript:;">
                                <span className="l_tu"></span>
                                <div className="l_conten">
                                    <p className="l_name">{item.name}</p>
                                    <p className="l_jianjie">{item.intro}</p>
                                    <p className="l_bottom"><em className="number">{item.pn}</em><em>{item.class}</em></p>
                                </div>
                            </a>   
                        </div>
                    })
                }
                </div>
            </div>
        </div>
    }
}









/*class Index extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <FamousTeacher data={Teacher_Data}/>
        </div>
    }
}*/

/*class FamousTeacher extends React.Component{
    render() {
        return <div className="famous-teacher">
            <div className="ft-title"><a href="#/famous-teacher">名师堂</a></div>
            <div className="ft-more"><a href="#/famous-teacher">&gt;&gt;</a></div>
            <div className="ft-list">
                {   
                    this.props.data.map(function(element,id){
                        return  <FTCard source={element} key={id}/>
                    })
                }
            </div>
        </div>
    }
}*/

/*class FTCard extends React.Component {
    render() {
        var source=this.props.source;
        return <div className="ft-card">
            <div className="ft-c-img">
                <a href="#/teacher/hp" target="_blank"><img src={source.pic} /></a>
            </div>
            <div className="ft-c-bottom">
                <div className="ft-c-name"><a href="#/teacher/hp" target="_blank">{source.name}</a></div>
                <div className="ft-c-intro">{source.intro}</div>
                <div className="ft-c-source">
                    <div className="ft-c-s-left"><a href="#/excellent-school/training-school" target="_blank">{source.class}</a></div>
                    <div className="ft-c-s-right">{source.pn}</div>
                </div>
            </div>
        </div>
    }
}*/


export default lx_list