import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import './Ecommerce.css';
import ProductList from './ProductList';
import { Link } from 'react-router-dom';
import { Shimmer } from 'react-shimmer';

const Product = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div style={{ marginTop: "-100px" }}>
            <h1 className='product-title'>Products</h1>
            <div className="product-grid">
                {filteredProducts.map(product => (
                    <Box sx={{ margin: "0 10px 50px 10px", height: "300px", padding: "10px" }} key={product.id}
                    src='https://source.unsplash.com/random/800x600'
                    fallback={<Shimmer width={800} height={600} />}>
                        <Paper>
                            <Link to={`/product/${product.id}`} className='product-link'>
                                <div className="product-item" onClick={() => handleProductClick(product)}>
                                    <div style={{ padding: "12px", width: "180px", height: "200px", border: "1px solid #000", borderRadius: "6px", margin: "-5px 0 0 0 " }}>
                                        {product.images && product.images.length > 0 && (
                                            <div className="image-container" style={{ marginBottom: "10px" }}>
                                                <img src={product.images[0]} alt={product.title} />
                                            </div>
                                        )}
                                        <div>
                                             <p className='product-titleheading'>{product.title}</p>
                                            <p className='product-category'>{product.category}</p>
                                            <h1 className='product-discount'>{product.discountPercentage} OFF </h1>
                                            <p className='product-shop'>Shop Now</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Paper>
                    </Box>
                ))}
            </div>

        </div>
    );
}

export default Product;
