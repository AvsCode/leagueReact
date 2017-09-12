import React from 'react';

const TableRow = (props) => {
    if(typeof(props.levelMultiplier) === 'number'){
        return(
            <tr>
                <td>{props.stat}: </td>
                <td>{props.statValue.toFixed(2)} + ({props.perLevel.toFixed(2)})</td>
                <td>{(props.statValue + props.perLevel * props.levelMultiplier).toFixed(2)}</td>
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