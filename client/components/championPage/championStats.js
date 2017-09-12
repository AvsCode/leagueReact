import React from 'react';
import PropTypes from 'prop-types';
import TableHead from '../genericComponents/tableHead.jsx';
import TableRow from '../genericComponents/tableRow.jsx';

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
                    <TableHead headTitle={'Attack'} />
                        <TableRow stat={'Attack Damage'} statValue={stats.attackdamage} perLevel={stats.attackdamageperlevel} levelMultiplier={levelMultiplier} />
                        <TableRow stat={'Attack Speed'} statValue={attackSpeed} perLevel={attackSpeedPerLevel} levelMultiplier={levelMultiplier} />
                        <TableRow stat={'Attack Range'} statValue={stats.attackRange} />
                        <TableRow stat={'Critical Strike'} statValue={stats.crit} perLevel={stats.critperlevel} levelMultiplier={levelMultiplier} />
                    <TableHead headTitle={'Defense'} />
                        <TableRow stat={'HP'} statValue={stats.hp} perLevel={stats.hpperlevel} levelMultiplier={levelMultiplier}/>
                        <TableRow stat={'HP Regen'} statValue={stats.hpregen} perLevel={stats.hpregenperlevel} levelMultiplier={levelMultiplier} />
                        <TableRow stat={'Armor'} statValue={stats.armor} perLevel={stats.armorperlevel} levelMultiplier={levelMultiplier} />
                        <TableRow stat={'Magic Resist'} statValue={stats.spellblock} perLevel={stats.spellblockperlevel} levelMultiplier={levelMultiplier} />
                    <TableHead headTitle={'Utility'} />
                        <TableRow stat={'Move Speed'} statValue={stats.movespeed} />
                        <TableRow stat={'MP'} statValue={stats.mpperlevel} perLevel={stats.mpperlevel} levelMultiplier={levelMultiplier} />
                        <TableRow stat={'MP Regen'} statValue={stats.mpregen} perLevel={stats.mpregenperlevel} levelMultiplier={levelMultiplier} />
              </tbody>
          </table>
        );
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
