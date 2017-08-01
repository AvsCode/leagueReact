import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
        <div>
            <Link to="/">Champions</Link>
            <Link to="/items">Items</Link>
        </div>
    );
  }
}
