import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionSpell extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        console.log(this.props);
        return(
            <div className='championSpell'>
                <h3>{this.props.spell.name}</h3>
                <h4>{this.props.spell.sanitizedDescription}</h4>
            </div>
        )
    }
}
