import React from 'react';
import PropTypes from 'prop-types';

export default class Champ extends React.Component{
    render(){
        return (
            <div className='champion' >
                <img src={this.props.image} />
                <p className='briefDescription'>{this.props.name}</p>
            </div>
        );
    }
}

Champ.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
