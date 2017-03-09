import React from 'react';
import "./lx_zdftongxun.less"

class Lx_about extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_about';
        this.state = {
            secondsElapsed:0
        }
    }
    tick() {
        this.setState({secondsElapsed: this.state.secondsElapsed + 1});
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return <div className="Lx_about">
            Seconds Elapsed: {this.state.secondsElapsed}
        </div>;
    }
}

//Cannot read property 'secondsElapsed' of undefined   无法读取属性“secondsElapsed”未定义

export default Lx_about;
