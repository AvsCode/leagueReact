class ViewActions{
    filterChampions(selectOption){
        return {
            type: 'FILTER_CHAMPIONS',
            data: selectOption
        };
    }
}
export default new ViewActions();
