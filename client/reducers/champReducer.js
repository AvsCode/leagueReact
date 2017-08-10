export default function champReducer(state = {}, action){
    switch(action.type){
        case 'GET_ALL_CHAMPIONS':
            let tempData = action.data;
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}
