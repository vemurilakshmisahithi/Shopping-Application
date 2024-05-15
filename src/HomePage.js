import React, { useEffect, useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './Ecommerce.css';
import Product from './Product';

function HomePage() {
  
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className='section-container'>
        <Product />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
