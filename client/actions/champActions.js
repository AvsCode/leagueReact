class ChampActions{
    getAllChampions(allChampions){
        return {
            type: 'GET_ALL_CHAMPIONS',
            data: allChampions
        };
    }
}
export default new ChampActions();

// function champActions(){
//     this.getAllChampions = function(allChampions){
//       return {
//         type: 'GET_ALL_CHAMPIONS',
//         data: allChampions
//       }
//     }
// }
//
// export default new champActions();
