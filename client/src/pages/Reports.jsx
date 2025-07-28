import React from "react";
import "../styles/Reports.scss";

const Reports = () => {
    const reports = [
        {
            title: "Inventory Summary - July",
            description: "Stock levels, items restocked, and current balance overview.",
            date: "2025-07-25",
        },
        {
            title: "Threshold Alerts",
            description: "List of items that went below threshold this month.",
            date: "2025-07-20",
        },
        {
            title: "Staff Activity Report",
            description: "Summary of staff logins and inventory changes.",
            date: "2025-07-18",
        },
    ];

    return (
        <div className="reports-page">
            <div className="report-card-container">
                {reports.map((report, index) => (
                    <div className="report-card" key={index}>
                        <h2>{report.title}</h2>
                        <p>{report.description}</p>
                        <p className="report-date">{report.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Reports;
