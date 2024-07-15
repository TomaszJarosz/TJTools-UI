import React from 'react';

const PortfolioItem = ({ item, asset }) => {
    return (
        <tr>
            <td>{asset.name}</td>
            <td>{asset.ticker}</td>
            <td>{item.shares}</td>
            <td>{item.purchasePrice}</td>
            <td>{item.purchaseDate}</td>
        </tr>
    );
};

export default PortfolioItem;
