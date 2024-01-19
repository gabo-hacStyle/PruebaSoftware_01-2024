import React from 'react';

//Componente de la tabla de valores
const Table = ({data}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>                </th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.date}>
                        <td>{item.date}</td>
                        <td>            </td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;