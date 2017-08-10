import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterChampions, selectChampion } from '../actions/viewActions.js';
import Champ from "./champPage/champ";
import ChampSelector from './champPage/champSelector';


class ChampPage extends React.Component{
    constructor(props){
        super(props);
        this.StateFlagger = false;
        this.filterChamps = this.filterChamps.bind(this);
        this.selectChamp =  this.selectChamp.bind(this);
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
        console.log(this.props.view.selectedOption);
        if(this.props.view.selectedOption === 'All'){
            return this.props.champNames.map((name) => {
                let currentChamp = this.props.champions[name];
                return <Champ key={name} image={currentChamp.smallImage}
                    name={currentChamp.name} tags={currentChamp.tags}
                    clickHandler={this.selectChamp} champion={currentChamp}/>;
            });
        }
        return this.props.champNames.map((name) => {
            let currentChamp = this.props.champions[name];
            if(currentChamp.tags.includes(this.props.view.selectedOption)){
                return <Champ key={name} image={currentChamp.smallImage}
                    name={currentChamp.name} tags={currentChamp.tags}
                    clickHandler={this.selectChamp} champion={currentChamp}/>;
                }
            });
        }

        filterChamps(optionValue){
            this.props.actions.filterChampions(optionValue);
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
                    <ChampSelector change={this.filterChamps} options={this.props.view.selectOptions}/>
                    {this.buildChamps()}
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
            actions: bindActionCreators({ filterChampions, selectChampion }, dispatch)
        };
    }

    export default connect(mapStateToProps, mapDispatchToProps)(ChampPage);
