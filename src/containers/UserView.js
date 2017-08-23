import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as global from 'actions/global';

/*组件*/
import Comment from 'components/Topic/Comment';
import { Header } from 'components/Common/Index';
import Login from 'containers/Login';


@connect(
    state => state,
    dispatch => bindActionCreators({...global}, dispatch)
)
export default class Userview extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	render() {
		let {success} = this.props.global
		return(
			<div className="main">
			{
				success ? <Main {...this.props} /> : <Login />
			}
			</div>
		)
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	render() {
		return(
			<div className="main">
				<Header title="个人中心" leftto="kong"/>
			</div>
		)
	}
}
