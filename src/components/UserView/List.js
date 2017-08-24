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
    	return(
            <div className="xinxi">
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
        let {title,last_reply_at,id} = this.props;
    	return(
            <Link to={`/Topic/${id}`}>
            	<div className="li">
            	<div className="title">{title}</div>
            	<div className="time">{formatDate(last_reply_at)}</div>
            	</div>
            </Link>
    	)
    }
}