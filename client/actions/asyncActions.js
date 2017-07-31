import apiCaller from '../helpers/apiCaller.js';
import champActions from './champActions.js';

class asyncActions{
    getAllChampions(){
        return function(dispatch){
            return apiCaller.getAllChampions().then((res) => {
                console.log(res);
                // if(res.status.status_code === 403){
                //     console.log(res.status);
                // }
                // else{
                //
                // }
                dispatch(champActions.getAllChampions({firstChamp: { name: 'aatrox'}, secondChamp: { name: 'notAATROX'}}));
            });
        }
    }
}

export default new asyncActions();
