import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
//action
import * as indexList from 'actions/indexList';

export default class Header extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        //tab = queryString.parse(this.props.history.location.search).tab || 'all';
        //this.props.selectTab(tab);


    }
    componentWillReceiveProps(newProps) {
        // if (newProps.indexList.selectedTab !== this.props.indexList.selectedTab) {
        //     let {selectedTab} = newProps.indexList;
        //     this.props.getList(selectedTab);
        // }
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
        // let tab = queryString.parse(this.props.history.location.search).tab || 'all';
        // this.props.selectTab(tab);
    }
    render() {
        let tab = this.props.indexList.selectedTab;
    	return(
            <nav className="index-nav">
                <ul data-flex="box:mean">
                    <li className={tab == "all" ? "no":"yes"}>
                        <Link to="/">全部</Link>
                    </li>
                    <li>
                        <Link to="/?tab=good">精华</Link>
                    </li>
                    <li>
                        <Link to="/?tab=share">分享</Link>
                    </li>
                    <li>
                        <Link to="/?tab=ask">问答</Link>
                    </li>
                    <li>
                        <Link to="/?tab=job">招聘</Link>
                    </li>
                </ul>
                <div className="height"></div>
            </nav>     
    	)
    }
}