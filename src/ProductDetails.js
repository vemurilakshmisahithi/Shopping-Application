import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import Header from './Header';
import Footer from './Footer';
import Headers from './Headers';

const ProductDetailPage = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://dummyjson.com/product/${productId}`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch product details');
                }
                return res.json();
            })
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [productId]);

    const addToCart = () => {

        navigate('/cart', { state: { product } });
    };

    return (
        <div>
            <Headers />
            <div className='nav-headerstyle'>
                {product && <ProductList product={product} addToCart={addToCart} />}
            </div>
            <Footer />
        </div>
    );
}

export default ProductDetailPage;
