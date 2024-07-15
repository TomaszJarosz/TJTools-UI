import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        // Zmień URL na odpowiedni endpoint API
        axios.get('https://your-api-endpoint.com/portfolio')
            .then(response => {
                setPortfolio(response.data);
            })
            .catch(error => {
                console.error('Error fetching portfolio data:', error);
            });
    }, []);

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
                {portfolio.map(item => (
                    <PortfolioItem key={item.holding_id} item={item} />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Portfolio;
