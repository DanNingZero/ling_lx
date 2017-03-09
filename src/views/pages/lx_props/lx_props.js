import React from 'react';
import './lx_props.less';


//one
// class CommentBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.displayName = 'CommentBox';
//         this.state = {}
//     }
//     render() {
//         return <div className="CommentBox">
//             {
//                 // I am CommentBox
//             }
//             <h1>Commtnts 评论</h1>
//             <CommentList />
//             <CommentForm />
//         </div>
//     }
// }

// class CommentList extends React.Component {
//     constructor(props) {
//         super(props);
//         this.displayName = 'App';
//         this.state = {}
//     }
//     render() {
//         return <div className="CommentList">
//             I am CommentList
//             <Comment author="A">This is one</Comment>
//             <Comment author="B">This is two</Comment>
//             <Comment author="C">This is treen</Comment>
//         </div>
//     }
// }

// class Comment extends React.Component {
//     constructor(props) {
//         super(props);
//         this.displayName = 'App';
//         this.state = {}
//     }
//     render() {
//         return <div className="Comment">
//             <h2>{this.props.author}</h2>
//             <em>{this.props.children}</em>       
//             { 
//                 //children = one,two,...
//             }
//         </div>
//     }
// }


//two
var date = [
    {author:"A",text:"This is one"},
    {author:"B",text:"This is two"},
    {author:"C",text:"This is treen"}
]
class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'CommentBox';
        this.state = {}
    }
    render() {
        return <div className="CommentBox">
            {
                // I am CommentBox
            }
            <h1>Commtnts 评论</h1>
            <CommentList />
            <CommentForm />
        </div>
    }
}

class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
    }
    render() {
        return <div className="CommentList">
            I am CommentList
            <Comment date={this.props.date} />
        </div>
    }
}

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
    }
    render() {
        return <div className="Comment">
            <h2>{this.props.author}</h2>
            <em>{this.props.children}</em>       
            { 
                //children = one,two,...
            }
        </div>
    }
}


class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this.state = {}
    }
    render() {
        return <div className="CommentForm">
            <p>I am CommentForm</p>
        </div>
    }
}




export default CommentBox
