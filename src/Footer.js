import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Ecommerce.css';

function Footer() {
    return (
        <footer className="footerStyle">
        <div className='flex-content'>
            <div className='list-style'>
                <h2 className='footer-header'>ONLINE SHOPPING</h2>
                <ul className='footer-list'>
                    <li>Home Accessories</li>
                    <li>Gadgets</li>
                    <li>Groceries</li>
                    <li>Beauty Products</li>
                </ul>
                <h2 className='footer-heading'>USEFUL LINKS</h2>
                <ul className='footer-list'>
                    <li>Blogs</li>
                    <li>Careers</li>
                    <li>Site Map</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div>
                <h2 className='footer-heading'>CUSTOMER POLICIES</h2>
                <ul className='footer-list'>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                    <li>T&C</li>
                    <li>Terms of Use</li>
                    <li>Track Orders</li>
                    <li>Shipping</li>
                    <li>Cancellation</li>
                    <li>Returns</li>
                    <li>Privacy Policy</li>
                    <li>Greivance Officer</li>
                </ul>
            </div>
            <div className='list-style'>
                <h5 className='footer-heading'>KEEP IN TOUCH </h5>
                <p><FacebookIcon />   <TwitterIcon />   <YouTubeIcon />   <InstagramIcon /></p>
            </div>
            <div className='guarantee-image'>
                <img src="./assets/icons/original.png" alt ="original"  className='original-icon'/>
                <span className='footer-content'><strong>100% ORIGINAL </strong>guarantee for <br />all products at myntra.com</span>
            </div>
        </div>
    </footer>   
    )
}

export default Footer
