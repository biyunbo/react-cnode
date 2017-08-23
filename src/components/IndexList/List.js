import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';
//action
import * as indexList from 'actions/indexList';

import {Loading} from 'components/Common/Index';

export default class List extends React.Component {
	constructor(props) {
        super(props);
    }

    componentWillMount() {
        //组件挂载前触发此函数
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
    }
    render() {
        let {topics} = this.props.indexList.tabData;
        console.log(this.props)
    	return(
            <div>
                {
                    topics.data.map((ele, index) => {
                        return (
                            <Li key={index} {...ele} />
                        )
                    })
                }
                <Loading />
            </div>
    	)
    }
}

class Li extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let { id, title, author, visit_count, reply_count, create_at, last_reply_at, good, top } = this.props
        return(
            <Link to={`/Topic/${id}`} className="list clear">
                <div className="img">
                    <img src={author.avatar_url} />
                </div>
                <div className="text">
                    <div className="li1">
                        <p>
                            {
                                top && <span className="ding">顶</span>
                            }
                            {
                                top && <span className="jing">精</span>
                            }
                            {title}
                        </p>
                    </div>
                    <div className="li2">
                        <div>{reply_count}/{visit_count}分享</div>
                        <div>{create_at.substring(0,10)}</div>
                    </div>
                </div>
            </Link>
        )
    }
}