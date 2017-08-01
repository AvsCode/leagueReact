import React from 'react';
import { connect } from 'react-redux';


export default class ItemPage extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <h1>Hello from Items</h1>
    );
  }
}
