// 制作试题
import React from 'react';
import Input from 'asha/component/input/input-outline.js'
import Select from 'asha/component/input/input-select.js'
import Button from 'asha/component/button'
import api from 'asha/libs/api.js'
import sql from 'asha/component/table/libs/sql.js'
import {toast} from 'asha/component/toast/toast.js'
import './question-edit.less';

class QuestionEdit extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'QuestionEdit';
        this.state = {
            question:this.props.data||{
                type:"单选题"
            }
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.data)this.state.question = nextProps.data
    }
    change(k,v){
        if(k=="type"){
            if(v=="组合题")this.state.question.children = []
            else Reflect.deleteProperty(this.state.question,"children")
        }
        this.state.question[k] = v
        this.setState({})
        if (this.props.onChange) {this.props.onChange(this.state.question)};
    }
    submit(){
        // api.callJson("/question/add")(this.state.question).then((data)=>{
        //     console.log(data)
        //     toast("添加试题成功")
        // })
        if (this.props.onSubmit) {this.props.onSubmit(this.state.question)};
    }
    render() {
        var question = this.state.question
        return <div className={"inu-question-edit "+(this.props.className||"")}>
            <Input title={question.type=="组合题"?"题干":`第${question.index||0}题`} value={question.title} onChange={(v)=>this.change("title",v)} type="textarea"></Input>
            <Input title="分数" value={question.score} onChange={(v)=>this.change("score",v)} type="telphone"></Input>
            <Select storage="imageUrl" title="图片" value={question.imageUrl} onChange={(v)=>this.change("imageUrl",v)} getJson={sql.find.bind(this,'resource',['concat("http://api.tederen.com/file/image/",id)','filename'],"where ext in ('jpg','png')")}></Select>
            <Input title="类型" value={question.type} onChange={(v)=>this.change("type",v)} select={["","单选题","多选题","判断题","组合题"]}/>
            {this.renderAnswers()}
            <div className="tools">
                <Input title="解析" value={question.analysis} onChange={(v)=>this.change("analysis",v)} type="textarea"></Input>
                {this.props.onSubmit?<Button title="确定" onClick={this.submit.bind(this)}></Button>:null}
                {this.props.onCancel?<Button title="取消" className="error" onClick={(e)=>this.props.onCancel(e)}></Button>:null}
            </div>
        </div>
    }
    renderAnswers(){
        var question = this.state.question
        if(question.type=="单选题")return <div>
            <Input title="a" value={question.a} onChange={(v)=>this.change("a",v)}></Input>
            <Input title="b" value={question.b} onChange={(v)=>this.change("b",v)}></Input>
            <Input title="c" value={question.c} onChange={(v)=>this.change("c",v)}></Input>
            <Input title="d" value={question.d} onChange={(v)=>this.change("d",v)}></Input>
            <Input title="答案" value={question.answer} onChange={(v)=>this.change("answer",v)} type="textarea" placeholder="答案:a"></Input>
        </div>
        if(question.type=="多选题")return <div>
            <Input title="a" value={question.a} onChange={(v)=>this.change("a",v)}></Input>
            <Input title="b" value={question.b} onChange={(v)=>this.change("b",v)}></Input>
            <Input title="c" value={question.c} onChange={(v)=>this.change("c",v)}></Input>
            <Input title="d" value={question.d} onChange={(v)=>this.change("d",v)}></Input>
            <Input title="答案" value={question.answer} onChange={(v)=>this.change("answer",v)} type="textarea" placeholder="答案:a,b,c"></Input>
        </div>
        if(question.type=="判断题")return <div>
            <Input title="答案" value={question.answer} onChange={(v)=>this.change("answer",v)} select={["","对","错"]}></Input>
        </div>
        if(question.type=="组合题")return <div>
            <Input title="题目数量" value={question.a} onChange={(v)=>this.change("a",v)}></Input>
            <div className="child">{this.renderChildQuestion()}</div>
        </div>
    }
    changeChild(i,v){
        var question = this.state.question
        question.children[i] = v
    }
    renderChildQuestion(){
        var question = this.state.question
        var children = []
        for (var i = 0; i < parseInt(question.a); i++) {
            children.push(<QuestionEdit key={i} className="child" data={question.children&&question.children[i]} onChange={this.changeChild.bind(this,i)}></QuestionEdit>)
        }
        return children
    }
}

export default QuestionEdit
