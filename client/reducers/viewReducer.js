import initialViewState from './initialViewState.js';

export default function viewReducer(state = initialViewState, action){
    let tempState = Object.assign({}, state);
    switch(action.type){
        case 'FILTER_CHAMPIONS':
        tempState.selectedOption = action.data;
        return tempState;

        case 'SELECT_CHAMPION':
        tempState.selectedChampion = action.data;
        return tempState;

        case 'SEARCH_CHAMPIONS':
        tempState.searchValue = action.data;
        return tempState;

        default:
        return state;
    }
}
