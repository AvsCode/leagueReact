import initialViewState from './initialViewState.js';

export default function viewReducer(state = initialViewState, action){
    switch(action.type){
        case 'FILTER_CHAMPIONS':
            let tempState = Object.assign({}, state);
            tempState.selectedOption = action.data;
            return tempState;
        default:
            return state;
    }
}
