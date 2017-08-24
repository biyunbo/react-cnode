import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as global from 'actions/global';
import * as user from 'actions/user';

/*组件*/
import { Header } from 'components/Common/Index';


@connect(
    state => state,
    dispatch => bindActionCreators({...global,...user}, dispatch)
)
export default class Login extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	componentWillMount(){

	}
	handleClick(){
		let token = this.myvalue.value
		this.props.postAccessToken(token);
	}
	render() {
		return(
			<div className="main">
				<Header title="登录" leftto="kong"/>
				<div className="denglu">
					<input placeholder="cnode社区accesstoken" ref={(ref) => this.myvalue = ref} />
					<div className="login" onClick={this.handleClick}>登录</div>
				</div>
			</div>
		)
	}
}
