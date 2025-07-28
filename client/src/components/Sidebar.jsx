import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/components/Sidebar.scss";

const Sidebar = () => {
    const handleLogout = () => {
        alert("Logged out");
    };

    return (
        <div className="sidebar">
            <div>
                <h2 className="logo">Inventory</h2>
                <div className="nav-links">
                    <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
                    <NavLink to="/manage-products" activeclassname="active">Manage Products</NavLink>
                    <NavLink to="/logs" activeclassname="active">Logs</NavLink>
                    <NavLink to="/reports" activeclassname="active">Reports</NavLink>
                </div>
            </div>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Sidebar;
