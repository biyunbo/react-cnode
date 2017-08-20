import React from 'react';
import { NavLink } from 'react-router-dom';

let loading = require('./img/loading.jpg');

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
                <NavLink to="/" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-shouye"></i></div>
                	<div>首页</div>
                </NavLink>
                <NavLink to="/a" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-fabu"></i></div>
                	<div>发布</div>
                </NavLink>
                <NavLink to="/b" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-xiaoxi"></i></div>
                	<div>消息</div>
                </NavLink>
                <NavLink to="/c" className="footer-li" activeClassName="active">
                	<div><i className="iconfont icon-wode"></i></div>
                	<div>我的</div>
                </NavLink>
            </nav>    
    	)
    }
}

export class Loading extends React.Component {
    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
    }
    render() {
        return(
            <div className="loading">
                <img src={loading} />
            </div>
        )
    }
}
