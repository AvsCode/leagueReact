import React from 'react';
import PropTypes from 'prop-types';

export default class ChampionSpell extends React.Component{
    constructor(props){
        super(props);
        this.spell = this.props.spell;
        this.buildDisplayTooltip(this.spell);
    }
    buildDisplayTooltip(spell){
          spell.displayTooltip = this.spell.sanitizedTooltip.replace(/{{ e([1-9]) }}/g, ($1, $2) => {
            return (`(${spell.effectBurn[$2]})`);
          });
          if(!spell.vars){
            return;
          }
          spell.displayTooltip = spell.displayTooltip.replace(/{{ (a[1-9]) }}/g, ($1, $2) => {
            for(let i = 0; i < spell.vars.length; i++){
              if(spell.vars[i].key === $2){
                return(`${spell.vars[i].coeff[0]} x ${spell.vars[i].link}`);
              }
            }
          });
          // need to look through the vars link prop to see if it is an array
            spell.displayTooltip = spell.displayTooltip.replace(/{{ (f[1-9]) }}/g, ($1, $2) => {
              for(let i = 0; i < spell.vars.length; i++){
                if(spell.vars[i].key === $2){
                  return(`${spell.vars[i].coeff[0]} x ${spell.vars[i].link}`);
                }
              }
                return(' ');
            });
      }
    render(){
        console.log(this.props);
        return(
            <div className='championSpell'>
                <h3>{this.spell.name}</h3>
                <h4>{this.spell.sanitizedDescription}</h4>
                <div>Cost: {this.spell.costBurn} {this.spell.costType}</div>
                <div>Range: {this.spell.rangeBurn}</div>
                <div>Cooldown (Seconds): {this.spell.cooldownBurn}</div>
                <div>{this.spell.displayTooltip}</div>
            </div>
        )
    }
}


// Need to search for < and capture until the second >
// Is there a way to capture both inside and outside the matches to place in an array?
