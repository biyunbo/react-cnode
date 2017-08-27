import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import { formatDate } from 'utils/cookie';

/*actions*/
import * as global from 'actions/global';
import * as publish from 'actions/publish';

/*组件*/
import { Header,Nologin } from 'components/Common/Index';


@connect(
    state => state,
    dispatch => bindActionCreators({...global,...publish}, dispatch)
)
export default class Publish extends React.Component {
	constructor(props) {
		super(props);
		this.tabInput = this.tabInput.bind(this)
		this.titleInput = this.titleInput.bind(this)
		this.contentInput = this.contentInput.bind(this)
		this.handleClick = this.handleClick.bind(this)
	}
	componentWillMount(){
		
	}
	componentWillReceiveProps(nextProps){
		if(nextProps.global.success !== this.props.global.success){
			this.props.getUser(nextProps.global.loginname)
		}
		if(nextProps.publish.success){
			this.props.history.push("/Topic/"+nextProps.publish.topic_id)
			this.props.publishTab("dev");
			this.props.publishTitle("")
			this.props.publishContent("")
		}
	}
	tabInput(e){
		this.props.publishTab(e.target.value)
	}
	titleInput(e){
		this.props.publishTitle(e.target.value)
	}
	contentInput(e){
		this.props.publishContent(e.target.value)
	}
	handleClick(){
		let {tab,title,content} = this.props.publish
		let {accesstoken} = this.props.global
		if(title.length < 10){
			return alert('标题字数10字以上');
		}else if(content.length < 20){
			return alert('内容字数20字以上');
		}else{
			this.props.postPublishTopics(accesstoken,tab,title,content)
		}
	}
	render() {
		let {success} = this.props.global
		return(
			<div className="main">
				<Header title="发布" leftto="kong"/>
				{
					success ? <Main {...this.props} handleClick={this.handleClick} tabInput={this.tabInput} titleInput={this.titleInput} contentInput={this.contentInput}/> : <Nologin />
				}
			</div>
		)
	}
}

//发布主体
class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		let {tab,title,content} = this.props.publish
		return(
			<div className="publish">
				<p>请选择发布类型</p>
				<select onInput={this.props.tabInput} defaultValue={tab}>
					<option value ="dev">测试</option>
					<option value ="ask">分享</option>
					<option value="share">问答</option>
					<option value="job">招聘</option>
				</select>
				<p>标题</p>
				<input defaultValue={title} onInput={this.props.titleInput} placeholder="标题字数 10 字以上"/>
				<p>内容</p>
				<textarea defaultValue={content} onInput={this.props.contentInput} placeholder="内容字数 20 字以上"></textarea>
				<div className="btn" onClick={this.props.handleClick}>发布</div>
			</div>
		)
	}
}