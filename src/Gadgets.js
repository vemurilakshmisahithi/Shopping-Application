import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Ecommerce.css';
import Header from './Header';
import Footer from './Footer';
import { HandleAddProduct, handleEditProduct, handleDeleteProduct, handleInputChange, handleDrop, handleDragOver } from './ProductFunctions';

function Gadgets() {
    const [smartphones, setSmartphones] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [newProduct, setNewProduct] = useState({
        id: '',
        title: '',
        category: '',
        brand: '',
        price: '',
        images: []
    });
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        fetch('https://dummyjson.com/products/category/smartphones')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch smartphones');
                }
                return res.json();
            })
            .then(data => setSmartphones(data.products))
            .catch(error => setError(error.message));

        fetch('https://dummyjson.com/products/category/laptops')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch laptops');
                }
                return res.json();
            })
            .then(data => setLaptops(data.products))
            .catch(error => setError(error.message));
    }, []);

    useEffect(() => {
        setProducts([...smartphones, ...laptops]);
    }, [smartphones, laptops]);

    const toggleForm = () => {
        if (isEditing) {
            setNewProduct({
                id: '',
                title: '',
                category: '',
                brand: '',
                price: '',
                images: []
            });
            setIsEditing(false);
        }
        setShowForm(!showForm);
    };

    return (
        <div>
            <Header />
            <div style={{ marginTop: "150px" }}>
                <h1 className='product-title'>Products</h1>
                {showForm ? (
                    <div>
                        <h2 style={{ margin: "30px" }}>{isEditing ? 'Update Product' : 'Add New Product'}</h2>
                        <form className='form-container'>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={newProduct.title}
                                onChange={(e) => handleInputChange(e, newProduct, setNewProduct)}
                                className='input-boxcontainer'
                            />
                            <input
                                type="text"
                                name="category"
                                placeholder="Category"
                                value={newProduct.category}
                                onChange={(e) => handleInputChange(e, newProduct, setNewProduct)}
                                className='input-boxcontainer'
                            />
                            <input
                                type="text"
                                name="brand"
                                placeholder="Brand"
                                value={newProduct.brand}
                                onChange={(e) => handleInputChange(e, newProduct, setNewProduct)}
                                className='input-boxcontainer'
                            />
                            <input
                                type="text"
                                name="price"
                                placeholder="Price"
                                value={newProduct.price}
                                onChange={(e) => handleInputChange(e, newProduct, setNewProduct)}
                                className='input-boxcontainer'
                            />
                            <div
                                onDrop={(e) => handleDrop(e, newProduct, setNewProduct)}
                                onDragOver={handleDragOver}
                                className='drag-image'
                            >
                                Drop image here or click to select
                            </div>
                            <div style={{ margin: "20px 15px" }}>
                                <button
                                    type="button"
                                    onClick={() => HandleAddProduct(newProduct, isEditing, products, setProducts, setNewProduct, setShowForm, setIsEditing)}
                                    className={isEditing ? 'product-update' : 'add-update-product'}>
                                    {isEditing ? 'Update Product' : 'Add Product'}
                                </button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="product-grid">
                        {products.map(product => (
                            <Box key={product.id} className='product-box'>
                                <Paper>
                                    <div className="product-item">
                                        <div className='product-container'>
                                            {product.images && product.images.length > 0 && (
                                                <div className="image-container" style={{ marginBottom: "10px" }}>
                                                    <img src={product.images[0]} alt={product.title} />
                                                </div>
                                            )}
                                            <p>Brand: {product.brand}</p>
                                            <h2>Price: {product.price} /-</h2>
                                            <button onClick={() => handleEditProduct(product, setIsEditing, setNewProduct, setShowForm)}
                                                className='product-update'>
                                                Update
                                            </button>
                                            <button onClick={() => handleDeleteProduct(product.id, products, setProducts)}
                                                className='product-delete'>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        ))}
                    </div>
                )}
                <div style={{ margin: "15px" }} >
                    <button
                        onClick={toggleForm}
                        className='product-add'>
                        {showForm ? 'Cancel' : 'Add Product'}
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Gadgets;
