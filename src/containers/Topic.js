import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as topic from 'actions/topic';

/*组件*/
import Comment from 'components/Topic/Comment';
import {Loading ,Header} from 'components/Common/Index';



@connect(
    state => state,
    dispatch => bindActionCreators({...topic}, dispatch)
)
export default class Topic extends React.Component {
	constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentWillMount() {
        let {id} = this.props.match.params
        let {topic , getArticle} = this.props
        if(!isEmpty(topic)){
            getArticle(id)
        }

    }
    componentWillReceiveProps(newProps) {
        
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
    }
    render() {
        let {data} = this.props.topic.data;
        let {isFecthing} = this.props.topic;
    	return(
            <div className="main">
                <Header title="详情" leftto="fanhui" />
                {
                    isFecthing ? <Loading /> : !isEmpty(data) &&<div className="main">
                        <div className='main-z'>
                            <div className="main-top">
                                <div className="top1">
                                    <div className="left">
                                        作者：<span>{data.author.loginname}</span>
                                    </div>
                                    <div className="right">
                                        发表于{formatDate(data.create_at)}
                                    </div>
                                </div>
                                <div className="top2">
                                    <div className="p1">{data.title}</div>
                                    <div className="p2">
                                        <div className="left">
                                            浏览次数{data.visit_count}
                                        </div>
                                        <div className="right">
                                            关注
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            <div className='markdown-body' dangerouslySetInnerHTML={{__html:data.content}}></div>
                            <Comment {...data} />
                        </div>
                    </div>
                }
            </div>
    	)
    }
}