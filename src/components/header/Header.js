import React from 'react';
import {Link} from 'react-router-dom'

import {ReactComponent as Logo} from '../../assets/crown.svg'
import './Header.scss';

const Header = () => (
    <header className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <nav className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            <Link className='option' to='/signin'>
                
            </Link>
        </nav>
    </header>
)

export default Header;