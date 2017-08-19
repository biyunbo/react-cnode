import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory()

/*
 全局导入less
 */
import './iconfont/iconfont.css'
import './app.less'

import * as indexList from 'actions/indexList';
import * as global from 'actions/global';
import { asyncComponent } from './AsyncComponent'

import Topic from 'containers/Topic';

//const Topic = asyncComponent(() => import(/* webpackChunkName: "Topic" */ "./containers/Topic/Topic"))

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
                        <div key={location.pathname}>
                            <Route location={location} exact path="/" component={Topic} />
                        </div>
                      )
                  }}/>
              </Router>
        );
    }
}