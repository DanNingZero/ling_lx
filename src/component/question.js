import React from 'react'
import ReactDOM from 'react-dom'
import Radio from 'asha/component/input/input-radio.js'
import CheckBox from "asha/component/input/input-checkbox.js"
// import RadioGroup from '../../component/Radio/RadioGroup.js'
import './question.less'

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'question';
        this.state={
            // type:"单选题",//"单选题","多选题","判断题","组合题"
        }
    }
    onClick(){
        if(this.props.onClick)this.props.onClick()
    }
    handleChange(c,v) {
        // var data=this.props.answer
        // data[c]=v.replace(/,/g,'');
        if(typeof v=="string")v=v.replace(/,/g,'');
        // console.log(data)
        this.props.handleAnswerChange(c,v)
    }
    render() {
        var _this=this

        var answer=this.props.answer
        var buy=this.props.buy
        var question=this.props.question;
        
        var data1=[question.a,question.b,question.c,question.d]
        var data2=["对","错"]
        
        
        var questionType

        if(question.type=="单选题"){
            questionType=<Radio select={data1} onChange={this.handleChange.bind(this)}/>
        }else if(question.type=="多选题"){
            questionType=<CheckBox select={data1} onChange={this.handleChange.bind(this)}/>
        }else if(question.type=="判断题"){
            questionType=<Radio select={data2} onChange={this.handleChange.bind(this)}/>
        }else if(question.type=="组合题"){
            questionType=question.children.map(function(child,ind){
                return <Question answer={answer} question={child} buy={buy} key={ind} 
                        handleAnswerChange={_this.props.handleAnswerChange&&_this.props.handleAnswerChange.bind(_this)}/>
            })  
        }
        var num = (question.type=="组合题"?"":`(${question.index||0})、`)
        return <div className="question">
            <div className="q-title" onClick={this.onClick.bind(this)}>{num+`(${question.type})${question.title}`}</div>
            <div className="q-img"><img src={question.imageUrl}/></div>
            <div className="q-body">{questionType}</div>
        </div>
    }

}

export default Question;