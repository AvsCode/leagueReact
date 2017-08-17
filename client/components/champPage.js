import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterChampions, selectChampion, searchChampions } from '../actions/viewActions.js';
import Champ from "./champPage/champ";
import ChampSelector from './champPage/champSelector';
import ChampSearch from './champPage/champSearch';


class ChampPage extends React.Component{
    constructor(props){
        super(props);
        this.StateFlagger = false;
        this.selectChamp =  this.selectChamp.bind(this);
        this.filterChamps = this.filterChamps.bind(this);
        this.searchChamps = this.searchChamps.bind(this);
    }
    checkState(){
        if(this.props.champions){
            this.StateFlagger = true;
        }
        else{
            this.StateFlagger = false;
        }
    }
    buildChamps(){
        this.props.champNames.sort();
        let filteredInput = this.filterByInput(this.props.champNames, this.props.view.searchValue);
        if(this.props.view.selectedOption === 'All'){
            return filteredInput.map((name) => {
                let currentChamp = this.props.champions[name];
                return <Champ key={name} image={currentChamp.smallImage}
                    name={currentChamp.name} tags={currentChamp.tags}
                    clickHandler={this.selectChamp} champion={currentChamp}/>;
            });
        }
        return filteredInput.map((name) => {
            let currentChamp = this.props.champions[name];
            if(currentChamp.tags.includes(this.props.view.selectedOption)){
                return <Champ key={name} image={currentChamp.smallImage}
                    name={currentChamp.name} tags={currentChamp.tags}
                    clickHandler={this.selectChamp} champion={currentChamp}/>;
            }
        });
    }
    filterByInput(arr, input){
        let filterArr = [];
        for(let i = 0; i < arr.length; i++){
            let tempString = arr[i];
            let match = true;
            let k = 0;
            while(k < input.length && match){
                if(tempString[k].toUpperCase() != input[k].toUpperCase()){
                    match = false;
                }
                else{
                    k++;
                }
            }
            if(match){
                filterArr.push(tempString);
            }
        }
        return filterArr;
    }
    filterChamps(optionValue){
        this.props.actions.filterChampions(optionValue);
    }
    searchChamps(searchValue){
        this.props.actions.searchChampions(searchValue);
    }
    selectChamp(champName){
        this.props.actions.selectChampion(champName);
    }
    render(){
        this.checkState();
        if(!this.StateFlagger){
            return(<div></div>)
        }
        return(
            <div>
                <div className='champNav'>
                    <ChampSelector change={this.filterChamps} options={this.props.view.selectOptions}/>
                    <ChampSearch change={this.searchChamps} />
                </div>
                <div className='champContainer'>
                    {this.buildChamps()}
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, ownProps){
    return {
        champions : state.champions.champions,
        champNames: state.champions.champNames,
        view: state.view
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators({ filterChampions, selectChampion, searchChampions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampPage);
