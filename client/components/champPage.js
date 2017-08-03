import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import champActions from '../actions/champActions';
import Champ from "./champPage/champ";

class ChampPage extends React.Component{
    constructor(props){
        super(props);
        this.StateFlagger = false;
    }

    stateChecker(){
        if(this.props.champions.champions){
            this.StateFlagger = true;
        }
        else{
            this.StateFlagger = false;
        }
    }

    champBuilder(){
        return this.props.champions.champNames.map((name) => {
            return <Champ image={this.props.champions.champions[name].smallImage}
            name={this.props.champions.champions[name].name} />;
        });
    }

    render(){
        this.stateChecker();
        if(!this.StateFlagger){
            return(<div></div>)
        }
        return(
            <div>
                {this.champBuilder()}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return state;
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(champActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampPage);
