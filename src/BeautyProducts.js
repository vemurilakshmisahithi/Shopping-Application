import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Ecommerce.css';
import Footer from './Footer';
import {
    HandleAddProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleInputChange,
    handleDrop,
    handleDragOver
} from './ProductFunctions';
import Headers from './Headers';

function BeautyProducts() {
    const [fragrances, setFragrances] = useState([]);
    const [skincare, setSkincare] = useState([]);
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
        fetch('https://dummyjson.com/products/category/fragrances')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch fragrances');
                }
                return res.json();
            })
            .then(data => setFragrances(data.products))
            .catch(error => setError(error.message));

        fetch('https://dummyjson.com/products/category/skincare')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch skincare');
                }
                return res.json();
            })
            .then(data => setSkincare(data.products))
            .catch(error => setError(error.message));
    }, []);

    useEffect(() => {
        setProducts([...fragrances, ...skincare]);
    }, [fragrances, skincare]);

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
            <Headers />
            <div className='nav-headerstyle'>
                <h1 className='product-title'>Products</h1>
                {showForm ? (
                    <div>
                        <h2 className={isEditing?'update-product':'add-products'}>{isEditing ? 'Update Product' : 'Add New Product'}</h2>
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
                                <button type="button"
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
                            <Box key={product.id} className="product-box">
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
                                            <button onClick={() => handleEditProduct(product, setIsEditing, setNewProduct, setShowForm)} className='product-update'>Update</button>
                                            <button onClick={() => handleDeleteProduct(product.id, products, setProducts)} className='product-delete'>Delete</button>
                                        </div>
                                    </div>
                                </Paper>
                            </Box>
                        ))}
                    </div>
                )}
                <div style={{ margin: "15px" }} >
                    <button onClick={toggleForm} className={showForm ?'product-cancel ':'product-add'}>{showForm ? 'Cancel' : 'Add Product'}</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default BeautyProducts;
