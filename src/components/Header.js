import React from  'react';
import Logo1 from '../images/venturads-instagram.jpg';
import '../styles/Header.css';

function Header() {
    return (
        <div className="header">
            <img className="main_logo" src={Logo1} />
        </div>
    )
}

export default Header;