import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import InventoryChart from "../components/InventoryChart";
import SalesChart from "../components/SalesChart";
import { fetchDashboardStats } from "../api/api";
import "../styles/Dashboard.scss";

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalProducts: 0,
        lowStock: 0,
        salesToday: 0,
    });

    useEffect(() => {
        const loadStats = async () => {
            try {
                const data = await fetchDashboardStats();
                setStats(data);
            } catch (err) {
                console.error("Failed to load dashboard stats", err);
            }
        };

        loadStats(); // Corrected this line
    }, []);

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-content">
                <h2 className="dashboard-title">Welcome to Inventory Dashboard</h2>

                <div className="dashboard-cards">
                    <div className="card">
                        <h3>Total Products: <span>{stats.totalProducts}</span></h3>
                    </div>
                    <div className="card">
                        <h3>Low Stock Alerts: <span>{stats.lowStock}</span></h3>
                    </div>
                    <div className="card">
                        <h3>Sales Today: <span>${stats.salesToday}</span></h3>
                    </div>
                </div>

                <div className="charts-section">
                    <div className="chart-container">
                        <InventoryChart />
                    </div>
                    <div className="chart-container">
                        <SalesChart />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
