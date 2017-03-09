import React from 'react';
import './footer.less';

//图片
import img1_5 from '../../imges/1_5.png'
import img1_6 from '../../imges/1_6.png'

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Footer';
        this.state = {}
    }
    render() {
        return <footer>
            <div className="footer">
                <div className="f_text">
                    <em>DonLee213@outlook.com</em>
                    <em>＋86 18618183828</em>
                    <em>成都市高新区益州大道北段777号中航国际交流中心1栋1单元406号</em>
                    <em className="copyright">Copyright © 2012-2020 tederen.com All RightsReserved 泰德仁和科技版权所有 蜀ICP备 16005831 号-1</em>
                </div>
                <div className="f_img">
                    <img src={img1_5} alt=""/>
                    <img src={img1_6} alt=""/>
                </div>
            </div>
        </footer>
    }
}

export default Footer
