import React from 'react';

const TableHead = (props) => {
    return (
        <tr>
            <th>{props.headTitle} </th>
            <th>{props.headTitle2}</th>
            <th>{props.headTitle3}</th>
        </tr>
    )
};

export default TableHead;