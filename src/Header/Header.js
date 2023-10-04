import './Header.styles.css'
import {AiOutlineSearch} from 'react-icons/ai';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/tech logo.svg";

const Header = ({search, setSearch}) => {
    return (
        <header className="Header">
            <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link> 
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