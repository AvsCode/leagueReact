import React from 'react';
import PropTypes from 'prop-types';

export default class ChampSearch extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        e.preventDefault();
        this.props.change(e.target.value);
    }
    render(){
        return(
            <div className='champSearch'>
                <label>Search: </label>
                <input type='text' placeholder='Search Champions' value={this.props.searchValue} onChange={this.handleChange}></input>
            </div>
        )
    }
}

ChampSearch.PropTypes = {
    searchValue: PropTypes.string.isRequired
}
