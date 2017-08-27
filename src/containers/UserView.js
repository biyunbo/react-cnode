import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate,removeData } from 'utils/cookie';

/*actions*/
import * as global from 'actions/global';
import * as user from 'actions/user';

/*组件*/
import { Header } from 'components/Common/Index';
import Login from 'containers/Login';
import List from 'components/Userview/list';



@connect(
    state => state,
    dispatch => bindActionCreators({...global,...user}, dispatch)
)
export default class Userview extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}
	componentWillMount(){
		let {success} = this.props.global
		if(success){
			this.props.getUser(this.props.global.loginname)
		}
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.global.success !== this.props.global.success){
			this.props.getUser(nextProps.global.loginname)
		}
	}
	handleClick(){
		this.props.loginOut();
		removeData("access_token");
	}
	render() {
		let {success} = this.props.global
		let {data} = this.props.user.data

		return(
			<div className="main">
			{
				success ? !isEmpty(data)&&<Main {...this.props} handleClick={this.handleClick} /> : <Login />
			}
			</div>
		)
	}
}

//个人中心主体
class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {avatar_url,create_at,loginname,score,recent_replies,recent_topics} = this.props.user.data.data
		let {tab} = this.props.user
		let handleClick = this.props.handleClick
		let cleft = "left"
		let cright = "right"
		if(tab == 1 ){
			cleft+=" on"
		}
		if(tab == 2 ){
			cright+=" on"
		}
		return(
			<div className="main usercenter">
				<Header title="个人中心" leftto="kong"/>
				<div className="main-z">
					<div className="tou">
						<img src={avatar_url} />
					</div>
					<div className="name">{loginname}</div>
					<div className="personal">
						<div className="left">
							积分：{score}
						</div>
						<div className="right">
							注册于：{formatDate(create_at)}
						</div>
					</div>
					<div className="content">
						<div className={cleft} onClick={() => { this.props.setTab(1) } }>主题</div>
						<div className={cright} onClick={() => { this.props.setTab(2) } }>回复</div>
					</div>
					{
						tab == 1 && <List list={recent_topics} />
					}
					{
						tab == 2 && <List list={recent_replies} />
					}
					<div className="out" onClick={handleClick}>退出</div>
				</div>
			</div>
		)
	}
}
