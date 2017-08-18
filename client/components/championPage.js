import React from 'react';
import { connect } from 'react-redux';
import Carousel from './championPage/carousel.js';
import ChampionStats from './championPage/championStats.js';

class ChampionPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
      console.log(this.props);
    return(
        <div className='championContainer'>
            <h1>{this.props.champion.name}</h1>
            <Carousel skins={this.props.champion.skins} images={this.props.champion.splashArt}/>
            <ChampionStats stats={this.props.champion.stats} />
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
