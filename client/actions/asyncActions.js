import apiCaller from '../helpers/apiCaller.js';
import champActions from './champActions.js';

class asyncActions{
    getAllChampions(){
        return function(dispatch){
            return apiCaller.getAllChampions().then((res) => {
                let parsedReturn = JSON.parse(res);
                dispatch(champActions.getAllChampions({champions: parsedReturn.data,
                champNames: parsedReturn.champNames}));
            });
        }
    }
}

export default new asyncActions();
