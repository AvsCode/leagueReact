import {createStore, applyMiddleware} from 'redux';
// import { composeWithDevTools } from 'remote-redux-devtools';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState){
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk)
    );
}

// export default function configureStore(initialState){
//     return createStore(
//         rootReducer,
//         initialState, composeWithDevTools(applyMiddleware(thunk))
//     );
// }
