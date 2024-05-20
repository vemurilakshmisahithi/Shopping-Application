import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { useMediaQuery } from '@mui/material';
import Search from './Search';
import './Ecommerce.css';
import AccountMenu from './AccountMenu';
import Product from './Product';

const Headers = () => {
    const isSmallScreen = useMediaQuery('(min-width: 991px)'); 
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch products');
                }
                return res.json();
            })
            .then(data => {
                setProducts(data.products);
                setFilteredProducts(data.products);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div>
            <header className="headerStyle">
                <div className='title-style'>  
                        <Link to="/home-page">
                            <img src="/assets/icons/website.png" alt="my website" className='website-logo' />
                        </Link>
                </div>
                {isSmallScreen && (
                <ul className="navStyle">
                    <li>
                        <Link to="/home-accessories" className="navItem" >
                            <span>
                                Home Accessories
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/gadgets" className="navItem">
                            <span>
                                Gadgets
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/groceries" className="navItem">
                            <span>
                                Groceries
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/beauty-products" className="navItem">
                            <span>
                                Beauty Products
                            </span>
                        </Link>
                    </li>
                </ul>
                )}
                <div>
                    <Search products={products}  setFilteredProducts={setFilteredProducts} />
                </div>
                <div>
                    <ul className="right-nav">
                        <div>
                            <AccountMenu />
                        </div>
                        <div className='cart-items'>
                            <Link to="/cart" className='link-cart'>
                                <ShoppingCartSharpIcon className='outline-icon' />
                                <li className="right-navItem">
                                    Cart
                                </li>
                            </Link>
                        </div>
                    </ul>
                </div>
            </header>
           
        </div>
    );
}

export default Headers;
