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
        return(
            <div className='championSpell'>
                <div className='championSpellImageTitleContainer'>
                    <img src={`https://ddragon.leagueoflegends.com/cdn/6.24.1/img/spell/${this.spell.image.full}`}></img>
                    <h3>{this.spell.name}</h3>
                    <h4>{this.spell.sanitizedDescription}</h4>
                </div>
                <div className='championSpellTextContainer'>
                    <p><span>Cost: </span>{this.spell.costBurn} {this.spell.costType === 'No Cost' ? ' ' : this.spell.costType}</p>
                    <p><span>Range: </span>{this.spell.rangeBurn}</p>
                    <p><span>Cooldown (Seconds): </span>{this.spell.cooldownBurn}</p>
                    <p><span>Description: </span>{this.spell.displayTooltip}</p>
                </div>
            </div>
        )
    }
}