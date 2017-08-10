import initialViewState from './initialViewState.js';

export default function viewReducer(state = initialViewState, action){
    let tempState;
    switch(action.type){
        case 'FILTER_CHAMPIONS':
        tempState = Object.assign({}, state);
        tempState.selectedOption = action.data;
        return tempState;

        case 'SELECT_CHAMPION':
        tempState = Object.assign({}, state);
        tempState.selectedChampion = action.data;
        return tempState;

        default:
        return state;
    }
}
