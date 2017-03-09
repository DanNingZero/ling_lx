import React from 'react';
import echarts from 'echarts';
import ReactDOM from 'react-dom';
import storage from 'asha/libs/storage.js'
import './index.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
        this.selected = storage(props.storage||'chart.selected',{})
    }
    setOption(option){
        option = Object.assign({},option)
        if(option.legend&&!option.legend.selected)option.legend.selected = this.selected
        this.chart.setOption(option,true)
    }
    componentDidMount(){
        var dom = ReactDOM.findDOMNode(this)
        this.chart = echarts.init(dom)
        this.setOption(this.props.option)
        console.log(this.chart)
        this.chart.on("legendselectchanged",(e)=>{
            Object.assign(this.selected,e.selected)
            this.selected.saveStorage()
        })
        if(this.props.onClick)this.chart.on("click",(e)=>{
            this.props.onClick(e)
        })
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.option){
            this.setOption(nextProps.option)
        }
    }
    render() {
        return <div className="inu-chart"></div>
    }
}

App.makeSerie = function(title,data,yAxisIndex){
     return {
        name:title,
        type:'line',
        data:data||[],
        yAxisIndex:yAxisIndex||0
    }
}

App.data2Option = function(title,data,option,convert){
    var label = []
    var labelName = false
    var keys = []
    var series = []
    if(option instanceof Array){
        option.forEach(function(item){
            if(!item||!item[1])throw new Error("data2Option:option need be [[key:name],[key:true]]")
            var key = item[0]
            var value = item[1]
            var yAxisIndex = item[2]
            if(value===true){
                if(labelName)throw new Error("data2Option:option must only one value true")
                labelName = key
            }else{
                keys.push(key)
                series.push(App.makeSerie(value,[],yAxisIndex))
            }
        })
    }else {
        for(var key in option){
            var value = option[key]
            if(value===true){
                if(labelName)throw new Error("data2Option:option must only one value true")
                labelName = key
            }else{
                keys.push(key)
                series.push(App.makeSerie(value))
            }
        }
    }
    if(!labelName)throw new Error("data2Option:option must have one value true")
    if(typeof convert=="function")convert(data,label,series,labelName,keys);
    else data.forEach(function(item){
        label.push(item[labelName])
        keys.forEach(function(key,i){
            series[i].data.push(item[key])
        })
    })
    return App.makeOption(title,label,series)
}

App.makeOption = function(title,label,series){
    if(!series||!series[0])return;
    if(typeof title=="string"){
        title = {text:title}
    }
    var legend = series.map((item)=>item.name)
    return {
        title : title,
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:legend
        },
        dataZoom: [
            {
                show: true,
                start:0,
            }
        ],
        toolbox: {
            show : true,
            feature : {
                mark : {show: true},
                dataView : {show: true, readOnly: false},
                magicType : {show: true, type: ['line', 'bar']},
                restore : {show: true},
                saveAsImage : {show: true},
                dataZoom:{show:true}
            }
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : label
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            },
            {
                type : 'value',
                axisLabel : {
                    formatter: '{value}'
                }
            }
        ],
        series : series
    };
}

export default App
