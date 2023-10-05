import './Header.styles.css'
import { useState, useEffect } from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/tech logo big.svg";
import { ReactComponent as Logo2 } from "../assets/tech logo small.svg";

const Header = ({search, setSearch}) => {
    const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 484);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

   return(
        <header className="Header">
            {isMobileView ? (
                <Link className='logo-container' to='/'>
          <Logo2 className='logo' />
        </Link>
            ):
            <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link> }
        <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
            <div className="searchContainer">
        <input
            id="search"
            type="text"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="searchButton">
            <AiOutlineSearch className="searchIcon" />
        </button>
    </div>
            </form>
            
        </header>
   )
        }
    




export default Header