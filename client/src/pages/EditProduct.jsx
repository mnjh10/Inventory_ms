import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { getProducts, updateProduct } from "../api/api";


const EditProduct = () => {
    const { id } = useParams(); // Get product ID from route
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        sku: "",
        quantity: "",
        threshold: "",
    });

    useEffect(() => {
// Fetch product list and find the one with matching ID
        const fetchProduct = async () => {
            try {
                const products = await getProducts();
                const product = products.find((p) => p._id === id);
                if (product) {
                    setFormData({
                        name: product.name,
                        sku: product.sku,
                        quantity: product.quantity,
                        threshold: product.threshold,
                    });
                }
            } catch (error) {
                console.error("Failed to fetch product", error);
            }
        };
        fetchProduct();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, formData);
            navigate("/manage-products"); // redirect after update
        } catch (error) {
            console.error("Failed to update product", error);
        }
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="dashboard-content">
                <h2>Edit Product</h2>
                <form className="product-form" onSubmit={handleSubmit}>
                    <label>Product Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />

                    php-template
                    Copy
                    Edit
                    <label>SKU</label>
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                    />

                    <label>Quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                    />

                    <label>Threshold</label>
                    <input
                        type="number"
                        name="threshold"
                        value={formData.threshold}
                        onChange={handleChange}
                    />

                    <button type="submit">Update Product</button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;