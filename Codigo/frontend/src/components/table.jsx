import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Table = ({data}) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                    <tr key={item.date}>
                        <td>{item.date}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;