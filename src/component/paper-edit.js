// 上传试卷
import React from 'react';
import Input from 'asha/component/input/input-outline.js'
import Tab from 'asha/component/tab/tab-control.js'
import Button from 'asha/component/button'
import Question from './question.js'
import QuestionEdit from './question-edit.js'
import './paper-edit.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
            value:props.value||[],
            edit:false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.value)this.state.value=nextProps.value
    }
    onChange(){
        var i = 0
        function addIndex(list){
            list.forEach(function(q){
                if(q.type=="组合题"){
                    q.index = -1
                    q.children = q.children.slice(0,q.a)
                    Reflect.deleteProperty(q,'a')
                    addIndex(q.children)
                }
                else q.index = i++
            })
        }
        this.state.value.forEach(function(item){
            addIndex(item.questions)
        })
        console.log(this.state.value)
        if(this.props.onChange)this.props.onChange(this.state.value,i)
        this.setState({edit:false})
    }
    submit(item,data){
        Object.assign(item,data)
        this.setState({editing:false})
    }
    cancel(){
        this.setState({editing:false})
    }
    addPart(){
        this.state.value.push({questions:[]})
        this.setState({})
    }
    render() {
        if(!this.state.edit)return <Button title="编辑试卷" onClick={()=>this.setState({edit:true})}></Button>
        var data = this.state.value
        return <div className="inu-paper-edit">
            <Tab add={this.addPart.bind(this)}>{
                data.map((item,i)=>{
                    return this.renderParts(item,i)
                })
            }</Tab>
            <Button title="保存" onClick={this.onChange.bind(this)}></Button>
        </div>
    }
    renderParts(item,i){
        return <div key={i} name={item.title} className="parts">
            <Input title="标题" data={[item,'title']}></Input>
            <Input title="内容" data={[item,'content']} type="textarea"></Input>
            {
                (item.questions||[]).map((item,i)=>{
                    if(item!=this.state.editing)return <Question key={i} question={item} onClick={()=>this.setState({editing:item})}></Question>
                    var data = Object.clone(item)
                    return <QuestionEdit key={i} data={data} onSubmit={this.submit.bind(this,item,data)} onCancel={this.cancel.bind(this)}></QuestionEdit>
                })
            }
            <Button title="添加" onClick={()=>{
                var q = {}
                item.questions.push(q)
                this.setState({editing:q})
            }}></Button>
        </div>
    }
}

export default App
