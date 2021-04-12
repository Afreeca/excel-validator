import React from "react";

const TableRow: React.FC<{data: string[]}> = ({ data }) => {
    return (
        <tr>
            {data.map((item) => {
                return <td key={item}>{item}</td>;
            })}
        </tr>
    );
};

export default TableRow;