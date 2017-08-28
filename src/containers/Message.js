import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as message from 'actions/message';
/*组件*/
import { Header,Nologin } from 'components/Common/Index';
import List from 'components/Message/list';

@connect(
    state => state,
    dispatch => bindActionCreators({...message}, dispatch)
)
export default class Message extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount(){
		if(this.props.global.accesstoken){
			this.props.getMessage(this.props.global.accesstoken)
			this.props.getMessagecount(this.props.global.accesstoken)
		}
	}
	componentWillReceiveProps(nextProps){
		// if(nextProps.global.success !== this.props.global.success){
		// 	this.props.getUser(nextProps.global.loginname)
		// }
	}
	render() {
		let {success} = this.props.global
		let {data} = this.props.message.data
		return(
			<div className="main">
				<Header title="消息" leftto="kong"/>
				{
					success ? !isEmpty(data)&&<Main {...this.props} /> : <Nologin />
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
		let {has_read_messages,hasnot_read_messages} = this.props.message.data.data
		let {tab ,num} = this.props.message
		let handleClick = this.props.handleClick
		let cleft = "left"
		let cright = "right"
		if(tab == 1 ){
			cleft+=" on"
		}
		if(tab == 2 ){
			cright+=" on"
		}
		console.log(num)
		return(
			<div className="main-z message">
				<div className="top">
					<div className={cleft} onClick={() => { this.props.setTabm(1) } }>
						已读消息
					</div>
					<div className={cright} onClick={() => { this.props.setTabm(2), this.props.postMessage(this.props.global.accesstoken)} }>
						未读消息{{num}>0&&<span>{num}</span>}
					</div>
				</div>
				{
					tab == 1 && <List list={has_read_messages} />
				}
				{
					tab == 2 && <List list={hasnot_read_messages} />
				}
			</div>
		)
	}
}