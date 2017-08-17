import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionStats extends React.Component{
    constructor(props){
        super(props);
        this.state = {currentLevel: 1};
        this.buildStats = this.buildStats.bind(this);
        this.handleLevelChange = this.handleLevelChange.bind(this);
    }
    stats(){
        let stats = this.props.stats;
        let attackSpeed = .625 / (1 + stats.attackspeedoffset);
        let attackSpeedPerLevel = ( stats.attackspeedperlevel / 100) * attackSpeed;
        return(
            <table>
                <tbody>
                    <tr>
                        <th>Attack</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Attack Damage: </td>
                        <td>{stats.attackdamage.toFixed(2)} (+{stats.attackdamageperlevel.toFixed(2)})</td>
                    </tr>
                    <tr>
                        <td>Attack Speed: </td>
                        <td>{ attackSpeed.toFixed(2) } (+{attackSpeedPerLevel.toFixed(2)})</td>
                    </tr>
                    <tr>
                        <td>Attack Range: </td>
                        <td>{stats.attackrange} </td>
                    </tr>
                    <tr>
                        <td>Critical Strike: </td>
                        <td>{stats.crit} (+{stats.critperlevel})</td>
                    </tr>
                    <tr>
                        <th>Defense</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>HP: </td>
                        <td>{stats.hp} (+{stats.hpperlevel})</td>
                    </tr>
                    <tr>
                        <td>HP Regen: </td>
                        <td>{stats.hpregen.toFixed(2)} (+{stats.hpregenperlevel})</td>
                    </tr>
                    <tr>
                        <td>Armor: </td>
                        <td>{stats.armor} (+{stats.armorperlevel})</td>
                    </tr>
                    <tr>
                        <td>Magic Resist: </td>
                        <td>{stats.spellblock} (+{stats.spellblockperlevel})</td>
                    </tr>
                    <tr>
                        <th>Utility</th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>Move Speed: </td>
                        <td>{stats.movespeed}</td>
                    </tr>
                    <tr>
                        <td>MP: </td>
                        <td>{stats.mp} (+{stats.mpperlevel})</td>
                    </tr>
                    <tr>
                        <td>MP Regen:</td>
                        <td>{stats.mpregen} (+{stats.mpregenperlevel})</td>
                    </tr>
                </tbody>
            </table>
        )
    }
    handleLevelChange(e){
        if(e.target.value != this.state.currentLevel){
            this.setState({currentLevel: e.target.value});
        }
    }

    buildStats(){
        let keys = Object.keys(this.props.stats);
        return keys.map((key) => {
            return(<p key={key}>{key.toUpperCase()}: {this.props.stats[key]}</p>);
        });
    }
    render(){
        return(
            <div>
                {this.stats()}
                <input id='levelSelector' onMouseUp={this.handleLevelChange} type='range' min='1' max='18' step='1' defaultValue='1'/>
                <p>Current Level: {this.state.currentLevel}</p>
            </div>
        )
    }
}

ChampionStats.propTypes = {
    stats: PropTypes.object.isRequired
}
