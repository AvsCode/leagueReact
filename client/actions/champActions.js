class ChampActions{
    getAllChampions(allChampions){
        return {
            type: 'GET_ALL_CHAMPIONS',
            data: allChampions.data
        };
    }
}
export default new ChampActions();
