import React from 'react';

const TableRow = (props) => {
    if(!props.stat){
        return (
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        );
    }
    if(typeof(props.levelMultiplier) === 'number'){
        return(
            <tr>
                <td>{props.stat}: </td>
                <td>{props.statValue.toFixed(2)} <span className={'championStatsTablePerLevel'}> + ({props.perLevel.toFixed(2)})</span></td>
                <td className={'championStatsTablePerLevel'}>{(props.statValue + props.perLevel * props.levelMultiplier).toFixed(2)}</td>
            </tr>
        );
    }
    return (
        <tr>
            <td>{props.stat}: </td>
            <td>{props.statValue}</td>
            <td></td>
        </tr>
    );
};

export default TableRow;