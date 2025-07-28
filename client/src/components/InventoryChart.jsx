// src/components/InventoryChart.jsx

import React from "react";
import {
    Chart as ChartJS,
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register chart components
ChartJS.register(
    LineElement,
    PointElement,
    LinearScale,
    CategoryScale,
    Filler,
    Tooltip,
    Legend
);

const InventoryChart = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Inventory",
                data: [100, 95, 90, 85, 80, 75, 70],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#4bc0c0",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: true },
        },
    };

    return <Line data={data} options={options} />;
};

export default InventoryChart;
