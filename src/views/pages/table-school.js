// 培训学校
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
                },
                {
                    title:"介绍",
                    renderInput:(row,key,title)=>{
                        return <Input title={title} data={[row,key]} type="textarea"></Input>
                    }
                },
                {
                    title:"头像",
                    convert:(item,row)=>{
                        return <Select storage="resource.image" disabled value={item} getJson={sql.find.bind(this,'resource',['id','filename'],"where ext in ('jpg','png')")}></Select>
                    },
                    renderInput:(row,key,title)=>{
                        return <Select storage="resource.image" title={title} value={row[key]} onChange={(v)=>row[key]=v} getJson={sql.find.bind(this,'resource',['id','filename'],"where ext in ('jpg','png')")}></Select>
                    }
                },
                {
                    title:"名字"
                },
                {
                    title:"老师",
                    convert:(item,row)=>{
                        return <Select storage="teacher" disabled value={item} getJson={sql.find.bind(this,'user',['id','nickname'],"where type='Teacher'")}></Select>
                    },
                    renderInput:(row,key,title)=>{
                        return <Select storage="teacher" title={title} value={row[key]} onChange={(v)=>row[key]=v} getJson={sql.find.bind(this,'user',['id','nickname'],"where type='Teacher'")}></Select>
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
        this.sql = new sql("train_school",["id","description","head_image_id","name","manager_id"])
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
