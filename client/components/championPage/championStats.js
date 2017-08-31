import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionStats extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentLevel: 1,
        displayLevel: 1};
        this.buildStats = this.buildStats.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
        this.handleSlideChange = this.handleSlideChange.bind(this);
    }
    stats(){
        let stats = this.props.stats;
        let attackSpeed = .625 / (1 + stats.attackspeedoffset);
        let attackSpeedPerLevel = ( stats.attackspeedperlevel / 100) * attackSpeed;
        let levelMultiplier = this.state.currentLevel - 1;
        return(
            <table>
                <tbody>
                  <tr>
                    <th>Category</th>
                    <th>Base Stats</th>
                    <th>Stats at level: {this.state.currentLevel}</th>
                  </tr>
                  <tr>
                      <th>Attack</th>
                      <th></th>
                      <th></th>
                  </tr>
                  <tr>
                      <td>Attack Damage: </td>
                      <td>{stats.attackdamage.toFixed(2)} (+{stats.attackdamageperlevel.toFixed(2)})</td>
                      <td>{(stats.attackdamage + stats.attackdamageperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Attack Speed: </td>
                      <td>{ attackSpeed.toFixed(2) } (+{attackSpeedPerLevel.toFixed(2)})</td>
                      <td>{(attackSpeed + attackSpeedPerLevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Attack Range: </td>
                      <td>{stats.attackrange} </td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>Critical Strike: </td>
                      <td>{stats.crit} (+{stats.critperlevel})</td>
                      <td>{(stats.crit + stats.critperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <th>Defense</th>
                      <th></th>
                      <th></th>
                  </tr>
                  <tr>
                      <td>HP: </td>
                      <td>{stats.hp} (+{stats.hpperlevel})</td>
                      <td>{(stats.hp + stats.hpperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>HP Regen: </td>
                      <td>{stats.hpregen.toFixed(2)} (+{stats.hpregenperlevel})</td>
                      <td>{(stats.hpregen + stats.hpregenperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Armor: </td>
                      <td>{stats.armor} (+{stats.armorperlevel})</td>
                      <td>{(stats.armor + stats.armorperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>Magic Resist: </td>
                      <td>{stats.spellblock} (+{stats.spellblockperlevel})</td>
                      <td>{(stats.spellblock + stats.spellblockperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <th>Utility</th>
                      <th></th>
                      <th></th>
                  </tr>
                  <tr>
                      <td>Move Speed: </td>
                      <td>{stats.movespeed}</td>
                      <td></td>
                  </tr>
                  <tr>
                      <td>MP: </td>
                      <td>{stats.mp} (+{stats.mpperlevel})</td>
                      <td>{(stats.mp + stats.mpperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
                  <tr>
                      <td>MP Regen:</td>
                      <td>{stats.mpregen} (+{stats.mpregenperlevel})</td>
                      <td>{(stats.mpregen + stats.mpregenperlevel * levelMultiplier).toFixed(2)}</td>
                  </tr>
              </tbody>
          </table>
        )
    }
    handleSlideChange(e){
      this.setState(Object.assign(this.state, {displayLevel: e.target.value}));
    }
    handleLevelChange(e){
      this.setState(Object.assign(this.state, {currentLevel: this.state.displayLevel}));
    }
    buildStats(){
        let keys = Object.keys(this.props.stats);
        return keys.map((key) => {
            return(<p key={key}>{key.toUpperCase()}: {this.props.stats[key]}</p>);
        });
    }
    render(){
        return(
            <div className='championStats'>
              <div className='championStatsLevelSlider'>
                <input className='levelSelector' onChange={this.handleSlideChange} onMouseUp={this.handleLevelChange} type='range' min='1' max='18' step='1' defaultValue='1'/>
                <p>Current Level: {this.state.displayLevel}</p>
              </div>
              {this.stats()}
            </div>
        )
    }
}

ChampionStats.propTypes = {
    stats: PropTypes.object.isRequired
}
