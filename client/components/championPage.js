import React from 'react';
import { connect } from 'react-redux';

class ChampionPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      console.log(this.props);
    return(
        <div>
            <h1>{this.props.champion.name}</h1>
            <img src={this.props.champion.splashArt[0]}></img>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    console.log(state.view.selectedView);
    return{
        view: state.view,
        champion: state.champions.champions[state.view.selectedChampion]
    }
}

export default connect(mapStateToProps)(ChampionPage)
