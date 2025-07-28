import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getProducts } from "../api/api";

import "../styles/ManageProducts.scss";

const ManageProducts = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await getProducts(); // fixed function name
                setProducts(data);
            } catch (err) {
                console.error("Failed to load products", err);
            }
        };

        loadProducts(); // removed invalid lines
    }, []);

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <div className="manage-header">
                    <h2>Manage Products</h2>
                    <button className="add-btn" onClick={() => navigate("/add-product")}>
                        + Add Product
                    </button>
                </div>
                <div className="products-table">
                    <table>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>SKU</th>
                            <th>Quantity</th>
                            <th>Threshold</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>{product.name}</td>
                                <td>{product.sku}</td>
                                <td>{product.quantity}</td>
                                <td>{product.threshold}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;
