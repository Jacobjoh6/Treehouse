import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const navigate = useNavigate()
    return (
        <header className="header">
            <div>
     
            </div>
            <h1 className="header__heading" onClick={() => navigate('/')}>TreeHouse</h1>
            <h1 className="header__heading--small" onClick={() => navigate('/')}>TH</h1>
            <div className='header__search'>
 
            </div>
        </header>
    )
};

export default Header;