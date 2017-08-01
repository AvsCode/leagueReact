import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import champActions from '../actions/champActions';

class ChampPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
            <h1>Hello from Champs</h1>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    console.log(state);
    return state;
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(champActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChampPage);
