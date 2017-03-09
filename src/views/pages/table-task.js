// 课程管理
import React from 'react';
import Table from 'asha/component/table/table.js'
import sql from 'asha/component/table/libs/sql.js'
import Form from 'asha/component/form/form.js'
import Input from 'asha/component/input/input-outline.js'
import Select from 'asha/component/input/input-select.js'
import Category from 'asha/component/input/category.js'
import api from 'asha/libs/api.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
            head:[
                {
                    title:"全选",
                    renderItem:(row)=>{
                        return <input type="checkbox"/>
                    }
                },
                {
                    title:"编号",
                    renderInput:false
                },"标题",
                {
                    title:"课程目标",
                    renderInput(row,key,title){
                        return <Input title={title} data={[row,key]} type="textarea"></Input>
                    }
                },
                {
                    title:"课程任务",
                    renderInput(row,key,title){
                        return <Input title={title} data={[row,key]} type="textarea"></Input>
                    }
                },
                {
                    title:"班",
                    convert:(item,row)=>{
                        return <Select storage="classroom" disabled value={item} getJson={sql.find.bind(this,'class_room',['id','title'])}></Select>
                    },
                    renderInput:(row,key,title)=>{
                        return <Select storage="classroom" title={title} value={row[key]} onChange={(v)=>row[key]=v} getJson={sql.find.bind(this,'class_room',['id','title'])}></Select>
                    }
                },
                {
                    title:"视频",
                    convert:(item,row)=>{
                        return <Select storage="video" disabled value={item} getJson={sql.find.bind(this,'resource',['id','filename'],"where ext in ('mp4')")}></Select>
                    },
                    renderInput:(row,key,title)=>{
                        return <Select storage="video" title={title} value={row[key]} onChange={(v)=>row[key]=v} getJson={sql.find.bind(this,'resource',['id','filename'],"where ext in ('mp4')")}></Select>
                    }
                },
                {
                    title:"操作",
                    renderItem:(row)=>{
                        return "编辑"
                    },
                    onClick:(item,row)=>{
                        this.setState({update:row,edit:Object.assign({},row)})
                    }
                }
            ]
        }
        this.sql = new sql("crtask",["id","title","aim","task","class_room_id","video_id"])
        this.sql.find().then((data)=>{
            this.setState({body:data})
        })
    }
    onSubmit(edit){
        this.sql.update(edit,this.state.update).then((data)=>{
            Object.assign(this.state.update,edit)
            this.setState({edit:false})
        })
    }
    render() {
        return <div className="inu-table-test">
            <Table className="full" head={this.state.head} body={this.state.body}></Table>
            {this.state.edit?<Form className="mask" inputs={this.state.head} data={this.state.edit} onSubmit={this.onSubmit.bind(this)} onCancel={()=>this.setState({edit:false})}></Form>:null}
        </div>
    }
}

export default App
