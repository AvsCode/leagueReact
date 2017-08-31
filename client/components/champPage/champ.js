import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Champ extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    buildTags(){
        return this.props.tags.map((tag) => `${tag} `);
    }
    handleChange(){
        this.props.clickHandler(this.props.champion.key);
    }
    render(){
        return (
            <Link to={`/champion/${this.props.name}`}>
                <div onClick={this.handleChange} className={'champion ' + this.props.tags[0].toLowerCase()}>
                    <img src={this.props.image} />
                    <p className='briefDescription'>{this.props.name}</p>
                    <p className='championTags'>{this.buildTags()}</p>
                </div>
            </Link>
        );
    }
}

Champ.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    clickHandler: PropTypes.func.isRequired
};
