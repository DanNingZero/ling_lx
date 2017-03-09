import React from 'react';
import './index.less';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
    }
    render() {
        return <button {...this.props} className={"inu-button "+(this.props.className||"")}>
            {this.props.title||"按钮"}
        </button>
    }
}

export default App
