import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
    }
    render() {
        return <div className="inu-app">
            {this.props.children}
        </div>
    }
}

export default App
