import "asha/css/normalize.css"
import "asha/css/admin.less"
import React from 'react';
import ReactDOM from 'react-dom'
import {Router,Route,IndexRoute,hashHistory} from "react-router";
import App from './routes/app.js'
import Nothing from './routes/route-nothing.js'

import Index from "./views/index.js"
import 'asha/polyfill.js'
import Advantage from './views/advantage/advantage.js'
import Business from './views/business/business.js'
import Case from './views/case/case.js'
import Team from './views/team/team.js'
import Details from './views/details/details.js'

//lx
import lx_Index from './views/pages/index/index.js'
import Lx_xuanze from './views/pages/lx_xuanze/lx_xuanze.js'
import Lx_list from './views/pages/lx_list/lx_list.js'
import Lx_answer from './views/pages/lx_answer/lx_answer.js'
import Lx_answer2 from './views/pages/lx_answer/lx_answer2.js'
import Lx_props from './views/pages/lx_props/lx_props.js'
import Lx_zdftongxun from './views/pages/lx_zdftongxun/lx_zdftongxun.js'
import Lx_fdztongxun from './views/pages/lx_zdftongxun/lx_fdztongxun.js'
import Lx_xdtongxun from './views/pages/lx_zdftongxun/lx_xdtongxun.js'
import Lx_jierushujumoxing from './views/pages/lx_zdftongxun/lx_jierushujumoxing.js'
import Lx_about from './views/pages/lx_zdftongxun/lx_about.js'
import Lx_leftright from './views/pages/lx_leftright/lx_leftright.js'
import Lx_img from './views/pages/lx_img/lx_img.js'
import Lx_transform from './views/pages/lx_transform/lx_transform.js'
import Lx_animation from './views/pages/lx_animation/lx_animation.js'
import Lx_javascript from './views/pages/lx_javascript/lx_javascript.js'


var route = (
    <Route path="/" component={App}>
        <IndexRoute component={require("./views/index.js")}/>
        <Route path="advantage" name="我们的优势" component={Advantage}/>
        <Route path="business" name="我们的业务" component={Business}/>
        <Route path="case" name="案例展示" component={Case}/>
        <Route path="team" name="我们的团队" component={Team}/>
        <Route path="details/:id" name="团队成员" component={Details}/>
        <Route path="index" name="视图" component={lx_Index}/>
        <Route path="lx_xuanze" name='选择' component={Lx_xuanze}/>
        <Route path="lx_list" name='列表' component={Lx_list}/>
        <Route path="lx_answer" component={Lx_answer}/>
        <Route path="lx_answer2" component={Lx_answer2}/>
        <Route path="lx_props" component={Lx_props}/>
        <Route path="lx_zdftongxun" >
            <IndexRoute name="子组件向父组件传递通讯" component={Lx_zdftongxun}/>
            <Route path="lx_fdztongxun" name='父组件与子组件传递通讯' component={Lx_fdztongxun}/>
            <Route path="lx_xdtongxun" name='兄弟之间通讯' component={Lx_xdtongxun}/>
            <Route path="lx_jierushujumoxing" name="接入数据模型" component={Lx_jierushujumoxing}/>
            <Route path="lx_about" name="关于" component={Lx_about}/>
        </Route>
        <Route path="lx_leftright" name="从左向右过渡" component={Lx_leftright}/>
        <Route path="lx_img" component={Lx_img}/>
        <Route path="lx_transform" component={Lx_transform}/>
        <Route path="lx_animation" component={Lx_animation}/>
        <Route path="lx_javascript" component={Lx_javascript}/>

        {
             // <Route path="advantage" component={Nothing}>
             //       <IndexRoute component={require("./views/advantage/advantage.js")}/>
             //       <Route path="my_lesson" component={require("./views/course_resources/course_resources.js")}></Route>
             // </Route>
        }
      

      
      
      
      
      
  </Route>
)

ReactDOM.render(<Router routes={route} history={hashHistory}></Router>,document.getElementById("app"))
