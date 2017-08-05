import React from 'react';
import PropTypes from 'prop-types';

export default class ChampSelector extends React.Component{
    render(){
        return (
            <select>
                {this.props.options.map((option) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        )
    }
}

ChampSelector.propTypes = {
    options: PropTypes.array.isRequired
}
