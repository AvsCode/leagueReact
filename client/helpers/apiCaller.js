import request from 'request-promise';

class ApiCaller {
    getAllChampions(){
        return request({method: 'GET', uri: 'http://localhost:5000/champions'});
    }
}

// class Helper {
//     getAllChampions(){
//         request.get('http://localhost:5000/champions', function(err, res, body) {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(body);
//             }
//         });
//     }
// }

export default new ApiCaller();
