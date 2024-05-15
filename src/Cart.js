import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Ecommerce.css';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


const Cart = () => {
    const location = useLocation();
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const shippingCost = 5;

    useEffect(() => {
        if (location.state && location.state.product) {
            addToCart(location.state.product);
        }
    }, [location.state]);

    const addToCart = (product) => {
        setCart([...cart, { ...product, quantity: 1 }]);
        setTotalPrice(totalPrice + product.price);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item.id !== product.id);
        setCart(updatedCart);
        setTotalPrice(totalPrice - (product.price * product.quantity));
    };

    const increaseQuantity = (product) => {
        const updatedCart = cart.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCart(updatedCart);
        setTotalPrice(totalPrice + product.price);
    };

    const decreaseQuantity = (product) => {
        if (product.quantity > 1) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });
            setCart(updatedCart);
            setTotalPrice(totalPrice - product.price);
        }
    };

    const handleCheckout = () => {
        console.log("Processing checkout...");
        console.log("Cart items:", cart);
        console.log("Total Price:", totalPrice + shippingCost);
    
        setCart([]);
        setTotalPrice(0);

        alert("Your order has been successfully placed!");
    };

    return (
        <div>
            <h2 className='cart-header'>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p><img src='./assets/icons/Empty cart.webp' alt='empty cart' className='empty-cart'/></p>
            ) : (
                <div>
                    {cart.map(item => (
                        <div key={item.id} className='cart-wrapper'>
                            <div className='cart-image-item'>
                            <img src={item.images && item.images.length > 0 ? item.images[0] : ''} alt={item.title} width="100" />
                            </div>
                            <div className='cartitem-content'>
                            <h4>{item.title}</h4> 
                            <p className='cart-titlecontent'> {item.brand}  | {item.category} </p> 
                            </div>
                            <div className='right-cartitems'>
                            <div className='cart-quantity'>
                            <button onClick={() => decreaseQuantity(item)} className='decrease-cart'>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => increaseQuantity(item)} className='increase-cart'>+</button>
                            </div>
                            <div className='cartitem-price'>
                            <h4>${item.price * item.quantity}</h4>
                            </div>
                            <div>
                            <DeleteIcon onClick={() => removeFromCart(item)} className='cartitem-delete'/>
                            </div>
                            </div>
                        </div>
                    ))}
                   <div className="card">
                        <div className='card-body'>
                            
                            <p>Subtotal:</p>
                            <p>Shipping:</p>
                            <p>Total Price :</p>
                        </div>
                        <div className='card-total'>
                            <p>${totalPrice.toFixed(2)}</p>
                            <p>${shippingCost.toFixed(2)}</p>
                            <p>${(totalPrice + shippingCost).toFixed(2)}</p>
                            <button className="checkout-btn" onClick={handleCheckout}><ShoppingCartCheckoutIcon sx={{margin:"-5px 5px 0 0"}}/>Checkout</button>
                        </div>
                        
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;


