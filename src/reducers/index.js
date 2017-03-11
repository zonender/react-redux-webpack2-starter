    import {combineReducers} from 'redux';
    import courses from './courseReducer';

    const rootReducer = combineReducers({
      courses //this is called a shorthand property name
    });

    export default rootReducer;
