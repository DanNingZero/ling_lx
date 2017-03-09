import React from 'react';
import './lx_xuanze.less';


class OnlineAnswer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            <OATagsBox />
        </div>
    }
}




class OATagsBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <TagsBoxCon>
                <TBCList name="学段">
                    <InputRadio select={["高中","初中","小学"]} defaultValue=""></InputRadio>
                </TBCList>
                <TBCList name="科目">
                    <InputRadio select={["语文","数学","英语","物理","化学","生物","政治","历史","地理"]} defaultValue=""></InputRadio>
                </TBCList>
                <TBCList name="版本">
                    <InputRadio select={["人教版","苏教版"]}></InputRadio>
                </TBCList>
                <TBCList name="学期">
                    <InputRadio select={["必修一","必修二","必修三","必修四","必修五","必修六"]}></InputRadio>
                </TBCList>
                <TBCList name="类别">
                    <InputRadio select={["课时检测","阶段检测","单元检测","期中检测","专题检测","期末检测","高考模拟"]}></InputRadio>
                </TBCList>
               </TagsBoxCon>
    }
}

class TagsBoxCon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="tags_box">
                    <div className="tags_con">
                        {this.props.children}
                    </div>
                </div>
    }
}

class TBCList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="tbcl">
                    <label className="tbcl_title">{this.props.name}：</label>               
                    {
                        //为毛这个不用map   可以直接通过props.属性名获取 属性值
                    }
                    
                    {this.props.children}
                </div>
}
}

class InputRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value : props.defaultValue
        }
    }
    change(){

    }
    
    render() {
        return <div className="tbcl_conent">
        {
            this.props.select.map((imn,i)=>{
                return <a  className="time" href="javascript:;"key={i}>
                    {this.state.value==imn?<div className="">{imn}</div> : <div className="on">{imn}</div>}
                    </a>

                 // onClick={this.change.bind(this.imn)} 
            })
        }
                    
                </div>
    }
}





export default OnlineAnswer;