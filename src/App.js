import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {NavLink, Route, HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory()

/*
 全局导入less
 */
import './iconfont/iconfont.css'
import './app.less'
import './components/IndexList/index.less'
import './components/Topic/index.less'

import * as indexList from 'actions/indexList';
import * as global from 'actions/global';
import { asyncComponent } from './AsyncComponent';

import IndexList from 'containers/IndexList';
import {Footer} from 'components/Common/Index';
// import Topic from 'containers/Topic';

const Topic = asyncComponent(() => import(/* webpackChunkName: "Topic" */ "./containers/Topic"))

@connect (
    state => state,
    dispatch => bindActionCreators({...global}, dispatch)
)
export default class App extends React.Component {
    render() {
        return (
              <Router history={history}>
                  <Route render={({ location }) => {
                      return(
                        <div key={location.pathname} className="box">
                            <Route location={location} exact path="/" component={IndexList} />
                            <Route location={location} path="/Topic/:id" component={Topic} />
                            <Footer />
                        </div>
                      )
                  }}/>
                  
              </Router>

        );
    }
}