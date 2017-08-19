import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import queryString from 'query-string';
/*actions*/
import * as indexList from 'actions/indexList';
import Header from 'components/Topic/Header'

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
    }

    componentWillMount() {
        let {selectedTab} = this.props.indexList;
        let { topics } = this.props.indexList.tabData;
        console.log(this.props.indexList)
        if (topics.length === 0) {
            this.props.getList(selectedTab);
        }
    }
    componentWillReceiveProps(newProps) {
        if (newProps.location.search !== this.props.location.search) {
            //url改变
            let tab = queryString.parse(this.props.history.location.search).tab || 'all';
            //newProps.selectTab(tab)
            // this.props.selectTab(tab);
            // let {selectedTab} = newProps.indexList;
            this.props.getList(tab);
        }
        // //url改变
        // let tab = queryString.parse(this.props.history.location.search).tab || 'all';
        // this.props.selectTab(tab);
        // if (newProps.indexList.selectedTab !== this.props.indexList.selectedTab) {
        //     let {selectedTab} = newProps.indexList;
        //     this.props.getList(selectedTab);
        // }
    }
    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
    }
    render() {
        const { topics } = this.props.indexList.tabData;
        console.log(this.props)
    	return(
            <div>
            <Header {...this.props}/>
            <div>
                {
                !isEmpty(topics) &&
                topics.data.map((ele, index) => {
                    return (
                        <div key={index}>
                        {ele.title}
                        <i className="iconfont icon-fanhui"></i>
                        </div>

                    )
                })
                }
            </div>
    		</div>
    	)
    }
}