import React from "react";

const TableHeadItem: React.FC<{item:string}> = ({ item }) => {
    return (
        <td title={item}>
            {item}
        </td>
    );
};

export default TableHeadItem;