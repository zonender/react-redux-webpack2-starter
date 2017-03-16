import {combineReducers} from 'redux';
import courses from './courseReducer';
import {routerReducer} from 'react-router-redux';

//"courses" is called a shorthand property name
const rootReducer = combineReducers({
  courses,
  routing: routerReducer
});

export default rootReducer;
