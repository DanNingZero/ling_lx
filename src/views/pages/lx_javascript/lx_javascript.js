import React from 'react';
import './lx_javascript.less';

class Lx_javascript extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Lx_javascript';
        this.state = {}
    }
    render() {
        return <div className="inu-lx_javascript">
            数据类型：
                number 数字
                string 字符类型，必须用“” 
                boolean 布尔类型，true false
                null 变量引用堆中一个空的空间
            对象数据类型：
                Object 引用对象类型
                array 数组类型
                function 函数类型
            执行顺序：
                先定义（var function）后执行（其它所有）
                先执行表达式计算再赋值

            var age = 30;//存放整数，number
            var age1 = 22.5;//小数，number
            var tm = 999999999999999;//长整型 number
            var pi = 3.1415926531548484458;//双精度浮点型 number
            var name = "s";//字符 string
            var b = document.body;//引用对象类型 object
            boolean布尔 = 是或者否 真或者假 0或者1 true  false

            赋值运算符（=,-=,+=,*=,/=,%=）
            比较运算符（==,===,!=,>,<,>=,<=）
            逻辑运算符 （||,&&,!）
            条件运算符 （1>2?3:4）
            //如果引用所指的地方是null的话，那么在运算中就会自动变成0；

            if...else 与 三元表达式的区别
            当通过判断返回某个值的时候，优先使用三元表达式
            当通过判断执行N段逻辑代码的时候，只能用条件结构




            内存中可大概分为：常量池（数字，字符，字母，符号），栈（定义），堆（其它所有）；
            
        </div>
    }
}

export default Lx_javascript
