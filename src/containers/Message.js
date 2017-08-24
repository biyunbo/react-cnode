import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as topic from 'actions/topic';

/*组件*/
import { Header,Nologin } from 'components/Common/Index';


@connect(
    state => state,
    dispatch => bindActionCreators({...topic}, dispatch)
)
export default class Message extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	render() {
		let {success} = this.props.global
		return(
			<div className="main">
				<Header title="消息" leftto="kong"/>
				{
					success ? <Main /> : <Nologin />
				}
			</div>
		)
	}
}

//消息主体
class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<div>消息主体</div>
		)
	}
}