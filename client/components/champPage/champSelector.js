import React from 'react';
import PropTypes from 'prop-types';

export default class ChampSelector extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(e){
      e.preventDefault();
      this.props.change(e.target.value);
    }

    render(){
        return (
            <select onChange={this.handleClick}>
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
