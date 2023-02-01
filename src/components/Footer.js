import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div  className='about'>
            <p className><a href="/about">About Us</a></p>
            <p className><a href="/services">Services</a></p>
        </div>
        <div className='copyright'>
            <p className>Copyright © 2023 VAmaze</p>
        </div>
    </footer>
  );
}

export default Footer;
