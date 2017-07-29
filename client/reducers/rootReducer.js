import {combineReducers} from 'redux';
import champReducer from './champReducer.js';

//The property name supplied as the reducer will impact the aliasing of state inside the container components - in this case we are aliasing our champReducer as champions
const rootReducer = combineReducers({
    champions: champReducer
});

export default rootReducer;
