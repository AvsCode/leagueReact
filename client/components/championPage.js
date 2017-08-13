import React from 'react';
import { connect } from 'react-redux';

class ChampionPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      console.log(this.props);
    return(
        <div className='championContainer' style={{backgroundImage:  `url(${this.props.champion.splashArt[0]})`}}>
            <h1>{this.props.champion.name}</h1>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps){
    return{
        view: state.view,
        champion: state.champions.champions[state.view.selectedChampion]
    }
}

export default connect(mapStateToProps)(ChampionPage);
