// let viewActions = {
//     filterChampions: function(selectOption){
//         return {
//             type: 'FILTER_CHAMPIONS',
//             data: selectOption
//         }
//     }
// }
//
// export default viewActions;

export function filterChampions(selectOption){
    console.log(selectOption);
    return{
        type: 'FILTER_CHAMPIONS',
        data: selectOption
    }
}

export function selectChampion(champName){
    console.log(champName);
    return{
        type: 'SELECT_CHAMPION',
        data: champName
    }
}
