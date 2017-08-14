export function filterChampions(selectOption){
    return{
        type: 'FILTER_CHAMPIONS',
        data: selectOption
    }
}

export function selectChampion(champName){
    return{
        type: 'SELECT_CHAMPION',
        data: champName
    }
}

export function searchChampions(searchValue){
    return{
        type: 'SEARCH_CHAMPIONS',
        data: searchValue
    }
}
