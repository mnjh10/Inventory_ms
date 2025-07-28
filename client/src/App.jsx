import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AddProduct from './pages/AddProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';
import Logs from './pages/Logs.jsx';
import Reports from './pages/Reports.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import ManageProducts from "./pages/ManageProducts";
import Sidebar from "./components/Sidebar.jsx";


const App = () => {
    return (
        <Router>
            <Routes>
                {/* Public Route */}
                <Route path="/" element={<Login />} />

                {/* Protected Routes */}
                <Route path="/manage-products" element={<ManageProducts />} />
                <Route path="/add-product" element={<AddProduct />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/add-product"
                    element={
                        <PrivateRoute>
                            <AddProduct />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/edit-product/:id"
                    element={
                        <PrivateRoute>
                            <EditProduct />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/logs"
                    element={
                        <PrivateRoute>
                            <Logs />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="/reports"
                    element={
                        <PrivateRoute>
                            <Sidebar />
                            <Reports />
                        </PrivateRoute>
                    }

                />
            </Routes>
        </Router>
    );
};

export default App;
