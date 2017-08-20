import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
/*actions*/
import * as indexList from 'actions/indexList';

/*组件*/
import Header from 'components/IndexList/Header';
import List from 'components/IndexList/List';
import {Loading} from 'components/Common/Index';

@connect(
    state => state,
    dispatch => bindActionCreators({...indexList}, dispatch)
)
export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        //构造函数用法
        //常用来绑定自定义函数，切记不要在这里或者组件的任何位置setState，state全部在reducer初始化，相信对开发的后期很有帮助
        //例子：this.myfunction = this.myfunction.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.scroll = this.scroll.bind(this)
        this.loadmore = this.loadmore.bind(this)
    }

    componentWillMount () {
        let {selectedTab , tabData} = this.props.indexList;
        let { topics } = tabData;
        if (topics.length === 0) {
            this.props.getList(selectedTab);
        }
    }
    componentWillReceiveProps(newProps) {
        //props改变触发此函数
        if (newProps.location.search !== this.props.location.search) {
            //url改变
            let tab = queryString.parse(this.props.history.location.search).tab || 'all';
            //发起请求
            this.props.getList(tab);
        }
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
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
            this.props.recordScrollT(scrollT);
            this.props.getList(selectedTab,1,num);
        }
        
    }
    render() {
        let { topics } = this.props.indexList.tabData;
        let { tabData } = this.props.indexList
        console.log(this.props)
        return(
            <div className="main">
                <Header {...this.props}/>
                <div ref={(ref) => this.mylistdiv = ref} className="list-box" onScroll={this.scroll}>
                   <div ref={(ref) => this.mylist = ref} className="list-boxz">
                       {
                        tabData.isFecthing ? <Loading /> : !isEmpty(topics) &&topics.data.map((ele, index) => {
                                                                                return (
                                                                                    <List key={index} {...ele} />
                                                                                )
                                                                            })
                       }
                       {
                            !tabData.isFecthing && <Loading />
                       }
                       
                   </div>
                </div>
            </div>
        )
    }
}


