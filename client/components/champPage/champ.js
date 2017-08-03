import React from 'react';
import PropTypes from 'prop-types';

export default class Champ extends React.Component{


render(){
    return (
        <div className='champion'>
            <img src={this.props.image} />
            <span>{this.props.name}</span>
        </div>
    );
}

}

Champ.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
