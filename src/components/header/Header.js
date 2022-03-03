import React from 'react';
import {Link} from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './Header.scss';

const Header = ({currentUser}) => (
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
            {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
      )}
        </nav>
    </header>
)

export default Header;