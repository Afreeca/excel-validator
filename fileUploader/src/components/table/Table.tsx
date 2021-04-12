import React from 'react';
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";
import './style.css';

type tableData = {
    id: string,
    items: string[]
}

export const Table: React.FC<{theadData: string[], tbodyData: tableData[], customClass?: string}> = ({ theadData, tbodyData, customClass }) => {
    
    return (
        <table className={customClass?customClass:'table'}>
            <thead>
                <tr>
                    {theadData.map((h) => <TableHeadItem key={h} item={h} /> )}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => <TableRow key={item.id} data={item.items} /> )}
            </tbody>
        </table>
    );
}