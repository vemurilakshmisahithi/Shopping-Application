import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Ecommerce.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomePage from './HomePage';

const Modal = ({ message, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p className='message-modal'>{message}</p>
                <span onClick={onClose} className="close">&times;</span>
            </div>
        </div>
    )
}
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState('')
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true)
        }
    }, []);


    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username) {
            setUsernameError('Username is required');
        } else {
            setUsernameError('')
        }

        if (!password) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('')
        }

        if (!username || !password) {
            return;
        }

        try {
            const response = await fetch('https://fakestoreapi.com/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password
                })
            });

            if (!response.ok) {
                throw new Error('Invalid Username or Password');
            }

            const data = await response.json();
            console.log(data)
            localStorage.setItem('token', data.token);
            setIsLoggedIn(true);
            navigate('/home-page')
        }
        catch (error) {
            setError(error.message);
            setShowModal(true);
        }
    }

    const closeModal = () => {
        setShowModal(false);
    };

    if (isLoggedIn) {
        return <HomePage />;
    }

    return (
        <div className='login-page-background'>
            {showModal && <Modal message={error} onClose={closeModal} />}
            <form className="login-form-container" onSubmit={handleLogin}>
                <h1>
                    <AccountCircleIcon className='account-icon' />
                </h1>
                <p className='signin-title'>Sign In</p>
                <div>
                    <div className='tag-label'>
                        <label>Username:</label>
                    </div>
                    <input type="text"
                        id="username"
                        value={username}
                        className='input-field'
                        placeholder='Enter UserName'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {usernameError && <p className='error-message'>{usernameError}</p>}
                </div>
                <div>
                    <div className='tag-label'>
                        <label>Password:</label>
                    </div>
                    <input type="text"
                        id="password"
                        value={password}
                        className='input-field'
                        placeholder='Enter Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {passwordError && <p className='error-message'>{passwordError}</p>}
                </div>
                <div className='remember-forgot'>
                    <label><input type='checkbox' />Remember me</label>
                    <Link to="/forgot-password" className='forgot-pwd'>Forgot Password</Link>
                </div>
                <button type="submit" className='submit-button'>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
