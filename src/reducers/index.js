import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import { indexList } from './indexList';
import { topic } from './topic';
import { global } from './global';
import { user } from './user';
import { message } from './message';
import { publish } from './publish';



//注册reducer，每个自定义的reducer都要来这里注册！！！不注册会报错。
const rootReducer = combineReducers({
  routing: routerReducer,
  /* your reducers */
  global,
  indexList,
  topic,
  user,
  message,
  publish
});

export default rootReducer;
