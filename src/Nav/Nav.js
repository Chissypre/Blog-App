import './Nav.styles.css'

import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav className=".nav-links-container">
            
                <Link className='nav-link' to="/">Home</Link>
                <Link className='nav-link' to="article">Post</Link>
                <Link className='nav-link' to="about">About</Link>
                <Link className='nav-link' to="Newsletter">Newsletter</Link>
                <Link className='nav-link' to="Contact">Contact</Link>
            
        </nav>
    )
}

export default Nav
