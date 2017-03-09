import React from 'react';
import Footer from './footer/footer.js'
import Toast from 'asha/component/toast/toast.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
    }
    render() {
        return <div className="inu-app">
            <Toast></Toast>
            {this.props.children}
            <Footer />
        </div>
    }
}

export default App
