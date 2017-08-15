import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory()

/*
 全局导入less
 */
import * as indexList from 'actions/indexList';
import { asyncComponent } from './AsyncComponent'

import IndexList from 'containers/IndexList/IndexList'

//const Topic = asyncComponent(() => import(/* webpackChunkName: "Topic" */ "./containers/Topic/Topic"))

@connect (
    state => state,
    dispatch => bindActionCreators({...indexList}, dispatch)
)
export default class App extends React.Component {
    render() {
        return (
              <Router history={history}>
                  <Route render={({ location }) => {
                      return(
                        <div key={location.pathname}>
                            <Route location={location} exact path="/" component={IndexList} />
                            
                        </div>
                      )
                  }}/>
              </Router>
        );
    }
}