import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as topic from 'actions/topic';

/*组件*/
import Header from 'components/Topic/Header';
import Comment from 'components/Topic/Comment';
import {Loading , Head} from 'components/Common/Index';


@connect(
    state => state,
    dispatch => bindActionCreators({...topic}, dispatch)
)
export default class Publish extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){

	}
	render() {
		return(
			<div className="main">
				111
			</div>
		)
	}
}
