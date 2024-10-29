import React from "react";
import { useTable, useSortBy } from 'react-table';
import  "./Table.css";

interface InvoiceTableProps {
    data: any[];
    columns: any[];
  }
const Table: React.FC<InvoiceTableProps> = ({columns, data}) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
            columns,
            data,
        },
        useSortBy
    );

    return(
            <div className={'table-responsible'}>
                <table className={'customers'} {...getTableProps()}>

                    <thead>
                    {headerGroups.map((headerGroup, headerGroupIndex) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
                            {headerGroup.headers.map((column, columnIndex) => (
                            <th {...column.getHeaderProps()} key={columnIndex}>
                                {column.render('Header')}
                            </th>
                            ))}
                        </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row, rowIndex) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key={rowIndex} >
                            {row.cells.map((cell, cellIndex) => (
                                <td {...cell.getCellProps()} key={cellIndex}>
                                {cell.render('Cell')}
                                </td>
                            ))}
                            </tr>
                        );
                        })}
                    </tbody>
                </table>
            </div>

    );
};

export default Table;
