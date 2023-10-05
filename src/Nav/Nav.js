import './Nav.styles.css';
import React, { useState, useEffect } from 'react';
import { HiX } from 'react-icons/hi';
import { HiMiniBars3CenterLeft } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 888);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 888);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className={`mobile-nav ${open ? 'active' : ''}`}>
          <div className="containbtn">
          <button className="navbar-toggle" onClick={toggleMenu}>
            {open ? <HiX size={25} /> : <HiMiniBars3CenterLeft size={25} />}
          </button>
          </div>
          <ul className="mobile-nav-links">
            <Link className="mobile-nav-link" to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link className="mobile-nav-link" to="/article" onClick={toggleMenu}>
              Post
            </Link>
            <Link className="mobile-nav-link" to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link className="mobile-nav-link" to="/Newsletter" onClick={toggleMenu}>
              Newsletter
            </Link>
            <Link className="mobile-nav-link" to="/Contact" onClick={toggleMenu}>
              Contact
            </Link>
          </ul>
        </div>
      ) : (
        <nav className="nav-links-container">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/article">
            Post
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
          <Link className="nav-link" to="/Newsletter">
            Newsletter
          </Link>
          <Link className="nav-link" to="/Contact">
            Contact
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Nav;
