import React from 'react';
import request from 'request';

export default class App extends React.Component{
  constructor(props){
    super(props);
    request.get('http://localhost:5000/champions', function(err, res, body) {
        if(err){
            console.log(err);
        }
        else{
            console.log(body);
        }
    });
  }
  render(){
    return(
      <h1>Hello World</h1>
    );
  }
}
