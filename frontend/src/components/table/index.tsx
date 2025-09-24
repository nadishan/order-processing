import './index.css';
import type { TableProps } from './index.d';

const Table = (props: TableProps) => {
    const { headers, data } = props;

    return (
        <table className="table-auto table-container">
            <thead className="table-header">
                <tr>
                    {headers.map((header) => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody className='table-body'>
                {
                    data.map((row, idx) => (
                        <tr key={`${idx}_tr`}>
                            {
                                row.map((cell, _idx) => (
                                    <td key={`${_idx}_td`}>{cell}</td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table;