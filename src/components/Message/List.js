import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

export default class List extends React.Component {
	constructor(props) {
        super(props);
    }
    render() {
        let {list} = this.props;
        console.log(list)
    	return(
            <div className="xiaoxi">
            	{
                    list.length == 0 && <div className="zanwu">暂无数据~</div>
                }
                {   
                    list.map((ele, index) => {
                            return (
                                <Li key={index} {...ele} />
                            )
                        })
                }
            </div>
    	)
    }
}

class Li extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {avatar_url , loginname} = this.props.author;
        let {content , create_at} = this.props.reply;
        let {id , title} = this.props.topic;
        return(
            <div className="li">
                <div className="p1">
                    <img src={avatar_url} />
                    <div className="time">{formatDate(create_at)}</div>
                </div>
                <div className="p1">
                    <div className="name">{loginname}</div>
                   
                    <Link className="title" to={`/Topic/${id}`}>{title}</Link>
                </div>
                <div className="content" dangerouslySetInnerHTML={{__html:content}}></div>
            </div>
        )
    }
}