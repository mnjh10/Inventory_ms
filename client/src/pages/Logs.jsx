import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { getLogs } from "../api/api";
import "../styles/Logs.scss";

const Logs = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const data = await getLogs();
                setLogs(data);
            } catch (error) {
                console.error("Error fetching logs:", error);
            }
        };
        fetchLogs();
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="logs-content">
                <h2>Inventory Logs</h2>
                <div className="logs-glass-box">
                    <ul>
                        {logs.length > 0 ? (
                            logs.map((log) => (
                                <li key={log._id || log.id}>
                                    <strong>{log.message}</strong>
                                    <span>{log.time}</span>
                                </li>
                            ))
                        ) : (
                            <li>No logs available</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Logs;