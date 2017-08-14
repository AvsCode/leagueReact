import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionStats extends React.Component{
    constructor(props){
        super(props);
        this.buildStats = this.buildStats.bind(this);
    }

    buildStats(){
        let keys = Object.keys(this.props.stats);
        return keys.map((key) => {
            return(<p key={key}>{key.toUpperCase()}: {this.props.stats[key]}</p>);
        });
    }

    render(){
        return(
            <div>{this.buildStats()}</div>
        )
    }
}

ChampionStats.propTypes = {
    stats: PropTypes.object.isRequired
}
