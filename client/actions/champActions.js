class ChampActions{
    getAllChampions(allChampions){
        console.log(allChampions);
        return {
            type: 'GET_ALL_CHAMPIONS',
            data: allChampions
        };
    }
}
export default new ChampActions();
