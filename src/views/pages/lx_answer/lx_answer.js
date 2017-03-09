import React from 'react';
import './lx_answer.less'


//在线答题
class Lx_answer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <div className="xuan_box">
                <div className="xb_list">
                    <label className="xb_l_title">学段： </label>
                    <div className="xb_l_conten">
                        <a href="javascript:;" className="on">高中</a>
                        <a href="javascript:;">初中</a>
                        <a href="javascript:;">小学</a>
                    </div>
                </div>
                <div className="xb_list">
                    <label className="xb_l_title">年级： </label>
                    <div className="xb_l_conten">
                        <a href="javascript:;" className="on">一年级</a>
                        <a href="javascript:;">二年级</a>
                        <a href="javascript:;">三年级</a>
                    </div>
                </div>
            </div>
            <TestpaperBox />
        </div>
    }
}

//切换导航
class TestpaperBox extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return<div className="answer_content">
            <TestPaperTab>
                <div name="全部试卷"><TestPaperList data={data1} /></div>
                <div name="课时检测"><TestPaperList data={data2} /></div>
                <div name="阶段检测"><TestPaperList data={data1} /></div>
                <div name="单元检测"><TestPaperList data={data2} /></div>
                <div name="期中检测"><TestPaperList data={data1} /></div>
                <div name="专题检测"><TestPaperList data={data2} /></div>
                <div name="期末检测"><TestPaperList data={data1} /></div>
                <div name="高考模拟"><TestPaperList data={data2} /></div>
            </TestPaperTab>
        </div>
    }
}
//动态配置tab
class TestPaperTab extends React.Component{
    constructor(props){
        super(props);
        this.state={
            moreng : 0       //默认选中第一个
        }
    }
    check_title_index(index){
        return index===this.state.moreng ? "testpaper_box_a on" : "testpaper_box_a";     //选中样式 否则 没有选中样式 
    }    //Tab切换块方法

    check_item_index(index){
        return index===this.state.moreng ? "oa_Tab_content show" : "oa_Tab_content";     //显示内容 否则 隐藏
    }    //Tab内容区域方法
    render(){
        return<div>
            {/*Tab切换块*/}
            <div className="testpaper_box">
                { React.Children.map(this.props.children,(element,index)=>{
                    return(
                           <div onClick={()=>{this.setState({moreng : index})}} className={this.check_title_index(index)}>{element.props.name}</div>
                           );
                }) }
            </div>
            {/*Tab内容区域*/}
            <div className="oa_Tab_content_wrap">
                { React.Children.map(this.props.children,(element,index)=>{
                    return(
                           <div className={this.check_item_index(index)}>{element}</div>
                           );
                })}
            </div>
        </div>
    }
}


//列表整块内容
class TestPaperList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var ListConShuJu = this.props.data.map(function(min,i){
            return <Tplcbox name={min.name} money={min.money} edition={min.edition} time={min.time}
            rate={min.rate} click={min.click} buy={min.buy} coll={min.coll} key={i} 
            />  //列表内容组件  通过它获取属性值 而不是直接获取
        })
        return <div className="test_paper_list">
            <div className="test_paper_list_num">共82套试卷</div>
            <div className="test_paper_list_con">
                {ListConShuJu}
            </div>
        </div>
    }
}


//切换数据
var data1 = [
    {name:"山西农大附中2014-2015学年七年级上学期第一次月考语文试卷",money:300,edition:"人教版",time:"2016-08-09",rate:5.0,click:69,buy:32,coll:34},
    {name:"四川大学附中2014-2015学年七年级上学期第一次月考语文试卷",money:200,edition:"人教版",time:"2016-08-09",rate:4.5,click:19,buy:22,coll:34},
    {name:"黄冈中学2014-2015学年七年级上学期第一次月考语文试卷",money:400,edition:"人教版",time:"2016-08-09",rate:4.8,click:80,buy:32,coll:94},
    {name:"人大附中2014-2015学年七年级上学期第一次月考语文试卷",money:100,edition:"人教版",time:"2016-08-09",rate:4.5,click:69,buy:2,coll:34},
    {name:"山西农大附中2016-2017学年七年级上学期第一次月考语文试卷",money:300,edition:"苏教版",time:"2016-08-09",rate:4.0,click:49,buy:32,coll:34},
]
var data2 = [
    {name:"人大附中2014-2015学年七年级上学期第一次月考语文试卷",money:100,edition:"人教版",time:"2016-08-09",rate:4.5,click:69,buy:2,coll:34},
    {name:"山西农大附中2016-2017学年七年级上学期第一次月考语文试卷",money:300,edition:"苏教版",time:"2016-08-09",rate:4.0,click:49,buy:32,coll:34},
    {name:"山西农大附中2014-2015学年七年级上学期第一次月考语文试卷",money:300,edition:"人教版",time:"2016-08-09",rate:5.0,click:69,buy:32,coll:34},
    {name:"四川大学附中2014-2015学年七年级上学期第一次月考语文试卷",money:200,edition:"人教版",time:"2016-08-09",rate:4.5,click:19,buy:22,coll:34},
    {name:"黄冈中学2014-2015学年七年级上学期第一次月考语文试卷",money:400,edition:"人教版",time:"2016-08-09",rate:4.8,click:80,buy:32,coll:94},  
]
//列表循环
class Tplcbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="t_p_l_c_box">
            <a href="">
                <div className="box_tu"></div>
                <div className="box_rihgt">
                    <div className="b_left">
                        <h3>{this.props.name}</h3>
                        <p className="b_many"><em>¥</em><em className="b_nmb">{this.props.money}</em></p>
                        <span>教材版本：{this.props.edition}</span> | <span>上传时间：{this.props.time}</span>
                    </div>
                    <div className="b_right">
                        <p className="fengshu"><em className="f_nmb">{this.props.rate}</em><em>分</em></p>
                        <div className="br_conent"><span>点击：<em>{this.props.click}</em></span> | <span>购买：<em>{this.props.buy}</em></span> | <span>收藏：<em>{this.props.coll}</em></span> </div>                              
                    </div>
                </div>
            </a>
        </div>   
    }
}


export default Lx_answer