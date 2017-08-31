import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionInfo extends React.Component{
    constructor(props){
        super(props);
    }
    buildInfo(){
      let infoKeys = Object.keys(this.props.info);
      return infoKeys.map((key) => {
        return <p key={key}>{key} : {this.props.info[key]}</p>
      });
    }
    render(){
        return(
            <div className='championInfo'>
                <h1>{this.props.name} {this.props.title}</h1>
                <p>{this.props.blurb}</p>
                <div className='championTypeStats'>
                  <h3>Champion Type Stats: </h3>
                  { this.buildInfo() }
                </div>
            </div>
        )
    }
}
ChampionInfo.propTypes = {
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    lore: PropTypes.string.isRequired,
    blurb: PropTypes.string.isRequired
}
