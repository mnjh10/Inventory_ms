import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import "../styles/AddProduct.scss";
import { addProduct } from "../api/api";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        quantity: "",
        threshold: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addProduct(formData);
            alert("Product added successfully!");
            setFormData({ name: "", sku: "", quantity: "", threshold: "" });
        } catch (err) {
            console.error("Error adding product:", err);
            alert("Failed to add product.");
        }
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h2>Add New Product</h2>
                <form className="product-form" onSubmit={handleSubmit}>
                    <label>Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter product name" />

                    php-template
                    Copy
                    Edit
                    <label>SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        placeholder="Enter SKU"
                    />

                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity"
                    />

                    <label>Threshold</label>
                    <input
                        type="number"
                        name="threshold"
                        value={formData.threshold}
                        onChange={handleChange}
                        placeholder="Enter threshold"
                    />

                    <button type="submit">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;