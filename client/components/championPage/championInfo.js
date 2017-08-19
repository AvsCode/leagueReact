import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionInfo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id='championInfo'>
                <h1>{this.props.name} {this.props.title}</h1>
                <p>{this.props.lore}</p>
            </div>
        )
    }
}
ChampionInfo.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    lore: PropTypes.string.isRequired
}
