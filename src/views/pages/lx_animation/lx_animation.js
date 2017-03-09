import React from 'react';
import './lx_animation.less';

class Lx_animation extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_animation';
        this.state = {}
    }
    render() {
        return <div className="inu-lx_animation">
            <header className="header">
                <a href="" className="logo">logo</a>
                <i> = </i>
            </header>
            <div className="video">
                {
                    // <video height="650" className="bgvideo"  loop="loop">
                    // {
                    //     //autoplay="autoplay"   自动播放
                    // }
                    //     <source src="https://molekule.com/assets/video/final_1600.webm" type="video/mp4"/>
                    // </video>
                }
                <div className="bg"></div>
            </div>
            <section className="product w">
                <div className="p_title slideInDown animated">
                    <a href="">MORE</a>
                    <div className="title"><h3>家电产品</h3><span>PRODUCT</span></div>
                </div>
                <div className="p_list">
                    <ul>
                        <li className="slideInDown animated">
                            <a href=""><img src="http://usezan51.usezan.com/Uploads/201611/5838ff539c3a4.jpg" alt=""/></a>
                            <div>
                                <h5><a href="">油炸锅</a></h5>
                                <aside>Frying pan</aside>
                            </div>
                        </li>
                        <li className="slideInDown animated">
                            <a href=""><img src="http://usezan51.usezan.com/Uploads/201611/5838ff539c3a4.jpg" alt=""/></a>
                            <div>
                                <h5><a href="">油炸锅</a></h5>
                                <aside>Frying pan</aside>
                            </div>
                        </li>
                        <li className="slideInDown animated">
                            <a href=""><img src="http://usezan51.usezan.com/Uploads/201611/5838ff539c3a4.jpg" alt=""/></a>
                            <div>
                                <h5><a href="">油炸锅</a></h5>
                                <aside>Frying pan</aside>
                            </div>
                        </li>
                        <li className="slideInDown animated">
                            <a href=""><img src="http://usezan51.usezan.com/Uploads/201611/5838ff539c3a4.jpg" alt=""/></a>
                            <div>
                                <h5><a href="">油炸锅</a></h5>
                                <aside>Frying pan</aside>
                            </div>
                        </li>
                        <li className="slideInDown animated">
                            <a href=""><img src="http://usezan51.usezan.com/Uploads/201611/5838ff539c3a4.jpg" alt=""/></a>
                            <div>
                                <h5><a href="">油炸锅</a></h5>
                                <aside>Frying pan</aside>
                            </div>
                        </li>
                        <li className="slideInDown animated">
                            <a href=""><img src="http://usezan51.usezan.com/Uploads/201611/5838ff539c3a4.jpg" alt=""/></a>
                            <div>
                                <h5><a href="">油炸锅</a></h5>
                                <aside>Frying pan</aside>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="w">
                {
                    // <div className="bottom">订单提交中<em className="loading">...</em></div>
                }
                <a href="javascript:" class="grebtn">订单提交中<dot>...</dot></a>
                <div className="down">
                    一个纯JS的不依赖Flash的HTML5 Flash视频 (FLV)播放器！本项目受hls.js启发，需要依赖Media Source Extensions才能生效。
                    <a href="" className="more">向下</a>
                </div>
            </div>
            
        </div>
    }
}

export default Lx_animation
