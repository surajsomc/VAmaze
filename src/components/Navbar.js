import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';
import { Button } from './Button';


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [isScrolling, setIsScrolling] = useState(false);
    
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else{
            setButton(true);
        }
    };

    const handleScroll = () => {
        if (window.pageYOffset > 70) {
          setIsScrolling(true);
        } else {
          setIsScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);



    useEffect(() =>{
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className={`navbar ${isScrolling&&!click ? 'scrolling' : ''}`}>
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            VAmaze
                        <img src={require("./MyImages/icons8-shocked-50.png")} style={{ width: '30px', height: '30px' }}/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <img src={require(click ? './MyImages/icons8-close-24.png' : './MyImages/icons8-menu-24.png')} alt="icon" />
                    </div>
                    <ul className={click ? 'nav-menu active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar