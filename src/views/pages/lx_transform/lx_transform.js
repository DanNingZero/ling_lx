import React from 'react';
import './lx_transform.less';

//图片
import img1_1 from './1_1.png'
import img1_2 from './1_2.png'

class Transform extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Transform';
        this.state = {}
    }
    render() {
        return <div className="inu-transform">
            <div className="bg">
                <div className="bg0"></div>
            </div>
            <div className="stage">
                <div className="page0">
                    <div className="main">
                        <ul>
                            <li><img src={img1_2} alt="" width="577px" height="359px"/></li>
                            <li><img src={img1_2} alt="" width="577px" height="359px"/></li>
                            <div>
                                <img className="p0g_img" src={img1_1} alt=""/>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    }
}

export default Transform

