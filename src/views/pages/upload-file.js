// 上传文件
import React from 'react';
import Input from 'asha/component/input/input-outline.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {
            inputs:[{}]
        }
    }
    add(){
        this.state.inputs.push({})
        this.setState({})
    }
    render() {
        return <div className="inu-upload-file">
            {this.state.inputs.map((item,i)=>{
                return <Input onClick={this.add.bind(this)} type="file"></Input>
            })}
        </div>
    }
}

export default App
