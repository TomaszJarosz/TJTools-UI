import React from 'react';

const PortfolioItem = ({ item }) => {
    return (
        <tr>
            <td>{item.name}</td>
            <td>{item.ticker}</td>
            <td>{item.shares}</td>
            <td>{item.purchase_price}</td>
            <td>{item.purchase_date}</td>
        </tr>
    );
};

export default PortfolioItem;
