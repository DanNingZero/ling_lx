webpackJsonp([5,7],{549:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(308),s=a(c);n(550);var u=n(552),d=a(u),p=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="Menu",n.state={menu:!1},n}return r(t,e),l(t,[{key:"render",value:function(){var e=this;return s.default.createElement("div",{className:this.state.menu?"inu-menu show":"inu-menu"},s.default.createElement("div",{className:this.state.menu?this.props.weizhi?"icon i_icon on":"icon h_icon on":this.props.weizhi?"icon i_icon":"icon h_icon",onClick:function(){e.setState({menu:!e.state.menu})}},s.default.createElement("span",{className:"line"}),s.default.createElement("span",{className:"line"}),s.default.createElement("span",{className:"line"})),s.default.createElement("div",{className:"menu"},s.default.createElement("div",{className:"icon",onClick:function(){e.setState({menu:!e.state.menu})}},s.default.createElement("span",{className:"line"}),s.default.createElement("span",{className:"line"}),s.default.createElement("span",{className:"line"})),s.default.createElement("nav",{className:"list"},s.default.createElement("div",{onClick:function(){(0,d.default)().go({pathname:"/advantage"})}},"我们的优势"),s.default.createElement("div",{onClick:function(){(0,d.default)().go({pathname:"/business"})}},"我们的业务"),s.default.createElement("div",{onClick:function(){(0,d.default)().go({pathname:"/case"})}},"案例展示"),s.default.createElement("div",{onClick:function(){(0,d.default)().go({pathname:"/team"})}},"我们的团队"))))}}]),t}(s.default.Component);t.default=p},550:function(e,t,n){var a=n(551);"string"==typeof a&&(a=[[e.id,a,""]]);n(305)(a,{});a.locals&&(e.exports=a.locals)},551:function(e,t,n){t=e.exports=n(304)(),t.push([e.id,"body{font-size:1.2em;color:#444;font-family:Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Hiragino Sans GB W3,WenQuanYi Micro Hei,sans-serif}em{font-style:normal}@media all and (max-width:768px){body{font-size:100%}}.appearance{appearance:none;-moz-appearance:none;-webkit-appearance:none}.display-flex{display:-webkit-box;display:-ms-flexbox;display:flex}.hide{opacity:0;pointer-events:none}.show{opacity:1;pointer-events:auto}.inu-menu>.icon{cursor:pointer;z-index:20}.inu-menu>.icon.i_icon{position:absolute;top:7%;right:6%}.inu-menu>.icon.h_icon{position:fixed;right:0;top:19px;display:inline-block;padding:0 15px}@media all and (min-width:768px){.inu-menu>.icon.h_icon{top:21px;padding:0 25px}}@media all and (min-width:992px){.inu-menu>.icon.h_icon{padding:0 35px}}.inu-menu>.icon.h_icon>.line{background-color:#444}.inu-menu>.icon>.line{width:2.2rem;height:3px;background-color:#ecf0f1;display:block;margin-bottom:8px;border-radius:50px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}@media all and (min-width:768px){.inu-menu>.icon>.line{width:2.4rem;margin-bottom:9px}}.inu-menu>.icon.on>.line{background-color:#444}.inu-menu>.icon.on>.line:nth-child(2){opacity:0}.inu-menu>.icon.on>.line:nth-child(1){-webkit-transform:translateY(9px) rotate(45deg);transform:translateY(9px) rotate(45deg)}.inu-menu>.icon.on>.line:nth-child(3){-webkit-transform:translateY(-13px) rotate(-45deg);transform:translateY(-13px) rotate(-45deg)}@media all and (min-width:768px){.inu-menu>.icon.on>.line:nth-child(1){-webkit-transform:translateY(10px) rotate(45deg);transform:translateY(10px) rotate(45deg)}.inu-menu>.icon.on>.line:nth-child(3){-webkit-transform:translateY(-13.5px) rotate(-45deg);transform:translateY(-13.5px) rotate(-45deg)}}.inu-menu.show>.menu{width:200px;padding-left:2.5em}@media all and (min-width:768px){.inu-menu.show>.menu{width:300px;padding-left:5em}}.inu-menu>.menu{width:0;background-color:#f2f2f2;position:fixed;right:0;top:0;z-index:19;height:100%;padding-left:0;-webkit-transition:all .5s;transition:all .5s}.inu-menu>.menu>.list{position:absolute;top:20%}.inu-menu>.menu>.list>div{line-height:4em;display:block;height:20%;position:relative;top:20%;cursor:pointer;font-size:1.2em}.inu-menu>.menu>.list>div:hover{color:#005481}",""])},552:function(e,t){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&",n={};if("string"==typeof e&&(e=e.split(t),e.length>1))for(var a in e){var i=e[a].split("=");2==i.length&&(n[i[0]]=decodeURIComponent(i[1]))}return n}function a(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"&","");for(var n in e)t?t+="&"+encodeURIComponent(n)+"="+encodeURIComponent(e[n]):t=encodeURIComponent(n)+"="+encodeURIComponent(e[n]);return t}function i(){var e=window.document.location.href.toString();if(r&&r==e)return o;r=e;var t=/^([^\?#]+)(\?([^\?#]*))?(#([^\?]*))?(\?([\s\S]+))?/,a=t.exec(e);return o.location=a[1],o._get=a[3]||"",o.get=n(o._get),o.pathname=a[5]||"",o._query=a[7]||"",o.query=n(o._query),o}var o={go:function(e){e.get&&Object.assign(o.get,e.get),e.query&&Object.assign(o.query,e.query);var t=e.location||o.location;o._get=a(o.get),o._query=a(o.query),o._get&&(t+="?"+o._get),t+="#"+(e.pathname||o.pathname),o._query&&(t+="?"+o._query),location.href=t}},r=!1;e.exports=i},564:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(308),s=a(c);n(565);var u=n(567),d=a(u),p=n(568),m=(a(p),function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="Header",n.state={title:"我们的优势"},n}return r(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("header",{className:"header"},s.default.createElement("div",{className:"h_logo"},s.default.createElement("a",{href:"#"},s.default.createElement("img",{src:d.default,alt:"",className:"logo"}))),s.default.createElement("div",{className:"h_text"},this.props.data||this.state.title))}}]),t}(s.default.Component));t.default=m},565:function(e,t,n){var a=n(566);"string"==typeof a&&(a=[[e.id,a,""]]);n(305)(a,{});a.locals&&(e.exports=a.locals)},566:function(e,t,n){t=e.exports=n(304)(),t.push([e.id,"body{font-size:1.2em;color:#444;font-family:Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Hiragino Sans GB W3,WenQuanYi Micro Hei,sans-serif}em{font-style:normal}@media all and (max-width:768px){body{font-size:100%}}.appearance{appearance:none;-moz-appearance:none;-webkit-appearance:none}.display-flex{display:-webkit-box;display:-ms-flexbox;display:flex}.hide{opacity:0;pointer-events:none}.show{opacity:1;pointer-events:auto}.header{position:fixed;z-index:10;width:100%;background-color:#fff;height:65px;line-height:65px;border-bottom:1px solid #eaeaea}.header>div>a{display:inline-block;padding:0 15px}.header>div>a>img.logo{width:2.2rem}.header>.h_logo{position:absolute;left:0;top:19px}.header>.h_text{text-align:center;line-height:65px;font-size:1.4em}@media all and (min-width:768px){.header{height:70px;line-height:70px}.header>div>a{padding:0 25px}.header>div>a>img.logo{width:2.4rem}.header>.h_logo{top:21px}.header>.h_text{line-height:70px}}@media all and (min-width:992px){.header>div>a{padding:0 35px}}",""])},567:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAuCAYAAAB04nriAAAAAXNSR0IArs4c6QAABChJREFUaAXtmk1PE0EYx9vtlqZCBQ4GEoVyINGEg4mgkcSLwMmbFz8FB76AJxM9efDkV/Dm0ZdUgiJHEuWgFyQGjIYYLbVR6dvW37N0y267u13pvnDYSbazM/M8///zMjszu5BcWlo6SCQSQ00Kdd8lmUwqgGxpmnZfUZQnwGp9g/oHUFcxKIWRcvkHm0ikwBVApRUAP7FPjIVNTclG5sQIDorgDpBdwT5VheCnVSx6xZX10zKAd3B6H8zXfuL2i4VNjX4xYv04AnEE4gjEEYgjEEfg5BFILi4u3kRdjpi+nS05eJQ5S/9MpVK3T26a/5r4qKkY9wzoDLWfDB/BuwfgAz9B+8USHxXxul+gTn3B5DqVxzjJcBHjKp1GG23GJfVDXCnpQ/YvlaO8yFBKR1X7V5z/gG6t3cMN0HTpAZdXU3OAhKvXlHPUEZvBtXt5aaiVSmUunU4r1M1MJtNFgqLKi89zDLjEJQ4/RPaxnayMSzk8PKwxfv2opf/+qtfrt9bW1r6a+oxbbXp6OjM5OXmB5z4JV3N3d/fL9va2a1Dn5+ezcJwXEFVVtWKxuLe5uWkEVPzo8kWXXV9f/yY3LkVhYaseJVrPysHGxoad4RaIhYUFyweFBgUB28cnn89fZOwthst7tDYxMXEDh99bADsa2Wz2KsGR9UfK71wud436szQowm3h13v5kddD1zI7OysfB9rR4tZuqrhiyKBkz0mIWCis6PLY6FT86I+Pk7z0t2TOGDIEy5NdnoQM0CBrHDCyb9T/Q2ebTTuAU+OwnXFB9MUOBxFVL5imbcRTEpBvrwkm3Z5UPRetnggeBWS7cRGtM/aDS1+leZ6l7VrAqyJQbAn9YVE07+OOuqE5zJ6ZZsVP21lSLpd3hoeH51it9X24VCp9d5I19NnX33F/RdoSTBze76UjsmE5fJZp93JkZKQrc2RT3zMZ19iaxKbE6OioTOv2lNU7u39QOT4Wyx6OXluKMTv9elgOy14uhwvHwrjjmNOAm47TmKcFwonQrR/CnocHN/0gxsh6LbAM4/AWBCtBGP6fmCvYMmXoBOZwoVDYgeSRQRRVzXvAHbinDP7AprRBEHVNdi0+WhpRGxcGf+xwGFEOk4OF03LCC2zRmpmZGRgbGzsXpnNmLvmC02pnzP2BOTw+Pn6ZBeOFmSzMe76I6HQkOGfmDcxhiNI4fHzWM7OGeI8NFrbAFi2IjCllIYyygU36vzwEbgPZrkG2zBvNXuBkLgSShMCmtJkXIvlOVVhdXZXTV6QlsCnd6RXvrwOdfVG0Q8mwOMb7alY+nlerVesqEqLXfLuuhuIwz7Bk9+ng4GCVKzKHseNuKA7zDIuT+RCTaUuFGfqnFNvBfjtZkUNbH7zaSoYVrxk2/i7k+c+rgH/iWjaM4b5BhCPbm+GXifbmH8bkWalBnBssAAAAAElFTkSuQmCC"},568:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAvCAYAAABQfMJ5AAAAAXNSR0IArs4c6QAAAaNJREFUaAXtmr9Lw0AYhr30NhGtRBDEQRAH/R9CSjIJ/ljc1cV/w12dnUTdRFx0L8maIQ5CwUL3gmRosqTGXOJ7mbo6FOHyfpBc7lIanudLlpcTCyjHcbY6nc6qEKLWc9OqrmsBvmI8Hg8Hg0EhPM87BuQ9jkWTocFWAf5FKXUqAXuOhRXTujvLA75mivEEF5cW6KPZHxh+Pczz/EtWVXUDA1PAb5gMbFmWKsvyMYqizGROstEADdAADdAADdAADdAADdAADdDAvAw0OYrruttSynUECtW8HvSf/6uDQTx/mmXZRxzHP9L3/SMsPmBxCQmKkWkoUhMNXXa73WeMZzoNfQPsASZtqAKR0Z4OBuM20GpGsI4wJDJN0yu0XWFidDAIYIU3+i4Mw4kWwKIBGqABGqABGqABGqABGqABGqABGvibgSYYxI7BTQSDa8iSjMzIkHcKhAjfQRB8Qo8SvV5vH1sI9Y7BZdwwElq/B0hNFPCe+v3+hUAa+oq1Q32jBVWg67sWTu8tgG0Q0ekRPuFEJklybdt2ifbvGA6fo8G3+K7TX5B2m/c69HfNAAAAAElFTkSuQmCC"},591:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(308),s=a(c);n(592);var u=n(564),d=a(u),p=n(549),m=a(p),f=n(594),h=a(f),g=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="Team",n.state={},n}return r(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("div",{className:"inu-team"},s.default.createElement(m.default,null),s.default.createElement(d.default,{data:"我们的团队"}),s.default.createElement("div",{className:"content"},s.default.createElement("section",{className:"c_text"},"泰德仁和是一家年轻的科技创业公司，以为企业提供互联网技术产品和服务为核心业务。我们的团队成员全部来自985,211高校对口专业，为用户提供有价值的技术产品是我们共同的愿景。"),s.default.createElement(b,null)))}}]),t}(s.default.Component),b=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.displayName="Team",n.state={},n}return r(t,e),l(t,[{key:"render",value:function(){return s.default.createElement("section",null,h.default.map(function(e,t){return s.default.createElement("div",{className:"c_team",key:t},s.default.createElement("img",{src:e.src,alt:"",className:"img"}),s.default.createElement("a",{href:e.href+t,target:"_blank"},s.default.createElement("div",{className:"code"},s.default.createElement("aside",null,e.name),s.default.createElement("aside",null,e.position))))}))}}]),t}(s.default.Component);t.default=g},592:function(e,t,n){var a=n(593);"string"==typeof a&&(a=[[e.id,a,""]]);n(305)(a,{});a.locals&&(e.exports=a.locals)},593:function(e,t,n){t=e.exports=n(304)(),t.push([e.id,"body{font-size:1.2em;color:#444;font-family:Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Hiragino Sans GB W3,WenQuanYi Micro Hei,sans-serif}em{font-style:normal}@media all and (max-width:768px){body{font-size:100%}}.appearance{appearance:none;-moz-appearance:none;-webkit-appearance:none}.display-flex{display:-webkit-box;display:-ms-flexbox;display:flex}.hide{opacity:0;pointer-events:none}.show{opacity:1;pointer-events:auto}.inu-team .content{margin-left:auto;margin-right:auto;padding:6em 15px 5%;overflow:hidden}.inu-team .content>.c_text{line-height:1.8em;margin-bottom:4%;margin-left:15px;margin-right:15px}.inu-team .content>section{overflow:hidden}.inu-team .content>section>.c_team{position:relative;overflow:hidden;height:auto;padding:0;margin-left:15px;margin-right:15px}.inu-team .content>section>.c_team>.img{position:relative;margin:0 auto;height:auto;max-width:100%;display:block}.inu-team .content>section>.c_team>a>.code{position:absolute;top:0;width:100%;height:100%;opacity:0;color:#fff;vertical-align:middle;padding-top:50%;text-align:center}.inu-team .content>section>.c_team>a>.code>aside{line-height:1.8em;font-size:1.2em}.inu-team .content>section>.c_team>a>.code>aside:nth-child(2){font-size:1.4em}.inu-team .content>section>.c_team>a:hover{background-color:rgba(72,132,183,.55);display:block;width:100%;height:100%;position:absolute;top:0;left:0}.inu-team .content>section>.c_team>a:hover>.code{opacity:1}@media all and (min-width:768px){.inu-team .content{width:750px}.inu-team .content>.c_text{margin-left:0;margin-right:0}.inu-team .content>section>.c_team{float:left;width:50%;margin:0}}@media all and (min-width:992px){.inu-team .content{width:970px;padding-top:8em}.inu-team .content>section>.c_team{width:33.33333333%}}@media all and (min-width:1200px){.inu-team .content{width:1170px;padding-top:9em}.inu-team .content>section>.c_team{width:25%}}@media all and (min-width:1600px){.inu-team .content{width:1370px}}",""])},594:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var i=n(595),o=(a(i),n(596)),r=a(o),l=n(597),c=a(l),s=n(598),u=a(s),d=n(599),p=a(d),m=n(600),f=a(m),h=n(601),g=a(h),b=n(602),x=a(b),y=n(603),v=a(y);e.exports=[{src:r.default,alt:"",href:"/#/details/",name:"唐宗宇",position:"技术总监",school:"四川大学",introduce:"毕业于985,211全国重点大学四川大学。在校期间，积极参加各项科技大赛，参与包括微信警务系统、生物信息遥测、nodeWRT抓包分析等项目的开发与编写。\n熟练运用C/C++，PHP，JS，JAVA，Python，Scala等编程语言，掌握常用的数据结构与算法，支持向量、logistic等机器学习算法。熟悉TCP/UDP/HTTP等常用协议。\n以走在计算机技术前沿为目标，不断完善自己，以保证客户的需求。始终坚持学习开发前沿技术，保持乐观开朗向上的心态。\n我们作为一个统一严谨的团队，高标准、高质量、高规格是我们对您的承诺，我们会尽责尽心为您完成每一个要求与目标，相信我们今天的一丝不苟一定能为您明天的灿烂辉煌加油助力。"},{src:c.default,alt:"",href:"/#/details/",name:"柴宗璞",position:"UI设计师",school:"西南交通大学",introduce:"毕业于西南知名211学府－西南交通大学。在大学期间多次参加广告设计比赛以及一些设计项目，不断积累自身经验。\n擅长终端UI设计，公司VI设计以及Web前段设计等。通过熟练掌握photoshop，Illustrator，sketch，coreldraw等通用工具，将设计与广告营销合理的结合，做到以客户为中心，不断帮客户发掘商业价值，是一直以来的目标。\n始终坚信设计源于生活而又高于生活。但终将回归生活，为人们的生活更加便利而存在。年轻，有梦想，有追求是我们的“标签”。我们会用心对待每一个客户，为您做出最完美的设计。"},{src:u.default,alt:"",href:"/#/details/",name:"唐志斌",position:"iOS研发工程师",school:"吉林大学",introduce:"iOS研发工程师，毕业于211，985知名学府吉林大学，项目经验丰富，开发过多个大型项目。\n精通object-c和swift语言，主要负责iOS客户端开发。通过熟练的开发技术始终保证产品开发进度和开发质量，并解决开发中遇到的技术难题。\n不断地学习和研究新技术，使我们开发出的产品质量更高，用户体验更好。专业是我们的态度，我们会用心对待每一个客户，为您做出最完美的产品。"},{src:p.default,alt:"",href:"/#/details/",name:"路立琳",position:"web前端开发工程师",school:"四川大学",introduce:"web前端开发工程师，就读于四川大学计算机学院，曾获得“创青春”四川青年创新创业大赛暨第七届高校毕业生创业大赛金奖，项目经验丰富。\n熟练掌握React Js 前端开发框架，精通JavaScript。专攻web前端开发，旨在开发出质量更高的产品，紧跟需求变动，满足用户需求。\n我的追求：活到老，学到老，用有限的生命长度拓宽无限的生命宽度。"},{src:f.default,alt:"",href:"/#/details/",name:"宁丹",position:"web前端开发工程师",school:"中南大学",introduce:"web前端开发工程师，毕业于中南大学，熟悉HTML5、CSS3、Javascript、React、less、响应式自适应等技术，曾开发多个大型项目，PC、Web、微信等有丰富的项目经验。\n在工作中以追求完美主义者，竭力做到最好。"},{src:g.default,alt:"",href:"/#/details/",name:"王治霖",position:"移动app工程师",school:"电子科技大学",introduce:"毕业于国内知名985院校电子科技大学，在校期间加入学校，学院开发工作室从事移动app开发。\n精通android应用层开发，android底层开发，并对移动ui，ux设计有一定涉猎。一直以客户需求为指导，将各种开发领域的新技术用人性化的方式呈现出来，实现客户和我们公司的双赢。\n我们坚信在移动互联网时代，客户的所追求的商业价值可以通过移动应用获得最大化的实现。而我们将为每个客户提供业内少有的高效，精准，稳定的移动开发服务，实现您的价值，完成你的梦想。"},{src:x.default,alt:"",href:"/#/details/",name:"韦琳",position:"UI设计师",school:"西南交通大学",introduce:"UI设计师，毕业于西南交通大学建筑与设计学院，精通Photoshop、Illustrator、Sketch等设计软件，曾设计多款手持设备的UI及企业、电商、宣传网站，设计经验丰富，设计风格前卫。\n在工作当中，能基于用户体验、人机交互、图形化设计、界面设计等前沿理论实现产品风格设计，擅长根据视觉设计的发展趋势及用户研究的结果不断优化产品的图形界面。"},{src:v.default,alt:"",href:"/#/details/",name:"伍成然",position:"web前端开发工程师",school:"四川大学",introduce:"毕业于四川大学计算机学院，在校参与多个项目，热爱学习，充满探索精神，毕业时选择走上更贴近用户的前端开发之路。\n四年前端开发经验。熟悉W3C标准，对数据与表现分离、web语义化、前后端分离等有深刻理解。深入理解JavaScript面向对象和函数式编程思想，熟悉JavaScript设计模式，熟悉ES6最新标准。理解http协议和AJAX机制。熟练掌握React、JQuery、Angular、Vue等框架和less、sass等css预处理语言，以及HTML5、响应式网页等技术。为推动整个前端生态的工程化做着自己微小的贡献。\n“成功绝非偶然，而优秀是一种习惯”是我的座右铭。现在，我在一个优秀的团队和一群优秀的人在一起，既是我的荣幸，也是促我奋进的动力。不忘初心，以人为本，为每一位客户创造出优秀有价值的产品是我们坚定不移的使命！"}]},595:function(e,t,n){e.exports=n.p+"src/imges/3_1.png"},596:function(e,t,n){e.exports=n.p+"src/imges/3_1.jpg"},597:function(e,t,n){e.exports=n.p+"src/imges/3_2.jpg"},598:function(e,t,n){e.exports=n.p+"src/imges/3_3.jpg"},599:function(e,t,n){e.exports=n.p+"src/imges/3_4.jpg"},600:function(e,t,n){e.exports=n.p+"src/imges/3_5.jpg"},601:function(e,t,n){e.exports=n.p+"src/imges/3_6.jpg"},602:function(e,t,n){e.exports=n.p+"src/imges/3_7.jpg"},603:function(e,t,n){e.exports=n.p+"src/imges/3_8.jpg"}});