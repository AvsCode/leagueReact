import initialViewState from './initialViewState.js';

export default function viewReducer(state = initialViewState, action){
    switch(action.type){
        case 'FILTER_CHAMPIONS':
            let tempState = Object.assign({}, state);
            console.log(tempState);
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
