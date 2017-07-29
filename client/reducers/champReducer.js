export default function champReducer(state = {}, action){
    switch(action.type){
        case 'GET_ALL_CHAMPIONS':
            return Object.assign({}, state, action.data);

        default:
            return state;
    }
}
