import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './LoginPage';
import ForgotPassword from './ForgotPassword';
import HomePage from './HomePage';
import Product from './Product'; 
import ProductDetailPage from './ProductDetails'; 
import HomeAccessories from './HomeAccessories';
import Gadgets from './Gadgets';
import BeautyProducts from './BeautyProducts';
import Groceries from './Groceries';
import Cart from './Cart';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/home-accessories" element={<HomeAccessories />}  / >
          <Route path="/gadgets" element={<Gadgets />}  / >
          <Route path="/groceries" element={<Groceries/>}  / >
          <Route path="/beauty-products" element={<BeautyProducts />}  / >
          <Route path="/cart" element={<Cart/>}  / >
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
