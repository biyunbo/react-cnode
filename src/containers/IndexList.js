import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
/*actions*/
import * as indexList from 'actions/indexList';
import * as global from 'actions/global';

/*组件*/
import Header from 'components/IndexList/Header';
import List from 'components/IndexList/List';
import {Loading} from 'components/Common/Index';

import { readData } from 'utils/cookie'

@connect(
    state => state,
    dispatch => bindActionCreators({...indexList,...global}, dispatch)
)
export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.scroll = this.scroll.bind(this);
        this.loadmore = this.loadmore.bind(this);
    }

    componentWillMount () {
        let {selectedTab , tabData} = this.props.indexList;
        let { topics } = tabData;
        //判断是否登录
        if(readData("access_token")){
            this.props.postAccessToken(readData("access_token"));
        }
        if (topics.length === 0) {
            this.props.getList(selectedTab);
        }
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
        if (newProps.location.search !== this.props.location.search) {
            //url改变
            let tab = queryString.parse(this.props.history.location.search).tab || 'all';
             this.props.selectTab(tab);
            //发起请求
            this.props.getList(tab);
        }
    }
    scroll() {
        if(this.mylistdiv != null){
            //console.log(this.mylistdiv.scrollTop,this.mylistdiv.offsetHeight,this.mylist.offsetHeight)
            if (this.mylistdiv.scrollTop + this.mylistdiv.offsetHeight  >= this.mylist.offsetHeight) {
                this.loadmore(this.mylistdiv.scrollTop);
            }
        }

    }
    loadmore(scrollT) {
        let {tabData , selectedTab} = this.props.indexList;
        let num = this.props.indexList.tabData.limit;
        num = num + 10;
        if (!tabData.isFecthing) {
            //this.props.recordScrollT(scrollT);
            this.props.getList(selectedTab,1,num);
        }
        
    }
    render() {
        let { topics } = this.props.indexList.tabData;
        let { tabData } = this.props.indexList
        return(
            <div className="main">
                <Header {...this.props}/>
                <div ref={(ref) => this.mylistdiv = ref} className="list-box" onScroll={this.scroll}>
                   <div ref={(ref) => this.mylist = ref} className="list-boxz">
                        {
                            topics.length === 0 && <Loading /> 
                        }
                        {
                            !isEmpty(topics) && <List {...this.props} />
                        }
                   </div>
                </div>
            </div>
        )
    }
}


