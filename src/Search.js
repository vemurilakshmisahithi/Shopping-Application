import React, { useState, useEffect } from 'react';
import './Ecommerce.css';

const Search = ({ products, setFilteredProducts }) => {
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        setFilteredProducts(products);
    }, [products, setFilteredProducts]);

    const handleSearchInputChange = (event) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue);
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className='search-container'>
            <input
                type="text"
                placeholder='Search for Products, brands, and more'
                className='input-field2'
                value={searchInput}
                onChange={handleSearchInputChange}
            />
            <div className='search-icon-container'>
                <img className="search-icon" src="/assets/icons/search.svg" alt="Search" />
            </div>
        </div>
    );
}

export default Search;
