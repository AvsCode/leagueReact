export default function ViewActions(selectOption){
  return{
    type: 'FILTER_CHAMPIONS',
    data: selectOption
  }
}
