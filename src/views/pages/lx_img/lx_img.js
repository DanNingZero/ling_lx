import React from 'react';
import './lx_img.less';

class lx_img extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'lx_img';
        this.state = {}
    }
    render() {
        return <div className="inu-index">
            <div id="testBox" className="demo anim_box">
                <img className="anim_image anim_image_top" src="http://image.zhangxinxu.com/image/study/p/s200/ps6.jpg" />
                <img className="anim_image anim_image_bottom" src="http://image.zhangxinxu.com/image/study/p/s200/ps4.jpg" />
            </div>
            <h1>This 指向 </h1>
        </div>
    }
}


class This extends React.Component {
    render(){
        //绑定 this 的方法
        //this 可以动态切换 同时也可以被固定下来，切换/固定 this 指向共有三个方法 call, apply, bind
        
        var obj = {};
        var f = function () {
          return this;
        };
        f() === this // true
        f.call(obj) === obj // true
        //*运行f方法时 this 指向的是全局环境，call 方法让this指向对象 obj ，让 f 方法在obj对象作用域下运行
        

        var n = 123;
        var obj = { n: 456 };
        function a() {
          console.log(this.n);
        }
        a.call() // 123
        a.call(null) // 123
        a.call(undefined) // 123
        a.call(window) // 123
        a.call(obj) // 456
        //如果call() 没有参数 || null || undefined 统统指向全局对象。
        //如果apply() ? null || undefined 统统指向全局对象。
        

        function add(a, b) {
          return a + b;
        }
        add.call(this, 1, 2) // 3
        add.apply(this, [1, 2]) // 3
        //call() 可以接受多个参数，第一个参数就是 this 所指向的对象 (thisValue) ，后面的参数是函数调用时所需的参数，
        //上面代码中，call 方法指定函数 add 内部的this ,并且参数为 1，2 ，因此add 运行后得到的就是3、
        //apply() 可以接受数组为参数（必须以数组形式添加），第一个参数就是 this 所指向的对象 (thisValue) ，第二个参数则是数组，该数组的所有成员依次作为参数，传入原函数。
        
        
        var a = [10,2,3,15,9];
        Math.max.apply(null,a)   //15  
        //结合 apply 方法中的 Math.max 方法，可以返回数组中最大元素
        

        var a = ['a', , 'b']
        function print(){
            console.log(i);
        }
        a.forEach(print)     //a   //b
        Array.apply(null,a).forEach(print)      //a     //undefined    //b
        //通过 apply 方法，利用 Array 构造函数将数组的空元素变成 undefined
        //* 数组的 forEach 方法会跳过空元素，但是不会跳过 undefined 
        

        Array.prototype.slice.apply({0:1,length:1})      //[1]
        //利用数组对象的 slice 方法，可以将一个类似数组的对象，(比如 arguments(参数) 对象) 转为真正的数组。
        //被处理的对象必须有 length 属性，以及相对应的数字键
        
        
        bind //用于将函数体内的 this 绑定到某个对象，然后返回一个新函数。
    }
}


export default lx_img
