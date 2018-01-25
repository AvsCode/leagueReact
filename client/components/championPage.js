import React from 'react';
import { connect } from 'react-redux';
import Carousel from './championPage/carousel.js';
import ChampionStats from './championPage/championStats.js';
import ChampionInfo from './championPage/championInfo.js';
import ChampionSpell from './championPage/championSpell.js';

class ChampionPage extends React.Component {
    constructor(props) {
        super(props);
        this.sanitizedLore;
        this.sanitizedBlurb;
    }

    sanitizeLore() {
        this.sanitizedLore = this.props.champion.lore.replace(/(<br>)/g, ' ');
        this.sanitizedBlurb = this.props.champion.blurb.replace(/(<br>)/g, ' ');
    }
    buildSpells() {
        return this.props.champion.spells.map((spell) => {
            return <ChampionSpell spell={spell} key={spell.name} />
        });
    }
    buildSkinNames() {
        this.props.champion.skins = this.props.champion.skins.map((skinName) => {
            return skinName.name === 'default' ? `${this.props.champion.key}` : skinName.name
        });
    }
    render() {
        this.sanitizeLore();
        this.buildSkinNames();
        return (
            <div className='championContainer'>
                <Carousel skins={this.props.champion.skins} images={this.props.champion.splashArt} />
                <ChampionInfo name={this.props.champion.name} title={this.props.champion.title} info={this.props.champion.info} lore={this.sanitizedLore} blurb={this.sanitizedBlurb} />
                <ChampionStats stats={this.props.champion.stats} />
                <div className='spellContainer'>
                    <h2>Abilities: </h2>
                    {this.buildSpells()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        view: state.view,
        champion: state.champions.champions[state.view.selectedChampion]
    }
}

export default connect(mapStateToProps)(ChampionPage);
