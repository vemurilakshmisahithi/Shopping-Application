import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import './Ecommerce.css';

function ProductList({ product, addToCart }) {
    const { id, title, brand, category, price, images } = product;

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div>
            <h2 style={{ marginLeft: "20px" }}>{title}</h2>
            <div>
                <Box  className="box-container">
                    <Paper elevation={3}>
                        <img src={images && images.length > 0 ? images[0] : ''} alt={title} width="100%" />
                        <div style={{ padding: '10px' }}>
                            <h3>{title}</h3>
                            <p><strong>Brand:</strong> {brand}</p>
                            <p><strong>Category:</strong> {category}</p>
                            <p><strong>Price:</strong> ${price}</p>
                            <button onClick={handleAddToCart} className='add-cart'>Add to Cart</button>
                        </div>
                    </Paper>
                </Box>
            </div>
        </div>
    );
}

export default ProductList;
