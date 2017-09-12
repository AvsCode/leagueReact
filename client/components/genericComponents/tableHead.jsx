import React from 'react';

const TableHead = (props) => {
    return (
        <tr>
            <th>{props.headTitle} </th>
            <th></th>
            <th></th>
        </tr>
    )
};

export default TableHead;