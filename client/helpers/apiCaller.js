import request from 'request-promise';

class ApiCaller {
    getAllChampions(){
        return request({method: 'GET', uri: 'http://localhost:5000/champions'});
    }
}

export default new ApiCaller();
