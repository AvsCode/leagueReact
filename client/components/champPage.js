import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import champActions from '../actions/champActions';
import viewActions from '../actions/viewActions';
import Champ from "./champPage/champ";
import ChampSelector from './champPage/champSelector';

class ChampPage extends React.Component{
    constructor(props){
        super(props);
        this.StateFlagger = false;
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
        console.log(this.props);
        return this.props.champNames.map((name) => {
            return <Champ key={name} image={this.props.champions[name].smallImage}
                name={this.props.champions[name].name} />;
        });
    }

    render(){
        this.checkState();
        if(!this.StateFlagger){
            return(<div></div>)
        }
        return(
            <div>
                <ChampSelector options={this.props.view.selectOptions}/>
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
    return{
        actions: bindActionCreators({champActions, viewActions}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampPage);
