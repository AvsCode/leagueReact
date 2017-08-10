export default {
    getAllChampions: function(allChampions){
        return {
            type: 'GET_ALL_CHAMPIONS',
            data: allChampions
        }
    }
}
