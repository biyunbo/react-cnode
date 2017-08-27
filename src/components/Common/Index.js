import React from 'react';
import { NavLink,Link } from 'react-router-dom';


let loading = require('./img/loading.gif');

export class Footer extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
    }
    render() {
    	return(
            <nav className="footer-nav">
                <NavLink to="/" exact className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-shouye"></i></div>
                	<div>首页</div>
                </NavLink>
                <NavLink to="/publish" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-fabu"></i></div>
                	<div>发布</div>
                </NavLink>
                <NavLink to="/message" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-xiaoxi"></i></div>
                	<div>消息</div>
                </NavLink>
                <NavLink to="/userview" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-wode"></i></div>
                	<div>我的</div>
                </NavLink>
            </nav>    
    	)
    }
}
/*正在*/
export class Loading extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="loading">
                <img src={loading} />
            </div>
        )
    }
}
/*公共头部*/
export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        //组件挂载前触发此函数
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
        history.go(-1);
    }
    render() {
        let { title,leftto } = this.props;
        let left = null;
        if(leftto == "kong"){
            left = (<div></div>)
        }else if(leftto == "fanhui"){
            left = (
                <div className="fanhui" onClick={this.handleClick}>
                    <i className="iconfont icon-fanhui"></i>
                </div>
            )
        }
        return(
            <div className="top">
                {left}
                <div className="title">{title}</div>
            </div>     
        )
    }
}

/*未登录状态*/
export class Nologin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className="nologin">
                您还未登录，<Link to="/Userview">去登录~</Link>
            </div>
        )
    }
}

