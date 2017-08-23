import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';


export default class Comment extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        //组件挂载前触发此函数
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
    }
    handleClick() {
        //该函数用来执行组件内部的事件
    }
    render() {
        let {reply_count,replies} = this.props
        console.log(this.props)
    	return(
            <div className="comment">
                <div className="comment-top">共{reply_count}条评论</div>
                {
                    !isEmpty(replies) && replies.map((ele,index) => {
                        return (
                            <div key={index} className="li">
                                <div className="list1">
                                    <div className="left">
                                        <img src={ele.author.avatar_url} alt="" />
                                        <span>{ele.author.loginname}</span>
                                    </div>
                                    <div className="right">
                                        {index+1}楼
                                    </div>
                                </div>
                                <div className="list2">
                                    <div className="p1" dangerouslySetInnerHTML={{__html:ele.content}}>
                                        
                                    </div>
                                    <div className="p2">
                                        <div className="left">
                                            {formatDate(ele.create_at)}
                                        </div>
                                        <div className="right">
                                            <i className="iconfont icon-duduyinleappicon1601 dianzan"></i>
                                            {ele.ups.length}
                                            <i className="iconfont icon-transmit zhuanfa"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>  
    	)
    }
}
