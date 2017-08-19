import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

/*actions*/
import * as indexList from 'actions/indexList';


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
    	console.log(this.props)
        const { topics } = this.props.indexList.tabData
        if (topics.length === 0) {
            this.props.getList("job");
        }
    }

    handleClick() {
        //该函数用来执行组件内部的事件，比如在这里就是nav组件菜单的导航点击事件
        // this.props.history.push('/')
    }
    render() {
    	return(
    		<div>indexList</div>
    	)
    }
}

// function Topic (state){
// 	return{
// 		state : state
// 	}
// }
// export default connect(Topic,indexList)(HomeContainer)