import React from 'react';
import { connect } from 'react-redux';
import Carousel from './championPage/carousel.js';
import ChampionStats from './championPage/championStats.js';
import ChampionInfo from './championPage/championInfo.js';
import ChampionSpell from './championPage/championSpell.js';

class ChampionPage extends React.Component{
  constructor(props){
    super(props);
    this.sanitizedLore;
  }

  sanitizeLore(){
      this.sanitizedLore = this.props.champion.lore.replace(/(<br>)/g, ' ');
  }
  render(){
      this.sanitizeLore();
      console.log(this.props);
    return(
        <div className='championContainer'>
            <Carousel skins={this.props.champion.skins} images={this.props.champion.splashArt}/>
            <ChampionInfo name={this.props.champion.name}  title={this.props.champion.title} info={this.props.champion.info} lore={this.sanitizedLore}/>
            <ChampionStats stats={this.props.champion.stats} />
            <ChampionSpell spell={this.props.champion.spells[0]} />
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
