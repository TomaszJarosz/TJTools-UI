import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        // Zmień URL na odpowiedni endpoint API
        axios.get('http://localhost:8080/api/portfolios/1/holdings')
            .then(response => {
                setPortfolio(response.data);
            })
            .catch(error => {
                console.error('Error fetching portfolio data:', error);
            });

        // axios.get('https://your-api-endpoint.com/assets')
        //     .then(response => {
        //         setAssets(response.data);
        //     })
        //     .catch(error => {
        //         console.error('Error fetching assets data:', error);
        //     });
    }, []);

    const getAssetDetails = (assetId) => {
        return assets.find(asset => asset.assetId === assetId) || {};
    };

    return (
        <div>
            <h1>My Portfolio</h1>
            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Ticker</th>
                    <th>Shares</th>
                    <th>Purchase Price</th>
                    <th>Purchase Date</th>
                </tr>
                </thead>
                <tbody>
                {portfolio.map(item => {
                    const asset = getAssetDetails(item.assetId);
                    return <PortfolioItem key={item.holdingId} item={item} asset={asset} />;
                })}
                </tbody>
            </table>
        </div>
    );
};

export default Portfolio;
