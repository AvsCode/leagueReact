import request from 'request-promise';

class ApiCaller {
    getAllChampions(){
        // return request({method: 'GET', uri: 'http://avsean-leaguereact.us-west-2.elasticbeanstalk.com/champions'});
        return request({method: 'GET', uri: 'http://localhost:8080/champions'});
    }
}

export default new ApiCaller();
