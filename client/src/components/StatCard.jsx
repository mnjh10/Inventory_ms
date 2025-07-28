import React from "react";
import "../styles/StatCards.scss";

const StatCards = ({ stats }) => {
    return (
        <div className="stat-cards">
            <div className="card">
                <h3>Total Products</h3>
                <p>{stats.totalProducts}</p>
            </div>
            <div className="card">
                <h3>Total Sales</h3>
                <p>{stats.totalSales}</p>
            </div>
            <div className="card">
                <h3>Low Stock</h3>
                <p>{stats.lowStock}</p>
            </div>
            <div className="card">
                <h3>Reorders</h3>
                <p>{stats.reorders}</p>
            </div>
        </div>
    );
};

export default StatCards;
