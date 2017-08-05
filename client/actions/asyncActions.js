import apiCaller from '../helpers/apiCaller.js';
import champActions from './champActions.js';

class asyncActions{
    getAllChampions(){
        return function(dispatch){
            return apiCaller.getAllChampions().then((res) => {
                let parsedResponse = JSON.parse(res);
                dispatch(champActions.getAllChampions({champions: parsedResponse.data,
                champNames: parsedResponse.champNames}));
            });
        }
    }
}

export default new asyncActions();
