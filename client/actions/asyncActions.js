import apiCaller from '../helpers/apiCaller.js';
import champActions from './champActions.js';

class asyncActions{
    getAllChampions(){
        return function(dispatch){
            return apiCaller.getAllChampions().then((res) => {
                dispatch(champActions.getAllChampions(JSON.parse(res)));
            });
        }
    }
}

export default new asyncActions();
